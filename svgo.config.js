module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false
        }
      }
    },
    'removeStyleElement',
    {
      name: 'convertColors',
      params: {
        currentColor: true
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['xmlns:xlink', 'id', 'class', 'data-name', 'transform', 'href', 'clip-path', 'clip-rule']
      }
    }
  ]
};
