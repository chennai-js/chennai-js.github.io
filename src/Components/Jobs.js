import { connect } from "react-redux";
import React, { useEffect, useCallback } from "react";

import { getFilteredJobs } from "src/reducers/jobs";
import { getJobs, filterJobs } from "src/actions";

const Jobs = ({
  list,
  error,
  filter,
  location,
  history,
  _getJobs,
  _filterJobs
}) => {
  useEffect(() => {
    _getJobs();
  }, [_getJobs, _filterJobs]);

  useEffect(() => {
    const { search } = location;
    const params = new URLSearchParams(search);
    _filterJobs({ search: params.get("text") });
  }, [location, _filterJobs]);

  const handleSearch = useCallback(
    e => {
      const { value } = e.target;
      _filterJobs({ search: value });
      history.push({
        pathname: "/jobs",
        search: "?" + new URLSearchParams({ text: value }).toString()
      });
    },
    [history, _filterJobs]
  );

  const { search } = filter;

  return (
    <div className="jobs">
      <h3>Jobs</h3>
      <input
        type="text"
        autoFocus
        value={search}
        onChange={handleSearch}
        placeholder="Front End, Full-time, Chennai"
      />
      <div className="job-listing">
        {error !== "" ? <h3>{error}</h3> : null}
      </div>
      <div className="job-listing">
        {error !== "" ? <h3>{error}</h3> : null}
        {list.map(j => (
          <div className="job-card" key={j.id}>
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
};

const mapStateToProps = ({ jobs }) => ({
  error: jobs.error,
  filter: jobs.filter,
  list: getFilteredJobs(jobs)
});

export default connect(
  mapStateToProps,
  {
    _getJobs: getJobs,
    _filterJobs: filterJobs
  }
)(Jobs);
