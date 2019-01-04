import React, { Component } from "react";

const URL =
  "https://hooks.slack.com/services/T412S9JCV/BAVFN0LGL/8XG76nQ5nIjDkFdtlLI4kXs";

class Slack extends Component {
  state = {
    name: "",
    email: "",
    msg: "",
    error: false
  };

  handleJoin = e => {
    e.preventDefault();
    const { name, email } = this.state;
    const msg = `${name} (${email}) would like to join our Slack. Can you please send an invite?`;

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ text: msg })
    })
      .then(() => {
        this.setState({
          error: false,
          msg: "You Request has been sent you will get invitaion link soon"
        });
      })
      .catch(e => {
        this.setState({
          error: true,
          msg: "Some thing was wrong please try again"
        });
      });
  };

  handleChange = e => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { msg, error, name, email } = this.state;

    return (
      <div className="slack">
        {!error && msg === "" ? (
          <form onSubmit={this.handleJoin}>
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
  }
}

export default Slack;
