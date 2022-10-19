import React from 'react'

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
        const API_KEY = 'Z74L00X1VCAQJGM2'
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=${API_KEY}`

        fetch(API_CALL)
            .then(
                function(response) {
                    return response.json()
                }
            )
            .then(
                function(data) {
                    console.log(data)
                }
            )
    }

    render() {
        return(
            <div>
                <h1>Stock Market</h1>
            </div>
        )
    }
}
export default Stock