import React from "react";
//import { Player } from "video-react";
//import "node_modules/video-react/dist/video-react.css";
//import "~video-react/dist/video-react.css";

// export default props => {
//   return (
//     <Player>
//       <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
//     </Player>
//   );
// };
import YouTube from "react-youtube";

class Player extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Player;
//sikans: BLEPakj1YTY&t=22s
