import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/deleteItem';
import { fetchItems } from '../actions/fetchItems';

class ListItems extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        const { items } = this.props;

        return (
            <div className="wrapper">
                <ListGroup>
                    { items.length
                        ? items.map(item => {
                            return (
                                <ListGroupItem
                                    key={ item._id }
                                    onClick={ () => this.props.deleteItem(item._id) }>
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
        deleteItem: item => dispatch(deleteItem(item)),
        fetchItems: () => dispatch(fetchItems())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
