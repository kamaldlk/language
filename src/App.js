import React, { Component, Fragment } from "react";
import { IntlProvider } from "react-intl";
import Message from "./Message";
import enMessages from './translate/en.json';
import frMessages from './translate/fr.json';
import deMessages from './translate/de.json';
const messages = {
  en: enMessages,
  fr: frMessages,
  de: deMessages
};

const t = defineMessages({
  helloWorld: {
    id: 'hello_world',
    description: 'A greeting to the world',
    defaultMessage: 'Hello {name}'
  },
  name: {
    id: 'hello_name',
    description: 'Name input field placeholder',
    defaultMessage: 'Your name'
  }
});

class App extends Component {
  state = {
    language: "en",
    name:''
  };

  render() {
    const { language } = this.state;
    const { formatMessage } = this.context.intl;
    return (
      <IntlProvider
        locale={language}
        key={language}
        messages={messages[language]}
      >
        <Fragment>
          <p>
            <select
              value={language}
              onChange={e => this.setState({ language: e.target.value })}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="de">German</option>
            </select>
          </p>
          <Message />
          
        </Fragment>
        <div>
          {formatMessage(t.helloWorld, { name: this.state.name })}
          <input
            type="text"
            onChange={e => this.onNameChange(e.target.value)}
            placeholder={formatMessage(t.name)}
          />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
