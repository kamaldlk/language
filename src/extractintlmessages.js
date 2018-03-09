const extractReactIntlMessages = require('extract-react-intl-messages')
const locales = ['en', 'de', 'fr']
const pattern = './src/*.js'
const buildDir = './src/locales'
const defaultLocale = 'en'

extractReactIntlMessages(locales, pattern, buildDir, { defaultLocale }).then(
  () => {
    console.log('finish')
  }
)

