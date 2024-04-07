// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

module.exports = new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `Importing from \`metal-icons\` directly is not supported. Please import from either \`metal-icons/16/solid\`, \`metal-icons/16/solid\`, \`metal-icons/react/16/outline\`, or \`metal-icons/react/24/outline\` instead.`
      )
    },
  }
)
