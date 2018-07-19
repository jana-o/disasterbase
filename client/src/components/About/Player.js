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
      <div>
        <h5>How to protect yourself during an earthquake</h5>
        <hr />
        <YouTube videoId="BLEPakj1YTY" opts={opts} onReady={this._onReady} />
      </div>
    );
  }
}
export default Player;
