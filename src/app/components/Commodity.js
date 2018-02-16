import React, {Component} from 'react';
import CommodityTable from './CommodityTable';
import CommodityChartWrapper from './CommodityChartWrapper';

class Commodity extends Component {



    renderSubComponent = () => {
        if (this.props.component === 'CHART') {
            return <CommodityChartWrapper />;
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
