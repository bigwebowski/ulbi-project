type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
  const enabledMods = Object.keys(mods).filter(className => !!mods[className])

  return [cls, ...additional, ...enabledMods].join(' ')
}