import React from "react";
import { Link } from "react-router-dom";
import {ListGroup,ListGroupItem} from "reactstrap";

const Menus=()=>{
    return(
        <ListGroup>
        <ListGroupItem tag="a" href="/">Home</ListGroupItem>
        <ListGroupItem tag="a" href="/add-customer">Add Customer</ListGroupItem>
        <ListGroupItem tag="a" href="/all-customer">All Customer</ListGroupItem> 
        <ListGroupItem tag="a" href="update-customer">update Customer</ListGroupItem>
        
        <ListGroupItem tag="a" href="/add-hotel">Add Hotel</ListGroupItem>
        <ListGroupItem tag="a" href="/all-hotel">All Hotel</ListGroupItem> 
        <ListGroupItem tag="a" href="update-hotel">update Hotel</ListGroupItem>
       

    </ListGroup>

    );
}
export default Menus;