import React, { Component } from "react";
import Navbar from './components/Navbar';
import ListItems from './components/ListItems';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Main Navigation */}
                <Navbar />

                {/* List Items */}
                <ListItems />
            </div>
        );
    }
}

export default App;
