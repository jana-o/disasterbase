import React from "react";
import YouTube from "react-youtube";

class Player extends React.Component {
  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "190",
      width: "340",
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <div className="player col-sm-6">
        <h5>HOW TO....</h5>
        <hr />
        <YouTube videoId="BLEPakj1YTY" opts={opts} onReady={this._onReady} />
        <p className="playerlist">
          ...protect yourself from an earthquake: <br />If you are indoors: stay
          there! Look for cover, stay clear of exterior walls, glass.<br />
          If you're outside: get into the open.<br />
          Beware of potential tsunamis or landslides.
        </p>
      </div>
    );
  }
}
export default Player;
