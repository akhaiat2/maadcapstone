import React from 'react'
import Sketch from 'react-p5';

let StockTicker = 'IBM'
class Stock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],
            ticker: ''
        }
    }

    componentDidMount() {
        //this.fetchStock()
    }

    fetchStock() {
        const objectThis = this
        const API_KEY = 'Z74L00X1VCAQJGM2'
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockTicker}&apikey=${API_KEY}`
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
                    //console.log(data)
                }
            )
    }

	setup = (p5, parentRef) => {
		p5.createCanvas(1200, 380).parent(parentRef);
        p5.frameRate(7)
	};

	draw = (p5) => {
        p5.background(30);
        this.state.stockChartYValues = [120, 130, 140, 150, 140]
        let stockChartYValuesOne = [240,340,180,50,280]
        let stockChartYValuesTwo = [10,50,30,100,3]
        for (let i = 0; i < this.state.stockChartYValues.length; i++) {
            if(i>0) {
                p5.stroke(0)
                if (this.state.stockChartYValues[i] > this.state.stockChartYValues[i-1]) {
                    p5.fill(255, 0, 0)
                    p5.strokeWeight(1)
                    p5.ellipse(i+(Math.random()*1000), this.state.stockChartYValues[i]*Math.random()*3, 20, 20);
                }
                else if (this.state.stockChartYValues[i] < this.state.stockChartYValues[i-1]) {
                    p5.fill(0, 255, 0)
                    p5.strokeWeight(1)
                    p5.ellipse(i+(Math.random()*1000), this.state.stockChartYValues[i], 20, 20);
                }
                else {
                    p5.fill(0, 0, 255)
                    p5.strokeWeight(1)
                    p5.ellipse(i+(Math.random()*1000), this.state.stockChartYValues[i]*Math.random()*3, 20, 20);
                }
                p5.stroke(Math.random()*255, Math.random()*255, Math.random()*255)
                p5.strokeWeight(5)
                p5.line(i+(Math.random()*700), this.state.stockChartYValues[i], (i-1)+(Math.random()*700), this.state.stockChartYValues[i-1])
            }
            else {
                p5.strokeWeight(1)
                p5.fill(255, 0, 0)
                p5.ellipse(i+(Math.random()*1000), this.state.stockChartYValues[i]* Math.random()*3, 20, 20);
            }      
        }
        //for (let i = 0; i < stockChartYValuesOne.length; i++) {
        //    if(i>0) {
        //        p5.stroke(0)
        //        if (stockChartYValuesOne[i] > stockChartYValuesOne[i-1]) {
        //            p5.fill(255, 0, 0)
        //            p5.strokeWeight(1)
        //            p5.ellipse(i+(Math.random()*1000), stockChartYValuesOne[i], 20, 20);
        //        }
        //        else if (stockChartYValuesOne[i] < stockChartYValuesOne[i-1]) {
        //            p5.fill(0, 255, 0)
        //            p5.strokeWeight(1)
        //            p5.ellipse(i+(Math.random()*1000), stockChartYValuesOne[i], 20, 20);
        //        }
        //        else {
        //            p5.fill(0, 0, 255)
        //            p5.strokeWeight(1)
        //            p5.ellipse(i+(Math.random()*1000), stockChartYValuesOne[i], 20, 20);
        //        }
        //        p5.stroke(Math.random()*255, Math.random()*255, Math.random()*255)
        //        p5.strokeWeight(5)
        //        p5.line(i+(Math.random()*700), stockChartYValuesOne[i], (i-1)+(Math.random()*700), stockChartYValuesOne[i-1])
        //    }
        //    else {
        //        p5.fill(255, 0, 0)
        //        p5.ellipse(i+(Math.random()*1000), stockChartYValuesOne[i], 20, 10); 
        //    }        
        //}
        //for (let i = 0; i < stockChartYValuesTwo.length; i++) {
        //    if(i>0) {
        //        p5.stroke(0)
        //        if (stockChartYValuesTwo[i] > stockChartYValuesTwo[i-1]) {
        //            p5.fill(255, 0, 0)
        //            p5.strokeWeight(1)
        //            p5.ellipse(i+(Math.random()*1000), stockChartYValuesTwo[i], 20, 20);
        //        }
        //        else if (stockChartYValuesTwo[i] < stockChartYValuesTwo[i-1]) {
        //            p5.fill(0, 255, 0)
        //            p5.strokeWeight(1)
        //            p5.ellipse(i+(Math.random()*1000), stockChartYValuesTwo[i], 20, 20);
        //        }
        //        else {
        //            p5.fill(0, 0, 255)
        //            p5.strokeWeight(1)
        //            p5.ellipse(i+(Math.random()*1000), stockChartYValuesTwo[i], 20, 20);
        //        }
        //    }
        //    else {
        //        p5.fill(255, 0, 0)
        //        p5.ellipse(i+(Math.random()*1000), stockChartYValuesTwo[i], 10, 20); 
        //    }       
        //}
	};
    
    render() {
        return(
            <div>
                <Sketch setup={this.setup} draw={this.draw} />
            </div>
        )
    }
}
export default Stock
