import NextI18Next from 'next-i18next'
import path from 'path'

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'zh',
  defaultNS: 'common',
  localePath: path.resolve('./public/static/locales'),
  otherLanguages: ['en', 'zh'],
  localeSubpaths: {
    en: 'en',
    zh: 'zh',
  },
})

export const {
  i18n,
  Link,
  appWithTranslation,
  withTranslation,
  useTranslation,
} = NextI18NextInstance

export default NextI18NextInstance