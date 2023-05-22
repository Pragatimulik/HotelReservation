import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const UpdateHotel=()=>{
    useEffect(()=>{
        document.title="UPDATE Hotel || Learn Code with Pragati";
},[]);

    const [hotel,sethotel]=useState({});

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
            toast.success("Hotel Information updated successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something wenr wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h2 className="text-center my-3">Fill Hotel Information</h2>
        <Form onSubmit={handleForm}>

        <FormGroup>
                <label for="HotelId">Hotel Id</label>
                <Input
                        Type="text"
                        placeholder="Enter HotelID here"
                        name="HotelId"
                        Id="HotelId"
                        onChange={(e)=>{
                            sethotel({...hotel,id:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
                <label for="hotelName">Hotel Name</label>
                <Input
                        Type="text"
                        placeholder="Enter Hotel Name here"
                        name="hotelName"
                        Id="hotelName"
                        onChange={(e)=>{
                            sethotel({...hotel,hotelName:e.target.value});
                        }}
                />
            </FormGroup>
                
            <FormGroup>
                <label for="city">City</label>
                <Input
                        Type="text"
                        placeholder="Enter City here "
                        name="city"
                        Id="city"
                        onChange={(e)=>{
                            sethotel({...hotel,city:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="address">Address</label>
                <Input
                        Type="textarea"
                        placeholder="Enter address here "
                        Id="address"
                        style={{height:150}}
                        onChange={(e)=>{
                            sethotel({...hotel,address:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="contact">Contact</label>
                <Input
                        Type="tel"
                        placeholder="Enter Contact here "
                        name="contact"
                        Id="contact"
                        onChange={(e)=>{
                            sethotel({...hotel,contact:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="price">Price</label>
                <Input
                        Type="text"
                        placeholder="Enter Price here "
                        name="price"
                        Id="price"
                        onChange={(e)=>{
                            sethotel({...hotel,price:e.target.value});
                        }}
                />
                </FormGroup>
                
                <Container className="text-center">
                    <Button type="submit" color="success">Update Hotel</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default UpdateHotel;