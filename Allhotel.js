import React, { useState,useEffect } from "react";
import Hotel from "./Hotel";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allhotel =() => {

    useEffect(() => {
            document.title="All Hotels || Learn Code with Pragati";
    });

    //Function to call servers
    const getAllHotelsFromServer = () => {
        axios.get(`${base_url}/hotels`).then(
            (response) => {
                //For Success
               // console.log("Success");
                console.log(response.data);
                toast.success("Hotels has been loaded",{position:"bottom-center"});
                sethotels(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllHotelsFromServer();
        },[]);

    const [hotels,sethotels]=useState([]);

    const UpdateHotel=(id)=>{
        sethotels(hotels.filter((c)=>c.id!=id));
    };

    
    return(
        <div>
            <h2>All Hotels</h2>
            <p>list of all Hotels as follows</p>
           {hotels.length > 0 
            ? hotels.map((item) => <Hotel key={item.id} hotel={item}/>) 
            :"No hotels"};
       </div>

    );
};

export default Allhotel;