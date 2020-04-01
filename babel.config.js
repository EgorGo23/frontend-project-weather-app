module.exports = {
    presets: [
      ['@babel/env', {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        "corejs": "3.0.0",
      }],
      "@babel/react"
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ]
  };