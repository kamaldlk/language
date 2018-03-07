import React, { Component, Fragment } from "react";
import { IntlProvider } from "react-intl";
import Message from "./Message";

const messages = {
  fr: {
    welcome:
      "Salut {name}, tu as {unreadCount, plural, =0 {aucun message} one {# message} other {# messages}}"
  },
  en: {
    welcome:
      "Hello {name}, you have {unreadCount, plural, =0 {no message} one {# message} other {# messages}}"
  },
  de:{
    welcome:
      "test {name}, you ssss {unreadCount, plural, =0 {no message} one {# message} other {# messages}}"
  }
};

class App extends Component {
  state = {
    language: "fr"
  };

  render() {
    const { language } = this.state;
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
      </IntlProvider>
    );
  }
}

export default App;
