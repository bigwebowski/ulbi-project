export type Mode = 'production' | 'development'

export interface Paths {
  entry: string
  build: string
  html: string
  src: string
}

export interface Env {
  mode: Mode
  port: number
}

export interface Options {
  mode: Mode
  paths: Paths
  isDev: boolean
  port: number
}