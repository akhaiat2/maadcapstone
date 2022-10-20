import React from 'react'
import Plot from 'react-plotly.js';
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
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockTicker}&outputsize=full&apikey=${API_KEY}`
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
                    console.log(data)

                    for (let key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key)
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open'])
                    }
                    objectThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    })
                }
            )
    }

    render() {
        return(
            <div>
                <h1>Stock Market</h1>
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
                layout={ {width: 1920, height: 1080, title: `${StockTicker}`} }
                />
                </div>
        )
    }
}
export default Stock