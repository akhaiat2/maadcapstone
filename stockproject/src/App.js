import React from 'react'
import Stock from './Stock'
import './App.css'
import ReactDOM from 'react-dom';
import AudioPlayer from './AudioPlayer'

class App extends React.Component {
    render () {
		return (
            <div className="App">
                <Stock></Stock>
                <AudioPlayer />
            </div>
		)
	}
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
export default App
