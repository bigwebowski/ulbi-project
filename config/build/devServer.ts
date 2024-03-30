import { Options } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function devServer(options: Options): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  }
}