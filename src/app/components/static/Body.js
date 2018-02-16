import React, {Component} from 'react';
import Commodity from '../Commodity';


class Body extends Component {

    render() {
        return (
                <div>
                    <div className={'container'}>
                        <div className={'col-lg-12'}><h3>Market Prices of Agricultural Commodities</h3></div>

                        {this.renderComponent()}
                    </div>
                </div>
             );
    }
    renderComponent = ()=>{
       return <Commodity component={this.props.component}/>
    };
}

export default Body;
