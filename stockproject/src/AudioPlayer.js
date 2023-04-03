import React from "react";

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio autoPlay loop>
            <source src='stockproject/src/assets/background.mp3' type='audio/mpeg' />
        </audio>
        {console.log('audio playing')}
      </div>
    )
  }
}

export default AudioPlayer