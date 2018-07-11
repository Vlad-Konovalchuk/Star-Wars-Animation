import React, { Component } from "react";
import { Power2, TimelineLite } from "gsap";

import logo from "./logo.svg";
import volumeOff from "./volume_off.svg";
import volumeOn from "./volume_on.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.intro = React.createRef();
    this.logo = React.createRef();
    this.content = React.createRef();
    this.audio = React.createRef();

    this.state = {
      muted: true
    };
  }

  onVolumeClick = () => {
    if (this.state.muted) {
      this.audio.current.muted = false;
    } else {
      this.audio.current.muted = true;
    }

    this.setState({ muted: !this.state.muted });
  };

  componentDidMount() {
    const tl = new TimelineLite();

    tl
      .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
      .to(this.intro.current, 1.5, {
        opacity: 0,
        onComplete: () => {
          this.audio.current.play();
        }
      })
      .set(this.logo.current, {
        opacity: 1,
        scale: 2.75,
        delay: 0.5
      })
      .to(this.logo.current, 8, { scale: 0.05, ease: Power2.easeOut })
      .to(this.logo.current, 1.5, { opacity: 0 }, "-=1.5")
      .to(this.content.current, 200, { top: "-170%" });
  }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <p>
            A long time ago, in a galaxy far,<br /> far away....
          </p>
        </section>
        <section className="logo" ref={this.logo}>
          <img src={logo} alt="Code Wars logo" />
        </section>
        <section className="crawl">
          <div className="content" ref={this.content}>
            <h1 className="title">Episode 7</h1>
            <h2 className="subtitle">THE APP AWAKENS</h2>
            <p>
            The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy.
            Only General Leia Organa's band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight.
    But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....
            </p>
            <p>
            Luke Skywalker has vanished.
              In his absence, the sinister
              FIRST ORDER has risen from
              the ashes of the Empire
              and will not rest until
              Skywalker, the last Jedi,
              has been destroyed.

              With the support of the
              REPUBLIC, General Leia Organa
              leads a brave RESISTANCE.
              She is desperate to find her
              brother Luke and gain his
              help in restoring peace
              and justice to the galaxy.

              Leia has sent her most daring
              pilot on a secret mission
              to Jakku, where an old ally
              has discovered a clue to
              Luke's whereabouts....
            </p>
            <p>
              The Developer has sent his most daring editor theme on a secret
              mission to the production branch, where an old ally has discovered
              a clue to the Lead’s whereabouts....
            </p>
          </div>
        </section>
        <audio ref={this.audio} muted>
          <source
            type="audio/mpeg"
            src="https://ia801307.us.archive.org/28/items/JohnWilliamsStarWarsMainThemeFULL/John%20Williams%20-%20Star%20Wars%20Main%20Theme%20(FULL).mp3"
          />
        </audio>
        <button className="volume" type="button" onClick={this.onVolumeClick}>
          {/* https://thenounproject.com/agarunov/ */}
          {this.state.muted ? (
            <img src={volumeOff} alt="Volume is off" />
          ) : (
            <img src={volumeOn} alt="Volume is on" />
          )}
        </button>
      </div>
    );
  }
}

export default App;