import React,{Component} from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class CommodityTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

    }

    componentDidMount() {
        axios.get(`https://opendata.pantabangan.com/api/society/csv?file=damarketprices2013.csv&key=commodity&value=${this.props.commodity}`)
            .then(res => {
                const items = res.data;
                this.setState({items});
            });
    }

    render() {
        const options = {
            page: 1,  // which page you want to show as default
            sizePerPageList: [
                {
                    text: '10', value: 10
                }, {
                    text: '25', value: 25
                },{
                    text: '50', value: 50
                },{
                    text: '100', value: 100
                }, {
                    text: 'All', value: this.state.items.length
                }], // you can change the dropdown list for size per page
            sizePerPage: 10,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'bottom'  // default is bottom, top and both is all available
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
        };
        return (
            <BootstrapTable data={this.state.items} striped  search exportCSV exportPDF hover pagination={true}
                            options={options}>
                <TableHeaderColumn isKey hidden={true} dataField='id' dataSort={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField='date' dataSort={true}>Date</TableHeaderColumn>
                <TableHeaderColumn dataField='name' dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField='market' dataSort={true}>Market Name</TableHeaderColumn>
                <TableHeaderColumn dataField='price' dataSort={true}>Product Price</TableHeaderColumn>
            </BootstrapTable>

        );
    }
}

export default CommodityTable;