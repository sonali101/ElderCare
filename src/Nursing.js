import { render } from '@testing-library/react'
import React from 'react'
import{Table,Button,Form, FormControl,Container,Row,Col,Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nursing.css';
class NursingCare extends React.Component{


    state={
        filter :"",
        data :[
            {
                
                fname:"Aditya",
                lname:"Dhengle",
                city:"Nagpur",
                email:"aditya@gmail.com"
            },
            {
                fname:"Sujata",
                lname:"Kangali",
                city:"Pune",
                email:"sujata@gmail.com"
            },
            {
                fname:"Shalini",
                lname:"Tiwari",
                city:"Solapur",
                email:"shalini@gmail.com"
            },
            {
                fname:"Mohini",
                lname:"Deshmukh",
                city:"Delhi",
                email:"mohini@gmail.com"
            },
            {
                fname:"Roshan",
                lname:"Kole",
                city:"Bihar",
                email:"roshan@gmail.com"
            },
            {
                fname:"Digambar",
                lname:"Ambani",
                city:"Nagpur",
                email:"digambar@gmail.com"
            }
            
        ]
    };

    handalChange = event=>{
        this.setState({filter:event.target.value});
    };

     onDisplay=()=>{
        alert("call 9564383256");
    }



    render(){

        const i=0;
        const { filter,data }=this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filterdata = data.filter(item=>{
            return Object.keys(item).some(key=>item[key].toLowerCase().includes(lowercasedFilter));
        });


        return(
           
           <>
            <div>
           <h2>NURSE CONTACT DETAILS</h2>
           </div>

           <div style={{marginBottom:'20px',marginLeft:'650px'}}>
                <Form inline >
                    <FormControl type="text" value={filter} placeholder="Enter the City" onChange={this.handalChange}></FormControl>
                </Form>
            </div>



            <div>
                <Container bordered>
                    
                    
                    <Row xs={2} md={4} lg={6} className="rows">
                    <Col></Col>
                    <Col className="columns" style={{fontWeight:'bold'}}>First Name</Col>
                    <Col className="columns" style={{fontWeight:'bold'}}>Last Name</Col>
                    <Col className="columns" style={{fontWeight:'bold'}}>City</Col>
                    <Col className="columns" style={{fontWeight:'bold'}}>Email-Id</Col>
                    <Col className="columns" style={{textAlign:'justify',fontWeight:'bold'}}>Dial Number</Col>
                    </Row>
                

                    {
                    filterdata.map(item =>(
                        <div key={item.lname}>
                        <div>
                      

                            
                               <Row className="rows">

                            
                                    <Col className="columns">#</Col>
                                    <Col className="columns">{item.fname}</Col>
                                    <Col className="columns" >{item.lname}</Col>
                                    <Col className="columns">{item.city}</Col>
                                    <Col className="columns">{item.email}</Col>
                                    <Col><Button variant="outline-primary" onClick={this.onDisplay}>Contact</Button></Col>
                                    
                                </Row>
                        
                           
                        </div>
                        </div>
                    ))
                }
                    
                </Container>
            </div>
           
           </>
        );
           
    }
}
export default NursingCare;


