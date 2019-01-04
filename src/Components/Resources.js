import React from "react";

import resources from "src/resources";

const Resources = () => (
  <div className="resources">
    <h2>Community Aggregated Resources</h2>
    <ul>
      {Object.keys(resources).map(topic => (
        <li key={topic}>
          <h3>{topic}</h3>
          <ul>
            {resources[topic].map(link => (
              <li key={link}>
                <a href={link} target="_blank">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default Resources;
