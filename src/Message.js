import React, { Component, Fragment } from "react";
import { FormattedMessage, FormattedDate } from "react-intl";

class Message extends Component {
  state = {
    name: "Eric",
    unreadCount: 0,
    now: new Date()
  };

  render() {
    const { name, unreadCount, now } = this.state;

    return (
      <Fragment>
        <div>
          <input
            onChange={e => this.setState({ unreadCount: e.target.value })}
            value={unreadCount}
            type="number"
            placeholder="Number of messages"
          />
        </div>
        <p>
          <FormattedMessage
            id="welcome"
            defaultMessage={`Hello {name}, you have {unreadCount, plural,
                      =0 {no message}
                      one {# message}
                      other {# messages} 
                    }`}
            values={{ name: <b>{name}</b>, unreadCount }}
          />
        </p>
        <p>
          <FormattedDate
            value={now}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </p>
      </Fragment>
    );
  }
}

export default Message;
