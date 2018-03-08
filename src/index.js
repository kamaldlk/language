import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import App from './App';

import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import de from 'react-intl/locale-data/de';
import {initializePhraseAppEditor} from 'react-intl-phraseapp'

var config = {
  projectId: '1f0441795ce0e2b244d6e53a9e3f594e',
  phraseEnabled: true,
  prefix: '[[__',
  suffix: '__]]',
  fullReparse: true,
  forceLocale: "pt-BR"
}

initializePhraseAppEditor(config);

addLocaleData([...en, ...fr, ...de]);

ReactDOM.render(<App />, document.getElementById('root'));