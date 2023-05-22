import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Card,CardBody,CardSubtitle,CardText,Button,Container } from "reactstrap";

import base_url from "../api/bootapi";

  const Customer=({customer,update})=>{
    // delete customer
    const deleteCustomer=(id)=>{
        axios.delete(`${base_url}/customers/${id}`).then(
            (response)=>{
                toast.success("customer deleted successfully");
                update(id);
            },
            (error)=>{
                toast.error("customer not deleted");
            }
        )
    }

  //form handler function
  const handleForm=(e)=>{
    console.log(customer);
    postDatatoServer(customer);
    e.preventDefault();
}
//creating function to post data on server
const postDatatoServer=(data)=>{
axios.post(`${base_url}/customers`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Customer deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
          <CardSubtitle className="font-weight-bold">{customer.firstName}</CardSubtitle>
          <CardText>{customer.lastName}</CardText> 
          <CardText>{customer.custEmail}</CardText> 
          <CardText>{customer.custGender}</CardText> 
          <CardText>{customer.address}</CardText>  
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteCustomer(customer.id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-customer">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Customer;