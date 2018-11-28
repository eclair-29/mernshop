import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Navbar extends Component {
    addItem = () => {
        prompt('Enter an Item');
    }

    render() {
        return (
            <nav className="navbar">
                <span>mernshop</span>
                <Button
                    onClick={ this.addItem }
                    color="link">New Item</Button>
            </nav>
        )
    }
}

export default Navbar;
