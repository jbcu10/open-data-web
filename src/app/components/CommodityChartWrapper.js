import React, {Component} from 'react';
import axios from 'axios';
import Select from 'react-select';
import CommodityChart from './CommodityChart';
import 'react-select/dist/react-select.css';

class CommodityChartWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            options: [],
            query:'rice'
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (selectedOption) => {
        const query = selectedOption.value;
        this.setState({selectedOption,query});
         this.refs.child.renderSubComponent(selectedOption.value);
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/society/commodity`)
            .then(res => {
                const options = res.data.map((data) => {
                    return new Object({
                        value: data.toLowerCase(),
                        label: data})
                });
                this.setState({options});

            });
    }

    componentDidMount() {

        const commodity =  ["tilapia", "cabbage", "orange", "patola", "pechay", "upo", "ubi", "bangus", "beans", "onion bulb", "mussel", "eggplant", "calamansi", "tamban", "cooking oil", "cattle", "talaba", "marang", "beans", "shrimps", "saba", "okra", "hog carcass", "tuyo", "salay-salay", "tulingan ", "blackpepper", "beans", "radish ", "tanigue", "garlic", "tomato", "pork", "sapsap", "galunggong", "gabi", "potato", "carrots", "watermelon",   "tomato", "meat",   "saba", "matangbaka", "bell pepper", "galunggong ", "bisugo", "tahong", "ampalaya", "papaya", "squid ", "corn", "onion", "porkchop", "lakatan", "dangit", "gulaman dagat", "cauliflower ", "dilis", "sapsap", "galunggong",  "eggs", "dalagang-bukid", "squash", "hasa-hasa", "chayote", "ginger", "salted fish (bagoong)", "squid", "assorted shells", "cooking oil", "mongo", "chicken", "cooking oil", "latundan", "anduhaw", "dried", "camote", "cassava", "garlic", "washed sugar", "fresh red onion", "beans", "tambakol", "rice",  "mango", "tuna", "pineapple", "pomelo", "crab"]

        /*axios.get(`http://localhost:8080/api/society/commodity`)
            .then(res => {
                console.log(res.data);*/
                console.log(commodity);

                const cleanList = []
                new Set(commodity).forEach((data)=>{
                    cleanList.push(data);
                })
                const options = cleanList.map((data) => {
                    return new Object({
                        value: data.toLowerCase(),
                        label: data})
                });
                this.setState({options});
         //   });
    }

    render() {
        const {selectedOption} = this.state;
        const value = selectedOption && selectedOption.value;
        return (<div>
                <div className={'col-lg-6'}>
                    <Select
                        name="form-field-name "
                        value={value}
                        onChange={this.handleChange}
                        options={this.state.options}
                        clearable={false}
                    />
                </div>
                <div className={'col-lg-12'}>
                    <h3>{this.state.query} graph</h3>
                </div>
        <hr className={'divider'}/>
                <div className={'col-lg-12'}>
                    <CommodityChart commodity={this.state.query} ref="child" />
                </div>
            </div>
        );
    }




}

export default CommodityChartWrapper;
