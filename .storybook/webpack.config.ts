const fs = require('fs');
const path = require('path');

module.exports = (baseConfig: any, env: any, defaultConfig: any) => {

    // alpha.25 introduced a new webpack plugin that solves path issues https://www.npmjs.com/package/tsconfig-paths-webpack-plugin
    // unfortunately it does not work with stories that point to packages in dist
    // We have to remove the plugin and use our previous fix as long as this is not solved properly

    // defaultConfig.resolve.plugins = [];
    //
    // const tsFile = path.resolve(__dirname, '../tsconfig.json'); // it's important that this is absolute for the resolve.alias values!
    // const tsConfig = JSON.parse(fs.readFileSync(tsFile, { encoding: 'utf8' }));
    // const root = path.join(path.dirname(tsFile), tsConfig.compilerOptions.baseUrl);
    // if (!defaultConfig.resolve.alias) {
    //     defaultConfig.resolve.alias = {};
    // }
    //
    // for (const alias in tsConfig.compilerOptions.paths) {
    //     if (alias.includes('*')) {
    //         // we have mappings for /* in the tsconfig, but we don't need these in webpack
    //         continue;
    //     }
    //     const targetPath = tsConfig.compilerOptions.paths[alias][0];
    //     defaultConfig.resolve.alias[alias] = path.join(root, targetPath);
    // }

    return defaultConfig;
};
