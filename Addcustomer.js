import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Addcustomer=()=>{
    useEffect(()=>{
        document.title="ADD Customer || Learn Code with Pragati";
    },[]);

    const [customer,setcustomer]=useState({});

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
            toast.success("Customer added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h2 className="text-center my-3">Fill Customer Details</h2>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="CustomerId">Customer Id</label>
                <Input
                        Type="text"
                        placeholder="Enter CustomerID here"
                        name="CustomerId"
                        Id="CustomerId"
                        onChange={(e)=>{
                            setcustomer({...customer,id:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
                <label for="firstName">First Name</label>
                <Input
                        Type="text"
                        placeholder="Enter First Name here"
                        name="firstName"
                        Id="firstName"
                        onChange={(e)=>{
                            setcustomer({...customer,firstName:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="lastName">Last Name</label>
                <Input
                        Type="text"
                        placeholder="Enter Last Name here "
                        name="lastName"
                        Id="lastName"
                        onChange={(e)=>{
                            setcustomer({...customer,lastName:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="custGender">Gender</label>
                <Input
                        Type="text"
                        placeholder="Enter Gender here "
                        name="custGender"
                        Id="custGender"
                        onChange={(e)=>{
                            setcustomer({...customer,custGender:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="custEmail">Email</label>
                <Input
                        Type="text"
                        placeholder="Enter Email here "
                        name="custEmail"
                        Id="custEmail"
                        onChange={(e)=>{
                            setcustomer({...customer,custEmail:e.target.value});
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
                            setcustomer({...customer,address:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="dateOFBirth">Date Of Birth</label>
                <Input
                        Type="date"
                        placeholder="Enter Date Of Birth here "
                        name="dateOFBirth"
                        Id="dateOFBirth"
                        onChange={(e)=>{
                            setcustomer({...customer,dateOFBirth:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="reservationDate">Reservation Date</label>
                <Input
                        Type="date"
                        placeholder="Enter Reservation Date here "
                        name="reservationDate"
                        Id="reservationDate"
                        onChange={(e)=>{
                            setcustomer({...customer,reservationDate:e.target.value});
                        }}
                />
                </FormGroup>

                <FormGroup>
                <label for="contactNo">Contact Number</label>
                <Input
                        Type="tel"
                        placeholder="Enter Contact Number here "
                        name="contactNo"
                        Id="contactNo"
                        onChange={(e)=>{
                            setcustomer({...customer,contactNo:e.target.value});
                        }}
                />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Customer</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
};
export default Addcustomer;