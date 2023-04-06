import React from 'react'
import Stock from './Stock'
import './App.css'
import ReactDOM from 'react-dom'
import audioFile from './background.mp3'

class App extends React.Component {
  render () {
	 return (
        <div className="App">
            <Stock></Stock>
        </div>
		)
	}
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
export default App
