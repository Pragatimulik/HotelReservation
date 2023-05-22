import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Card,CardBody,CardSubtitle,CardText,Button,Container } from "reactstrap";

import base_url from "../api/bootapi";

  const Hotel=({hotel,update})=>{
    // delete hotels
    const deleteHotel=(id)=>{
        axios.delete(`${base_url}/hotels/${id}`).then(
            (response)=>{
                toast.success("Hotel deleted successfully");
                update(id);
            },
            (error)=>{
                toast.error("Hotel not deleted");
            }
        )
    }

  //form handler function
  const handleForm=(e)=>{
    console.log(hotel);
    postDatatoServer(hotel);
    e.preventDefault();
}
//creating function to post data on server
const postDatatoServer=(data)=>{
axios.post(`${base_url}/hotels`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Hotel deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something wenr wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
          <CardSubtitle className="font-weight-bold">{hotel.hotelName}</CardSubtitle>
          <CardText>{hotel.city}</CardText> 
          <CardText>{hotel.address}</CardText> 
          <CardText>{hotel.contact}</CardText> 
          <CardText>{hotel.price}</CardText>  
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteHotel(hotel.id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-hotel">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Hotel;