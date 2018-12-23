import React from "react";
import { Link } from "react-router-dom";

import background from "src/assets/img/background.jpg";

const Home = () => (
  <div className="home">
    <h3>Welcome to</h3>
    <h2>The Javascript Community in Chennai</h2>
    <a className="externalLink" href="" target="_blank">
      Next meetup: TBD
    </a>

    <p>
      Join the conversation on
      <Link to="/slack">Slack</Link>
    </p>

    <p>
      Check our
      <a
        href="https://github.com/chennai-js/code-of-conduct/blob/master/README.md"
        target="_blank"
      >
        Code of Conduct
      </a>
    </p>

    <p>
      Annoucements on Meetup{" "}
      <a target="_blank" href="https://www.meetup.com/meetup-group-zZPQtwTs/">
        Meetup.com
      </a>
    </p>

    <img src={background} alt="Chennai Js" />
  </div>
);

export default Home;
