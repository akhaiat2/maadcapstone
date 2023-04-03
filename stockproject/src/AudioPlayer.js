import React from "react";

class AudioPlayer extends React.Component {
  render() {
    return (
      <audio autoPlay loop>
        <source src='stockproject/src/assets/background.mp3' type='audio/mpeg' />
      </audio>
    )
  }
}

export default AudioPlayer