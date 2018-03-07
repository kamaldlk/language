'use strict'
const extractReactIntlMessages = require('extract-react-intl-messages')

const locales = ['en', 'ja']
const pattern = './**/!(*.test).js'
const buildDir = './translate'
const defaultLocale = 'en'

extractReactIntlMessages(locales, pattern, buildDir, { defaultLocale }).then(
  () => {
    console.log('finish')
  }
)