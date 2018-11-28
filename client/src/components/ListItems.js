import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ListItems = () => {
    return (
        <div className="wrapper">
            <ListGroup>
                <ListGroupItem>Cooking Oil</ListGroupItem>
                <ListGroupItem>Spaghetti Sauce</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default ListItems;
