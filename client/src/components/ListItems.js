import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ListItems = () => {
    return (
        <div className="wrapper">
            <ListGroup>
                <ListGroupItem>Do some laundry</ListGroupItem>
                <ListGroupItem>Help cousin from her assignments</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default ListItems;
