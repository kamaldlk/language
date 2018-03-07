let extractTranslations = require('./translate/translations.get')
extractTranslations.extract('./src/*.js', './src/es.json', ['es'])
extractTranslations.extract('./src/*.js', './src/de.json', ['de'])
extractTranslations.extract('./src/*.js', './src/fr.json', ['fr'])