import { babel } from '@rollup/plugin-babel'

const config = {
  input: {
    '16/outline/index': 'src/16/outline/index.js',
    '16/solid/index': 'src/16/solid/index.js',
    '24/outline/index': 'src/24/outline/index.js',
    '24/solid/index': 'src/24/solid/index.js',
  },
  output: {
    dir: 'dist/index.esm.js',
    entryFileNames: '[name].js',
    format: 'esm',
  },
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
}

export default config
