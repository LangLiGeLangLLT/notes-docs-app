/**
 * https://nextra.site/docs/docs-theme/theme-configuration
 */
const themeConfig = {
  logo: <span>Notes Docs</span>,
  project: {
    link: 'https://github.com/LangLiGeLangLLT/notes-docs-app',
  },
  docsRepositoryBase:
    'https://github.com/LangLiGeLangLLT/notes-docs-app/tree/main',
  feedback: {
    content: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Notes Docs',
    }
  },
}

export default themeConfig
