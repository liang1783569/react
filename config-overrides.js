const { 
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    assets: path.resolve(__dirname, './src/assets'),
    components: path.resolve(__dirname, './src/components'),
    pages:path.resolve(__dirname,'./src/pages'),
    styled:path.resolve(__dirname,'./src/styled'),
    utils:path.resolve(__dirname,'./src/utils')

  }),
  addDecoratorsLegacy()
);

