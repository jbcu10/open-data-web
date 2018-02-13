import React, {Component} from 'react';
import '../style/App.css';
import Header from './components/static/Header';
import Body from './components/static/Body';
//import Footer from "./components/static/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>

            </div>
        );
    }
}

export default App;
