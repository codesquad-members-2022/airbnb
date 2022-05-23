const CracoAlias = require('craco-alias');
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        jsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  devServer: {
    port: 8080,
  },
};
