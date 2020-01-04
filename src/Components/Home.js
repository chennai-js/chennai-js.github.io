import React from "react";
import { Link } from "react-router-dom";
import Slack from "../assets/img/slack.png";
import Meetup from "../assets/img/meetup.png";

import background from "src/assets/img/background.jpg";

const Home = () => (
  <div className="home">
    <h3>Welcome to</h3>
    <h2>The Javascript Community in Chennai</h2>
    Next meetup: {'  '}
    <a className="externalLink" href="https://www.meetup.com/meetup-group-zZPQtwTs/events/267530481/" target="_blank">
      Jan 4
    </a>

    <p>
      Join the conversation on
      <a
        href="http://h65.in/qr-2.svg"
        target="_blank"
      >
        WhatsApp
      </a>
      💬
    </p>

    <p>
      Check our
      <a
        href="https://github.com/chennai-js/code-of-conduct/blob/master/README.md"
        target="_blank"
      >
        Code of Conduct 📜
      </a>
    </p>

    <p>
      Annoucements on Meetup <img src={Meetup} alt="Meetup" />
      <a target="_blank" href="https://www.meetup.com/meetup-group-zZPQtwTs/">
        Meetup.com
      </a>
    </p>

    <br />
    <br />

    <p>And have fun. 🤘 </p>
    <br />

    <p>Here's a quine for you:</p>
    <pre>`${`(function _(){return'('+_+')()'})()`}</pre>

    <hr />

    <img src={background} alt="Chennai Js" />
  </div>
);

export default Home;
