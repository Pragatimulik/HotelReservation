import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Learn Code with Pragati";
    },[]);
    return(
        <div>
            <Card className="text-center" border="success" >
                <CardBody>
                <Container className="text-center">
                    <CardTitle><h2 class="text-success">Hotel Reservation</h2></CardTitle>
                    </Container>
                    <br/>
                    <p>
                      
                      An online reservation system is a software solution that allows customers to book their reservations or appointments online via a company's website or app instead of over the phone or in person.
                      This Online Hotel Reservation System project aims at providing the user to reserve accommodation at hotels online. The system shall take the start and end dates from the user and check for availability of rooms. It shall check for the number of guests and reserve the rooms for the user. It can also modify the dates of reservation. This is a simple user interface which displays the information about the hotel, its contact address and the amenities at the hotel.
                      Hotel is a web application for hotel reservation works by processing online reservations made through a hotel's website.
                      This project is a Web-based application that provides a user-friendly and simple interface to let users easily book hotel rooms.
                    </p>
                    
                        
                    
                </CardBody>
            </Card>
        </div>
    );
};
export default Home;