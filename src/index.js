import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import App from './App';

import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import de from 'react-intl/locale-data/de';

addLocaleData([...en, ...fr, ...de]);

ReactDOM.render(<App />, document.getElementById('root'));