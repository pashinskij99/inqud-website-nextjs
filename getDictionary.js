const dictionaries = {
  en: () => import('./src/dictionaries/en.json').then((res) => res.default),
  de: () => import('./src/dictionaries/de.json').then((res) => res.default),
}

export const getDictionary = (lang) => dictionaries[lang]()
