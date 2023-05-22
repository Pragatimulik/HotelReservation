import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name,title})
{
    return(
        <div>
           
            <Card className="my-2 bg-secondary text-info">
                <CardBody>
                
                    <h1 className="text-center my-5">Welcome to Hotel Saga Resort</h1>
                    <h4 className="text-center my-5 text-dark">visit our website</h4>
                  
                </CardBody>
            </Card>
        </div>
    );
}
export default Header;