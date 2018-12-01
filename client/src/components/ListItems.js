import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/deleteItem';

class ListItems extends Component {
    render() {
        const { items } = this.props;

        return (
            <div className="wrapper">
                <ListGroup>
                    { items.length
                        ? items.map(item => {
                            return (
                                <ListGroupItem
                                    key={ item.id }
                                    onClick={ () => this.props.deleteItem(item.id) }>
                                    { item.name }
                                </ListGroupItem>
                            )
                        })
                        : <ListGroupItem>No items found</ListGroupItem>
                    }
                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: item => dispatch(deleteItem(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
