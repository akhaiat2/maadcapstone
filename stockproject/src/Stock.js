import React, { useState } from 'react'
import Sketch from 'react-p5';
import './index.css';
import sound from "./assets/newyork.mp3"
import companyLogo from './assets/meta.jpg';

class Stock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],
            value: `IBM`,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    play = () => {
        new Audio(sound).play()
    }
    
    handleClick = (event) => event.target.classList.remove('black-box');

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    handleSubmit = (event) => {
        alert('A stock ticker was submitted: $' + this.state.value);
        this.fetchStock()
        event.preventDefault();
    }
    componentDidMount() {
        this.fetchStock()
    }

    fetchStock() {
        const objectThis = this
        const API_KEY = 'Z74L00X1VCAQJGM2'
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.value}&apikey=${API_KEY}`
        let stockChartXValuesFunction = []
        let stockChartYValuesFunction = []
        fetch(API_CALL)
            .then(
                function(response) {
                    return response.json()
                }
            )
            .then(
                function(data) {
                    for (let key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key)
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['4. close'])
                    }
                    objectThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    })
                    console.log(data)
                }
            )
    }

	setup = (p5, parentRef) => {
		p5.createCanvas(1200, 380).parent(parentRef);
        p5.frameRate(7)
	};

	draw = (p5) => {
        p5.background(30);
        //this.state.stockChartYValues = [120, 130, 140, 150, 140]
        for (let i = 0; i < this.state.stockChartYValues.length; i++) {
            if(i>1) {
                p5.stroke(0)
                if (this.state.stockChartYValues[i] > this.state.stockChartYValues[i-1]) {
                    p5.fill(0, 255, 0)
                    p5.strokeWeight(1)
                    p5.ellipse(i+(Math.random()*1000), this.state.stockChartYValues[i]*Math.random()*5, 20, 20);
                }
                else if (this.state.stockChartYValues[i] < this.state.stockChartYValues[i-1]) {
                    p5.fill(255, 0, 0)
                    p5.strokeWeight(1)
                    p5.ellipse(i+(Math.random()*1000), this.state.stockChartYValues[i], 20, 20);
                }
                else {
                    p5.fill(0, 0, 255)
                    p5.strokeWeight(1)
                    p5.ellipse(i+(Math.random()*1000), this.state.stockChartYValues[i]*Math.random()*5, 20, 20);
                }
                p5.stroke(Math.random()*255, Math.random()*255, Math.random()*255)
                p5.strokeWeight(5)
                if (Math.round(Math.random()*15) === 1) {
                    p5.line(i+(Math.random()*1000), this.state.stockChartYValues[i]* Math.random()*5, (i-1)+(Math.random()*1000), this.state.stockChartYValues[i-1]*Math.random()*5)
                }
                else if (Math.round(Math.random()*15) === 2) {
                    p5.triangle(i+(Math.random()*1000), this.state.stockChartYValues[i]* Math.random()*5, (i-1)+(Math.random()*1000), this.state.stockChartYValues[i-1]*Math.random()*5, (i-2)+(Math.random()*1000), this.state.stockChartYValues[i-2]*Math.random()*5)
                }
            }
            else {
                p5.strokeWeight(1)
                p5.fill(255, 0, 0)
                p5.ellipse(i+(Math.random()*1000), this.state.stockChartYValues[i]*Math.random()*5, 20, 20);
            }      
        }
	};
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Ticker:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input onClick={this.play} type="submit" value="Order" />
                </form>
                <Sketch setup={this.setup} draw={this.draw} />
                <div class="black-box">
                    <img src={companyLogo} alt="bank logo" class="center"/>
                    <h1 id="banktext">Welcome to Meta Bank</h1>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div className="button-container">
                        <input onClick={this.handleClick} type="submit" />
                    </div>
                </div>

            </div>
        )
    }
}
export default Stock