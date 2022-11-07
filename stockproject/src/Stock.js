import React from 'react'
import Plot from 'react-plotly.js';
import Sketch from 'react-p5';

let StockTicker = 'IBM'
class Stock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock()
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
                    console.log(data)
                }
            )
    }
    y = 0;
	direction = '^';

	setup = (p5, parentRef) => {
		p5.createCanvas(900, 500).parent(parentRef);
	};
    
	draw = (p5) => {
        p5.background(0);
        //console.log(this.state.stockChartYValues)
        for (let i = 0; i < this.state.stockChartYValues.length; i ++) {
            p5.fill(255, 255, 0);
            p5.ellipse(i, this.state.stockChartYValues[i], 50, 50);
        }
		//p5.ellipse(p5.width / 2, this.y, 50);
		//if (this.y > p5.height) this.direction = '';
		//if (this.y < 0) {
		//	this.direction = '^';
		//}
		//if (this.direction === '^') this.y += 8;
		//else this.y -= 4;
	};

    render() {
        return(
            <div>
                <h1>MAAD Capstone Project</h1>
                <Plot
                data={[
                  {
                    x: this.state.stockChartXValues,
                    y: this.state.stockChartYValues,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'blue'},
                  }
                ]}
                layout={ {width: 300, height: 300, title: `${StockTicker}`} }
                />
                <Sketch setup={this.setup} draw={this.draw} />
                </div>
        )
    }
}
export default Stock
