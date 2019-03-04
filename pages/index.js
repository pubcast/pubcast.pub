import React from "react";
import Head from "../components/head";

const Home = () => (
  <div>
    <Head title="Pubcast - Federated podcasts on ActivityPub" />

    <main>
      <h1>Pubcast 🎙</h1>

      <p>
        Pubcast is an open-source, experimental replacement for RSS built on{" "}
        <a href="https://www.w3.org/TR/activitypub/">ActivityPub.</a>
      </p>

      <h2>
        What <i>is</i> Pubcast?
      </h2>

      <p>
        Pubcast is two things. <br /> <br /> First, Pubcast is a{" "}
        <b>technology</b>, like email. That means anyone can write a Pubcast app
        or talk to another pubcast app. Second, Pubcast is a <b>web server</b>,
        that anyone can spin up. These servers can talk to each other over
        Pubcast's API. Okay cool
      </p>

      <p>
        Pubcast is <i>both</i> email <b>and</b> gmail. The Pubcast project
        builds the technology that allow people to listen to podcasts in a new
        way, but we also build a way for people to use it. But anyone can build
        their own Pubcast player, server, or website.
      </p>

      <h2>Federated</h2>

      <p>
        Like Mastodon or PeerTube, Pubcast is <i>federated.</i> That means that
        anyone can start a Pubcast site. It also means that someone on Mastodon
        can subscribe to a Pubcast podcast and see it in their feed.
      </p>

      <p>
        Pubcast podcasters get access to the existing{" "}
        <a href="https://fediverse.party/">Fediverse</a>, a network of
        interconnected site with millions of users.
      </p>

      <h2>Interactive</h2>

      <p>
        Unlike RSS, Pubcast is a <i>two way</i> protocol, which means it
        supports interactive elements. It also means we support anonymous
        analytics for podcasters, which helps them support themselves and grow
        their business.
      </p>

      <h2>Independent</h2>

      <p>
        Pubcast gives the features of a centralized platform like Spotify but
        with the independence of RSS. Because anyone can spin up their own
        Pubcast server, podcasters remain in control of their content and
        audience.
      </p>

      <h2>Open Source</h2>

      <p>
        Pubcast is an{" "}
        <a href="https://www.mozilla.org/en-US/MPL/2.0/FAQ/">MPL</a> licensed
        project and <i>you</i> can contribute! Check out our{" "}
        <a href="https://github.com/pubcast/pubcast">Github here.</a>
      </p>

      <hr />

      <footer>
        Made with ❤️ <br /> by{" "}
        <a href="https://twitter.com/danielkuntz0">Daniel Kuntz</a> &{" "}
        <a href="https://twitter.com/flaqueEau">Evan Conrad</a> &{" "}
        <a href="https://cyrusroshan.com/">Cyrus Roshan</a>
      </footer>
    </main>

    <style jsx>{`
      * {
        color: #2f3640;
        font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande",
          sans-serif;
      }

      p {
        line-height: 1.5rem;
      }

      a {
        color: #40739e;
      }

      main {
        margin: 0 auto;
        max-width: 700px;
        padding: 1rem;
      }

      hr {
        border: none;
        background-color: #f5f6fa;
        height: 1px;
        margin: 2rem 0;
      }

      footer {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
