import webpack from 'webpack'
import path from 'path'

import { webpackConfig } from './config/build/webpackConfig'
import { Env, Paths } from './config/build/types/config'


export default (env: Env): webpack.Configuration => {
  const paths: Paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const PORT = env.port || 3000
  const mode = env.mode || 'development'
  const isDev = mode === 'development'

  return webpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })
}