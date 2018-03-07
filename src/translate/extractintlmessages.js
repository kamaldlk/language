const extractReactIntlMessages = require('extract-react-intl-messages')
const locales = ['en', 'de', 'fr']
const pattern = '../**/!(*.test).js'
const buildDir = './'
const defaultLocale = 'en'

extractReactIntlMessages(locales, pattern, buildDir, { defaultLocale }).then(
  () => {
    console.log('finish')
  }
)
