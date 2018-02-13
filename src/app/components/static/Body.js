import React, { Component } from 'react';
import Commodity from '../Commodity';


class Body extends Component {

    render(){
        return <div>
            <div className={'container'}>
                <Commodity/>
            </div>
        </div> ;
    }

}

export default Body;
