import { Options } from './types/config'
import webpack from 'webpack'

import { plugins } from './plugins'
import { resolvers } from './resolvers'
import { loaders } from './loaders'
import { devServer } from './devServer'

export function webpackConfig(options: Options): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: plugins(options),
    resolve: resolvers(options),
    module: {
      rules: loaders(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? devServer(options) : undefined,
  }
}