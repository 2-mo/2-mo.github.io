'use client';

import { Link, Text } from '@fluentui/react-components';

interface FooterProps {
  lastUpdated?: string;
}

export default function Footer({ lastUpdated }: FooterProps) {
  return (
    <footer className="border-t border-neutral-200/50 bg-neutral-50/50 dark:bg-neutral-900/50 dark:border-neutral-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1">
          <Text size={100} className="text-neutral-500">
            Last updated: {lastUpdated || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Text>
          <Text size={100} className="text-neutral-500 flex items-center">
            <Link href="https://github.com/xyjoey/PRISM" target="_blank" rel="noopener noreferrer" appearance="subtle">
              Built with PRISM
            </Link>
            <span className="ml-1">🚀</span>
          </Text>
        </div>
      </div>
    </footer>
  );
}