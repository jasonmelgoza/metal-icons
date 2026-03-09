/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Types defined in COMMIT_CONVENTIONS.md
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'build', 'test', 'ci'],
    ],
    // Scopes defined in COMMIT_CONVENTIONS.md (empty string allows omitting scope)
    'scope-enum': [2, 'always', ['icons', 'website', 'build', 'deps', '']],
    // Enforce lowercase type
    'type-case': [2, 'always', 'lower-case'],
    // No period at end of subject
    'subject-full-stop': [2, 'never', '.'],
    // 72 char subject limit
    'header-max-length': [2, 'always', 72],
  },
};
