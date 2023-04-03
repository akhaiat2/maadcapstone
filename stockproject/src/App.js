import React from 'react'
import Stock from './Stock'
import './App.css'
import ReactDOM from 'react-dom';
import AudioPlayer from './AudioPlayer';

class App extends React.Component {
    
    render() {
		return (
            <div>
                <div className="App">
                    <Stock></Stock>
                </div>
                <div>
                    <AudioPlayer />
                </div>
            </div>
		)
	}
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
export default App
