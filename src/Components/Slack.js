import { connect } from "react-redux";
import React, { useEffect, useState, useCallback } from "react";

import { joinSlack } from "src/actions";

const Slack = ({ error, msg, _joinSlack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = useCallback(
    e => {
      const { value } = e.target;
      setName(value);
    },
    [setName]
  );

  const handleEmail = useCallback(
    e => {
      const { value } = e.target;
      setEmail(value);
    },
    [setEmail]
  );

  const handleJoin = useCallback(
    e => {
      e.preventDefault();
      _joinSlack({ name, email });
    },
    [email, name]
  );

  return (
    <div className="slack">
      {!error && msg === "" ? (
        <form onSubmit={handleJoin}>
          <h3>
            Join us on
            <a target="_blank" href="https://chennai-js.slack.com/">
              Slack
            </a>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                id="name"
                placeholder="User Name"
                value={name}
                onChange={handleName}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                required
              />
            </div>
            {error ? <div className="error">{msg}</div> : null}
            <input type="submit" value="Join" />
          </h3>
        </form>
      ) : (
        <h3>{msg}</h3>
      )}
    </div>
  );
};

const mapStateToProps = ({ slack }) => ({
  msg: slack.msg,
  error: slack.error
});

export default connect(
  mapStateToProps,
  {
    _joinSlack: joinSlack
  }
)(Slack);
