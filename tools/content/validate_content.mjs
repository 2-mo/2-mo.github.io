#!/usr/bin/env node

import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import * as bibtexParse from '@orcid/bibtex-parse-js';
import { parse as parseToml } from 'smol-toml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const contentDir = path.join(repoRoot, 'content');
const publicDir = path.join(repoRoot, 'public');
const configFile = 'content/config.toml';

const pageTypes = new Set(['about', 'publication', 'card', 'text', 'cv', 'embed']);
const navTypes = new Set(['section', 'page', 'link']);
const aboutSectionTypes = new Set(['markdown', 'publications', 'list', 'cards', 'timeline']);
const cardVariants = new Set(['default', 'portal', 'projects', 'experience']);
const customBibFields = new Set([
  'abbr',
  'arxiv',
  'award',
  'awards',
  'code',
  'data',
  'dataset',
  'demo',
  'description',
  'html',
  'keywords',
  'pdf',
  'preview',
  'selected',
  'slides',
  'summary',
  'tldr',
  'video',
]);
const knownBibFields = new Set([
  'abstract',
  'address',
  'annote',
  'author',
  'booktitle',
  'chapter',
  'crossref',
  'doi',
  'edition',
  'editor',
  'eprint',
  'howpublished',
  'institution',
  'isbn',
  'issn',
  'journal',
  'key',
  'month',
  'note',
  'number',
  'organization',
  'pages',
  'publisher',
  'school',
  'series',
  'title',
  'type',
  'url',
  'volume',
  'year',
  ...customBibFields,
]);
const urlBibFields = ['code', 'dataset', 'data', 'demo', 'html', 'pdf', 'slides', 'url', 'video'];
const urlCardFields = ['link', 'repo'];
const imageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp']);

const errors = [];

function addError(file, location, message) {
  errors.push(`${file}${location ? ` ${location}` : ''}: ${message}`);
}

function relativeFile(absolutePath) {
  return path.relative(repoRoot, absolutePath).split(path.sep).join('/');
}

function readText(file) {
  return readFileSync(path.join(repoRoot, file), 'utf8');
}

function parseTomlFile(file) {
  try {
    return parseToml(readText(file));
  } catch (error) {
    addError(file, '<parse>', error.message);
    return null;
  }
}

function isRecord(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function requireRecord(file, location, value) {
  if (isRecord(value)) return true;
  addError(file, location, 'expected object.');
  return false;
}

function requireArray(file, location, value) {
  if (Array.isArray(value)) return true;
  addError(file, location, 'expected array.');
  return false;
}

function requireNonEmptyString(file, location, value) {
  if (isNonEmptyString(value)) return true;
  addError(file, location, 'expected non-empty string.');
  return false;
}

function validateOptionalString(file, location, value) {
  if (value !== undefined && typeof value !== 'string') {
    addError(file, location, 'expected string when provided.');
  }
}

function validateOptionalBoolean(file, location, value) {
  if (value !== undefined && typeof value !== 'boolean') {
    addError(file, location, 'expected boolean when provided.');
  }
}

function validateStringArray(file, location, value) {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    addError(file, location, 'expected array of strings.');
  }
}

function validateFiniteNumber(file, location, value) {
  if (value !== undefined && (typeof value !== 'number' || !Number.isFinite(value))) {
    addError(file, location, 'expected finite number when provided.');
  }
}

function hasPathTraversal(value) {
  return value.split(/[\\/]+/).includes('..');
}

function publicFileForPath(value) {
  if (!value.startsWith('/')) return null;
  return path.resolve(publicDir, `.${value}`);
}

function validatePublicAsset(file, location, value, options = {}) {
  const { required = false, imageOnly = false } = options;
  if (value === undefined || value === '') {
    if (required) addError(file, location, 'expected root-relative public path.');
    return;
  }
  if (!requireNonEmptyString(file, location, value)) return;
  if (!value.startsWith('/')) {
    addError(file, location, 'expected root-relative public path starting with "/".');
    return;
  }
  if (hasPathTraversal(value)) {
    addError(file, location, 'must not contain path traversal segments.');
    return;
  }

  const assetPath = publicFileForPath(value);
  if (!assetPath || !assetPath.startsWith(`${publicDir}${path.sep}`) || !existsSync(assetPath)) {
    addError(file, location, `missing public asset "${value}" at ${relativeFile(assetPath ?? publicDir)}.`);
    return;
  }
  if (!statSync(assetPath).isFile()) {
    addError(file, location, `expected "${value}" to resolve to a file.`);
    return;
  }
  if (imageOnly && !imageExtensions.has(path.extname(assetPath).toLowerCase())) {
    addError(file, location, `expected image file extension for "${value}".`);
  }
}

function validateHttpUrl(file, location, value, options = {}) {
  const { required = false, allowRootRelative = false, allowMailto = false } = options;
  if (value === undefined || value === '') {
    if (required) addError(file, location, 'expected URL.');
    return;
  }
  if (!requireNonEmptyString(file, location, value)) return;
  if (allowRootRelative && value.startsWith('/')) {
    validatePublicAsset(file, location, value);
    return;
  }
  if (allowMailto && value.startsWith('mailto:')) {
    if (value === 'mailto:') addError(file, location, 'expected email address after mailto:.');
    return;
  }
  try {
    const url = new URL(value);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      addError(file, location, 'expected http(s) URL.');
    }
  } catch {
    addError(file, location, 'expected valid URL.');
  }
}

function expectedPageHref(slug) {
  return slug === 'about' ? '/' : `/${slug}`;
}

function contentFileExists(source) {
  return existsSync(path.join(contentDir, source));
}

function validateContentSource(file, location, value, options = {}) {
  const { required = false } = options;
  if (value === undefined || value === '') {
    if (required) addError(file, location, 'expected content source file.');
    return;
  }
  if (!requireNonEmptyString(file, location, value)) return;
  if (path.isAbsolute(value) || hasPathTraversal(value)) {
    addError(file, location, 'expected content-relative file path without traversal.');
    return;
  }
  if (!contentFileExists(value)) {
    addError(file, location, `missing content source "${value}" at content/${value}.`);
  }
}

function validateNavigation(config) {
  const file = configFile;
  if (!requireRecord(file, 'site', config.site)) return;
  requireNonEmptyString(file, 'site.title', config.site.title);
  requireNonEmptyString(file, 'site.description', config.site.description);
  validatePublicAsset(file, 'site.favicon', config.site.favicon, { imageOnly: true });

  if (requireRecord(file, 'author', config.author)) {
    requireNonEmptyString(file, 'author.name', config.author.name);
    requireNonEmptyString(file, 'author.title', config.author.title);
    requireNonEmptyString(file, 'author.institution', config.author.institution);
    validatePublicAsset(file, 'author.avatar', config.author.avatar, { imageOnly: true });
  }

  if (isRecord(config.social)) {
    for (const [key, value] of Object.entries(config.social)) {
      const location = `social.${key}`;
      if (Array.isArray(value)) {
        if (value.some((item) => typeof item !== 'string')) addError(file, location, 'expected array of strings.');
      } else if (typeof value !== 'string') {
        addError(file, location, 'expected string or array of strings.');
      }
      if (typeof value === 'string' && /(?:url|scholar|github|linkedin|orcid)$/i.test(key) && value) {
        validateHttpUrl(file, location, value);
      }
    }
  }

  if (requireRecord(file, 'features', config.features)) {
    validateOptionalBoolean(file, 'features.enable_likes', config.features.enable_likes);
    validateOptionalBoolean(file, 'features.enable_one_page_mode', config.features.enable_one_page_mode);
    validateOptionalBoolean(file, 'features.enable_scholar_citations', config.features.enable_scholar_citations);
  }

  if (!requireArray(file, 'navigation', config.navigation)) return;

  const seenTargets = new Set();
  for (const [index, item] of config.navigation.entries()) {
    const location = `navigation[${index}]`;
    if (!requireRecord(file, location, item)) continue;
    requireNonEmptyString(file, `${location}.title`, item.title);
    requireNonEmptyString(file, `${location}.target`, item.target);
    requireNonEmptyString(file, `${location}.href`, item.href);
    validateOptionalString(file, `${location}.icon`, item.icon);
    if (!navTypes.has(item.type)) {
      addError(file, `${location}.type`, `expected one of ${[...navTypes].join(', ')}.`);
      continue;
    }

    if (typeof item.target === 'string') {
      if (seenTargets.has(`${item.type}:${item.target}`)) {
        addError(file, `${location}.target`, `duplicate ${item.type} target "${item.target}".`);
      }
      seenTargets.add(`${item.type}:${item.target}`);
    }

    if (item.type === 'page') {
      if (typeof item.target === 'string' && /[\\/]|(^|[\\/])\.\.($|[\\/])/.test(item.target)) {
        addError(file, `${location}.target`, 'expected page slug, not a file path.');
      }
      if (typeof item.target === 'string' && typeof item.href === 'string') {
        const expected = expectedPageHref(item.target);
        if (item.href !== expected) {
          addError(file, `${location}.href`, `expected "${expected}" for page target "${item.target}".`);
        }
      }
      const pageFile = `content/${item.target}.toml`;
      if (typeof item.target === 'string' && !existsSync(path.join(repoRoot, pageFile))) {
        addError(file, `${location}.target`, `missing page config for slug "${item.target}" at ${pageFile}.`);
      }
    } else if (item.type === 'section') {
      if (typeof item.target === 'string' && typeof item.href === 'string') {
        const allowed = new Set([`#${item.target}`, `/#${item.target}`]);
        if (!allowed.has(item.href)) {
          addError(file, `${location}.href`, `expected "#${item.target}" or "/#${item.target}".`);
        }
      }
    } else if (item.type === 'link') {
      validateHttpUrl(file, `${location}.href`, item.href, { allowRootRelative: true, allowMailto: true });
    }
  }
}

function validatePage(slug) {
  const file = `content/${slug}.toml`;
  const page = parseTomlFile(file);
  if (!page || !requireRecord(file, '<root>', page)) return null;

  if (!pageTypes.has(page.type)) addError(file, 'type', `expected one of ${[...pageTypes].join(', ')}.`);
  requireNonEmptyString(file, 'title', page.title);
  validateOptionalString(file, 'description', page.description);

  if (page.type === 'about') validateAboutPage(file, page);
  if (page.type === 'publication') validatePublicationPage(file, page);
  if (page.type === 'text') validateTextPage(file, page);
  if (page.type === 'card') validateCardPage(file, page);
  if (page.type === 'cv') validatePublicAsset(file, 'pdf', page.pdf, { required: true });
  if (page.type === 'embed') validateHttpUrl(file, 'src', page.src, { required: true, allowRootRelative: true });
  return page;
}

function validateAboutPage(file, page) {
  if (page.profile !== undefined && isRecord(page.profile) && page.profile.research_interests !== undefined) {
    validateStringArray(file, 'profile.research_interests', page.profile.research_interests);
  }
  if (!requireArray(file, 'sections', page.sections)) return;
  for (const [index, section] of page.sections.entries()) {
    const location = `sections[${index}]`;
    if (!requireRecord(file, location, section)) continue;
    requireNonEmptyString(file, `${location}.id`, section.id);
    if (!aboutSectionTypes.has(section.type)) {
      addError(file, `${location}.type`, `expected one of ${[...aboutSectionTypes].join(', ')}.`);
    }
    validateOptionalString(file, `${location}.title`, section.title);
    validateOptionalString(file, `${location}.filter`, section.filter);
    if (section.variant !== undefined && !cardVariants.has(section.variant)) {
      addError(file, `${location}.variant`, `expected one of ${[...cardVariants].join(', ')}.`);
    }
    validateFiniteNumber(file, `${location}.limit`, section.limit);
    validateContentSource(file, `${location}.source`, section.source, {
      required: section.type === 'markdown' || section.type === 'list' || section.type === 'cards' || section.type === 'timeline',
    });
  }
}

function validatePublicationPage(file, page) {
  validateContentSource(file, 'source', page.source, { required: true });
}

function validateTextPage(file, page) {
  validateContentSource(file, 'source', page.source);
  validateOptionalString(file, 'content', page.content);
  if (!isNonEmptyString(page.source) && !isNonEmptyString(page.content)) {
    addError(file, 'source', 'expected non-empty source or content for text page.');
  }
}

function validateCardPage(file, page) {
  if (page.grouped !== undefined && typeof page.grouped !== 'boolean') addError(file, 'grouped', 'expected boolean when provided.');
  if (page.variant !== undefined && !cardVariants.has(page.variant)) {
    addError(file, 'variant', `expected one of ${[...cardVariants].join(', ')}.`);
  }
  if (page.items !== undefined) {
    if (requireArray(file, 'items', page.items)) {
      page.items.forEach((item, index) => validateCardItem(file, `items[${index}]`, item));
    }
  }
  if (page.groups !== undefined) {
    if (requireArray(file, 'groups', page.groups)) {
      page.groups.forEach((group, groupIndex) => {
        const location = `groups[${groupIndex}]`;
        if (!requireRecord(file, location, group)) return;
        requireNonEmptyString(file, `${location}.title`, group.title);
        if (requireArray(file, `${location}.items`, group.items)) {
          group.items.forEach((item, itemIndex) => validateCardItem(file, `${location}.items[${itemIndex}]`, item));
        }
      });
    }
  }
  if (page.items === undefined && page.groups === undefined) addError(file, 'items', 'expected items or groups for card page.');
  if (page.grouped === true && page.groups === undefined) addError(file, 'groups', 'expected groups when grouped is true.');
}

function validateCardItem(file, location, item) {
  if (!requireRecord(file, location, item)) return;
  requireNonEmptyString(file, `${location}.title`, item.title);
  validateOptionalString(file, `${location}.subtitle`, item.subtitle);
  validateOptionalString(file, `${location}.date`, item.date);
  validateOptionalString(file, `${location}.content`, item.content);
  validateOptionalString(file, `${location}.status`, item.status);
  validateOptionalString(file, `${location}.source`, item.source);
  validateOptionalString(file, `${location}.logo`, item.logo);
  if (item.tags !== undefined) validateStringArray(file, `${location}.tags`, item.tags);
  if (item.metrics !== undefined) {
    if (requireArray(file, `${location}.metrics`, item.metrics)) {
      item.metrics.forEach((metric, index) => {
        const metricLocation = `${location}.metrics[${index}]`;
        if (!requireRecord(file, metricLocation, metric)) return;
        requireNonEmptyString(file, `${metricLocation}.label`, metric.label);
        requireNonEmptyString(file, `${metricLocation}.value`, metric.value);
      });
    }
  }
  for (const field of urlCardFields) validateHttpUrl(file, `${location}.${field}`, item[field]);
  validatePublicAsset(file, `${location}.image`, item.image, { imageOnly: true });
  validatePublicAsset(file, `${location}.logo`, item.logo, { imageOnly: true });
}

function cleanBibValue(value) {
  return typeof value === 'string' ? value.replace(/[{}]/g, '').trim() : '';
}

function validateBibFile(file) {
  const bibPath = path.join(repoRoot, file);
  if (!existsSync(bibPath)) {
    addError(file, '<file>', 'missing BibTeX file.');
    return;
  }
  let entries;
  try {
    entries = bibtexParse.toJSON(readText(file));
  } catch (error) {
    addError(file, '<parse>', error.message);
    return;
  }
  if (!Array.isArray(entries) || entries.length === 0) {
    addError(file, '<root>', 'expected at least one BibTeX entry.');
    return;
  }
  const citationKeys = new Set();
  for (const [index, entry] of entries.entries()) {
    const key = entry.citationKey || `entry[${index}]`;
    const location = `@${entry.entryType || 'unknown'}{${key}}`;
    if (!entry.citationKey) addError(file, `${location}.citationKey`, 'expected citation key.');
    if (citationKeys.has(entry.citationKey)) addError(file, `${location}.citationKey`, `duplicate citation key "${entry.citationKey}".`);
    citationKeys.add(entry.citationKey);
    if (!isRecord(entry.entryTags)) {
      addError(file, location, 'expected entry tags.');
      continue;
    }

    const tags = entry.entryTags;
    requireNonEmptyString(file, `${location}.title`, tags.title);
    requireNonEmptyString(file, `${location}.author`, tags.author);
    requireNonEmptyString(file, `${location}.year`, tags.year);
    if (tags.year !== undefined && !/^\d{4}$/.test(cleanBibValue(tags.year))) {
      addError(file, `${location}.year`, 'expected four-digit year.');
    }
    for (const field of Object.keys(tags)) {
      if (!knownBibFields.has(field.toLowerCase())) {
        addError(file, `${location}.${field}`, `unknown BibTeX/custom field. Add it to validate_content.mjs if intentional.`);
      }
    }
    for (const field of urlBibFields) {
      if (tags[field] !== undefined) validateHttpUrl(file, `${location}.${field}`, cleanBibValue(tags[field]));
    }
    if (tags.selected !== undefined && !['true', 'false', 'yes', 'no'].includes(cleanBibValue(tags.selected).toLowerCase())) {
      addError(file, `${location}.selected`, 'expected boolean-like value true/false/yes/no.');
    }
    if (tags.preview !== undefined) {
      const preview = cleanBibValue(tags.preview);
      if (preview.startsWith('/') || hasPathTraversal(preview)) {
        addError(file, `${location}.preview`, 'expected image filename under public/papers, not an absolute or traversing path.');
      } else {
        validatePublicAsset(file, `${location}.preview`, `/papers/${preview}`, { required: true, imageOnly: true });
      }
    }
  }
}

const parsedConfig = parseTomlFile(configFile);
if (parsedConfig) {
  validateNavigation(parsedConfig);

  if (Array.isArray(parsedConfig.navigation)) {
    for (const item of parsedConfig.navigation) {
      if (isRecord(item) && item.type === 'page' && typeof item.target === 'string') {
        validatePage(item.target);
      }
    }
  }
}

validateBibFile('content/publications.bib');

if (errors.length > 0) {
  console.error(`Content validation failed with ${errors.length} error${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Content validation passed.');
