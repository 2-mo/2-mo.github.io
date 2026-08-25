# Polaris Navigation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve Polaris with task-oriented category navigation, a wider responsive layout, readable card descriptions, and browser-local favorites and recent visits.

**Architecture:** Keep the existing TOML groups as fine-grained sections and add an optional `category` field for six task-oriented parent categories. Render portal pages with a dedicated client component so local interaction state stays isolated from project and experience card pages.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, TOML content, browser `localStorage`.

---

### Task 1: Extend the content model

**Files:**
- Modify: `src/types/page.ts`
- Modify: `src/content/validation.ts`
- Modify: `tools/content/validate_content.mjs`
- Modify: `content/research-links.toml`

**Steps:**

1. Add optional `category?: string` to `CardGroup`.
2. Validate `category` as an optional non-empty string in both runtime and standalone validators.
3. Assign each existing group to one of: `论文与投稿`, `AI / 开发工具`, `文档与效率`, `绘图与设计`, `数据与机构`, `系统与软件`.
4. Run `npm run validate:content`; expect `Content validation passed.`

### Task 2: Build a portal-specific client component

**Files:**
- Create: `src/components/pages/PortalPage.tsx`
- Modify: `src/components/pages/CardPage.tsx`

**Steps:**

1. Derive parent categories and item counts from `config.groups` while preserving source order.
2. Render a horizontally scrollable category index linking to stable section anchors.
3. Render existing groups beneath their parent category headings.
4. Show descriptions with a two-line mobile clamp and one-line desktop clamp instead of hover-only disclosure.
5. Add visible keyboard focus rings and accessible labels for external links and favorite controls.

### Task 3: Add local favorites and recent visits

**Files:**
- Modify: `src/components/pages/PortalPage.tsx`

**Steps:**

1. Load favorite link URLs from `prism:polaris:favorites:v1` and recent URLs from `prism:polaris:recent:v1` after hydration.
2. Catch malformed or unavailable storage and fall back to empty state without breaking the page.
3. Add a star toggle to every portal card with `aria-pressed` state.
4. Record card visits, deduplicate by URL, and retain the eight most recent valid links.
5. Render `收藏` and `最近访问` sections only when they contain current links.

### Task 4: Enable the wider portal layout

**Files:**
- Modify: `src/app/[slug]/page.tsx`

**Steps:**

1. Detect card pages whose variant is `portal`.
2. Use `max-w-6xl` for that page only; preserve existing widths for other routes.

### Task 5: Verify behavior and layout

**Files:**
- Verify all modified files.

**Steps:**

1. Run `npm run validate:content`.
2. Run `npm run typecheck`.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Inspect `/research-links` at a desktop viewport and a 390x844 mobile viewport.
6. Verify category anchors, favorite persistence, recent ordering, touch-visible descriptions, keyboard focus, empty storage, and dark/light contrast.
