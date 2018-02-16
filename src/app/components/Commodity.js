import React, {Component} from 'react';
import CommodityTable from './CommodityTable';
import CommodityChart from './CommodityChart';

class Commodity extends Component {



    renderSubComponent = () => {
        console.log(this.props.component);
        if (this.props.component === 'CHART') {
            return <CommodityChart commodity=""/>;
        }if (this.props.component === 'TABLE') {
            return <CommodityTable commodity=""/>;
        }

    };

    render() {
        return (

            <div>
                {this.renderSubComponent()}
            </div>
        );
    }
}

export default Commodity;
