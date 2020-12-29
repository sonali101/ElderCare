import React from 'react';
import{Carousel,Card,CardDeck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import NursingCare from './Nursing'

class Homepage extends React.Component{
    render(){
        return(
            <>

            {/*slider Container */}

                <Carousel className="topmargin">
                <Carousel.Item>
                    <img src="./image.jpg" height="600" className="d-block w-100"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./nurse.jpg" height="600" className="d-block w-100"></img>
                </Carousel.Item>
                </Carousel>


                {/*Services of Nurse,medicien,Workout*/}

                <div className="heading">
                    <h2>OUR SERVICES</h2>
                </div>

                <div className="topSpace">
                <CardDeck >
                    <Card border="light">
                    <Card.Link href="./Nursing" >
                        <Card.Img src="./Nursecare.png" variant="top" className="center"></Card.Img>
                        <Card.Title className="text">Nursing Care</Card.Title>
                        </Card.Link>
                    </Card>

                    <Card border="light">
                        <Card.Link href="#">
                        <Card.Img src="./medicien.png" variant="top" className="center"></Card.Img>
                        <Card.Title className="text">Mediciens</Card.Title>
                        </Card.Link>
                    </Card>

                    <Card border="light">
                        <Card.Link href="#">
                        <Card.Img src="./gym.png" variant="top" className="center"></Card.Img>
                        <Card.Title className="text">Workout</Card.Title>
                        </Card.Link>
                    </Card>
                    

                    <Card border="light">
                        <Card.Link href="#">
                        <Card.Img src="./Doc.png" variant="top" className="center"></Card.Img>
                        <Card.Title className="text"> Doctor</Card.Title>
                        </Card.Link>
                    </Card>
                </CardDeck>
                </div>

            </>
        );
    }
}

export default Homepage;