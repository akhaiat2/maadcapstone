import React from 'react'
import Stock from './Stock'
import './App.css'
import ReactDOM from 'react-dom'
import audioFile from './background.mp3'

class App extends React.Component {
  componentDidMount () {
    this.audioPlayer.play()
  }
  render () {
		return (
            <div className="App">
                <Stock></Stock>
                <audio
                    ref={(element) => { this.audioPlayer = element; }}
                    autoPlay
                >
                <source src={audioFile} type="audio/mpeg" />
                </audio>
            </div>
		)
	}
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
export default App
