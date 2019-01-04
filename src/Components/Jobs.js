import React, { Component } from "react";

class Jobs extends Component {
  state = {
    text: "",
    jobs: [],
    msg: ""
  };

  componentDidMount() {
    const { search } = this.props.location;
    this.params = new URLSearchParams(search);
    this.setState({ text: this.params.get("text") || "" });

    fetch(
      "https://spreadsheets.google.com/feeds/list/1cNWOxv5M_NSV_ucf4ywLemWgu6r0Z3h2HHDyiDGrTho/default/public/full?alt=json"
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          msg: "",
          jobs: data.feed.entry.map(job => ({
            id: job.id.$t,
            title: job.gsx$jobtitle.$t,
            company: job.gsx$companyname.$t,
            experience: job.gsx$experienceneeded.$t,
            location: job.gsx$location.$t,
            contact: job.gsx$contactemail.$t,
            link: `mailto:${job.gsx$contactemail.$t}`,
            detail: job.gsx$moredetails.$t,
            date: job.gsx$dateofposting.$t,
            description: job.content.text
          }))
        });
      })
      .catch(e => {
        this.setState({
          msg: "Error Fetching Job listing"
        });
      });
  }

  handleChange = e => {
    const { value } = e.target;
    const { history } = this.props;
    this.setState({ text: value });
    if (this.params) {
      this.params.set("text", value);
      history.replace({ ...history.location, search: this.params.toString() });
    }
  };

  render() {
    const { text, msg, jobs } = this.state;

    return (
      <div className="jobs">
        <h3>Jobs</h3>
        <input
          type="text"
          autoFocus
          value={text}
          onChange={this.handleChange}
          placeholder="Front End, Full-time, Chennai"
        />
        <div className="job-listing">
          {msg !== "" ? <h3>{msg}</h3> : null}
          {jobs
            .filter(
              j =>
                j.title.toLowerCase().includes(text.toLowerCase()) ||
                j.location.toLowerCase().includes(text.toLowerCase()) ||
                j.detail.toLowerCase().includes(text.toLowerCase()) ||
                j.company.toLowerCase().includes(text.toLowerCase())
            )
            .map(j => (
              <div class="job-card" key={j.id}>
                <h3>
                  <a href={j.link} target="_blank">
                    {j.company}
                  </a>
                </h3>
                <div>
                  <div>
                    <strong>{j.title}</strong>
                    <span>{j.experience}</span>
                  </div>
                  <div>{j.detail}</div>
                  <div>{j.description}</div>
                  <div>
                    <strong>Location</strong>
                    <span>{j.location}</span>
                  </div>
                  <div>
                    <strong>Contact</strong>
                    <a href={`mailto:${j.contact}`}>{j.contact}</a>
                  </div>
                  <div>
                    <strong>Posted At</strong>
                    <span>{j.date}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
