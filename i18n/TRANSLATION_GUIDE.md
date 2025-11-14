# SideStore Translation Guide

## Introduction

Thank you for your interest in helping translate SideStore's documentation! This guide will walk you through the process of contributing translations to make SideStore accessible to more users around the world.

## Project Structure

The translations are organized in the `i18n` directory with separate folders for each language:

- `de/` - German
- `es/` - Spanish
- `fr/` - French
- `it/` - Italian
- `ja/` - Japanese
- `ko/` - Korean
- `nl/` - Dutch
- `ru/` - Russian
- `sv/` - Swedish
- `zh/` - Chinese

Each language folder follows the same structure:
```
i18n/[language-code]/
├── docusaurus-plugin-content-docs/
│   └── current/
│       ├── intro.mdx
│       ├── faq.mdx
│       ├── release-notes.mdx
│       ├── advanced/
│       ├── installation/
│       └── troubleshooting/
├── docusaurus-plugin-content-blog/
└── docusaurus-theme-classic/
```

## Getting Started

### Prerequisites

- Basic knowledge of Markdown
- Familiarity with the language you want to translate to
- Git knowledge (for submitting changes)

### How to Contribute Translations

1. **Understand the translation system**
   - SideStore docs use Docusaurus for localization
   - Each language has its own folder with translated content
   - Content files follow the same structure as the original English docs

2. **Choose what to translate**
   - Start with untranslated or partially translated pages
   - Focus on most important pages first (intro, installation, FAQ)
   - Check existing translations for consistency

3. **Translation workflow**
   - The English files are already present in each language folder and ready for translation
   - Simply locate the file you want to translate in your target language folder (e.g., `/i18n/[language-code]/docusaurus-plugin-content-docs/current/`)
   - Translate the English content into your target language while preserving all markup, links, and formatting
   - You can also improve and complete partially translated pages

4. **Test your changes**
   - Run the site locally with your language to check how translations look
   - Make sure formatting and links work correctly
   - You can test your translations locally by running:
     ```bash
     yarn start -- --locale [language-code]
     ```
   - For example, to test Spanish translations:
     ```bash
     yarn start -- --locale es
     ```

## Translation Guidelines

### Do's

- Maintain consistent terminology throughout the documentation
- Preserve all links and formatting from the original document
- Use natural language appropriate for technical documentation
- Keep the same file structure and naming

### Don'ts

- Don't translate code snippets
- Don't change image paths or URLs (Exception: if an appropriate locale exists for a linked page, you may link to the locale instead, e.g `https://apple.com` becomes `https://apple.com/es` in the Spanish docs)
- Don't modify the sidebar position or document metadata
- Don't add or remove content beyond what's in the original documents

## Submitting Your Translations

Once you've completed translating a document:

1. Create a new branch for your changes
2. Commit your changes with a descriptive message
3. Submit a pull request to the main repository
4. Wait for review and approval

## Need Help?

If you have any questions about the translation process or need clarification on technical terms, ping us in our [discord server](https://discord.gg/sidestore-949183273383395328) and we'll help you out as soon as possible.
