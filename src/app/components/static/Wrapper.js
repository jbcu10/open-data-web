import React, {Component} from 'react';
 import Header from './Header';
import Body from './Body';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component:'TABLE'
        };
        this.handleClick = this.handleClick.bind(this);


    }
    handleClick(event) {
         this.setState({component: event.target.text.toUpperCase()});
    }
    render() {
        return (
            <div>
                <Header  clicked={this.handleClick}/>
                <Body component={this.state.component}/>

            </div>
        );
    }

}

export default Wrapper;
