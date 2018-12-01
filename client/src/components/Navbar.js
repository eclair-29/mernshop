import React, { Component } from 'react';
import {
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    Modal,
    ModalBody
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/addItem';

class Navbar extends Component {
    state = {
        name: "",
        modal: false
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    handlechange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state);
    }

    render() {
        return (
            <nav className="navbar">
                <span>mernshop</span>
                <Button
                    onClick={ this.toggleModal }
                    color="link">New Item</Button>

                {/* Add Item Model */}
                <Modal
                    isOpen={ this.state.modal }
                    toggle={ this.toggleModal }>
                    <ModalBody>
                        <form onSubmit={ this.handleSubmit }>
                            <InputGroup>
                                <Input
                                    name="name"
                                    placeholder="add an item"
                                    value={ this.state.name }
                                    type="text"
                                    onChange={ this.handlechange } />
                                <InputGroupAddon addonType="append">
                                    <Button
                                        type="submit"
                                        outline
                                        color="secondary"
                                        onClick={ this.toggleModal }>+</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </form>
                    </ModalBody>
                </Modal>
            </nav>

        )
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchtoProps)(Navbar);
