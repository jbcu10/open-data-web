import React, {Component} from 'react';
import moment from 'moment';
import axios from 'axios';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class CommodityChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            query:'',
            data:{x: 'x',
                xFormat: '%m-%d-%y',
                type: 'bar',
                columns:[]},
            colors: {
                data1: '#ff0000',
                data2: '#00ff00',
                data3: '#0000ff'
            },
            axis:{
                x: {
                    type: 'timeseries',
                 }}
        };
    this.renderSubComponent = this.renderSubComponent.bind(this);
    }

    renderSubComponent = (q) => {

            axios.get(`http://localhost:8080/api/society/csv?file=damarketprices2013.csv&key=commodity&value=${q}`)
            .then(res => {
                const items = res.data;


                let header = ['Month'];
                let date = ['x'];
                let commodities = [];
                let columns = [];
                let dateArray = [];
                let array = [];
                let commodityArray = [];
                try {


                     items.forEach((item) => {
                        array.push(item.market)
                        dateArray.push(item.date)
                        commodityArray.push(item.name.toLowerCase());
                    });
                    new Set(array).forEach(a => {
                        header.push(a);
                    });

                    let dateString = [];
                    new Set(dateArray).forEach(data => {
                        dateString.push(data);
                        date.push(moment(data).toDate());
                    });
                    new Set(commodityArray).forEach(commodity => {
                        commodities.push(commodity);
                    });

                    let newArray = [];
                    commodities.forEach((value) => {
                        let comArray = [];
                        comArray.push(value);
                        for (let a = 1; a < dateString.length; a++) {
                            let price = 0;
                             items.forEach((item) => {
                                if (item.name.toLowerCase() === value && dateString[a] === item.date) {

                                    price = price > item.price ? price : item.price;
                                }


                            });
                            comArray.push(price);

                        }
                        newArray.push(comArray)

                    });


                    columns.push(date);
                    newArray.forEach((item) => {
                        columns.push(item);
                    })

                }
                catch (e) {
                    console.log(e);
                }
               const  data = {
                    columns: columns,

                };

                this.setState({data});

            });


    };

    componentDidMount() {
        this.renderSubComponent(this.props.commodity);
    }
    render() {

        return (
                 <C3Chart data={this.state.data} axis={this.state.axis} unloadBeforeLoad={true}/>
         );
    }
}

export default CommodityChart;