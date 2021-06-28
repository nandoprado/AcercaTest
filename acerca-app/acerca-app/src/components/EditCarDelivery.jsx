import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography, Box } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { Save, Cancel } from '@material-ui/icons';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { addCarDelivery, updateCarDelivery } from "../redux/actions/carsDeliveriesActions";

const useStyles = makeStyles({
    formStyle: {
      margin: "0px auto",
      padding: "30px",
      borderRadius: "9px",
      boxShadow: "0px 0px 12px -3px #000000",
      display: "flex",
      justifyContent: "space-between",
    },
    submitButton: {
        marginLeft: "20px",
    }
  });   

const EditCarDelivery = ({ carDelivery, setCarDelivery, handleClose }) => {    
    const classes = useStyles();
    const dispatch = useDispatch()    
    const handleSubmit = (e) => {
        e.preventDefault();        
        if(carDelivery.id){            
            const updatedCarDelivery = {
                id: carDelivery.id,
                orderNumber: carDelivery.orderNumber,
                vinNumber: carDelivery.vinNumber,
                model: carDelivery.model,
                licensePlate: carDelivery.licensePlate,    
                deliveryDate: carDelivery.deliveryDate,                
            }        
            // Este dispatch a onde vai???    
            dispatch(updateCarDelivery(updatedCarDelivery, carDelivery.id));
            //setCarDelivery({carDelivery});
        } else{
            const newCarDelivery = {
                ...carDelivery,
                orderNumber: carDelivery.orderNumber,
                vinNumber: carDelivery.vinNumber,
                model: carDelivery.model,
                licensePlate: carDelivery.licensePlate,    
                deliveryDate: carDelivery.deliveryDate,
            }            
            dispatch(addCarDelivery(newCarDelivery));
            setCarDelivery({});
        }        
        handleClose();
    }    

    return ( 
        <div className="modal display-block">
            <section className="modal-main">
                <div className="App">
                    <form noValidate autoComplete="off" className={classes.formStyle} onSubmit = { handleSubmit }>
                        <Container>
                            <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" mb ={5}>
                                <Typography variant="h5">{carDelivery.id?"EDIT DELIVERY":"NEW DELIVERY"}</Typography>                                                    
                            </Box>  
                            <Row className='mb-4'>
                                <TextField                                    
                                    label= "Order number"
                                    variant="outlined"                                    
                                    fullWidth
                                    value = {carDelivery.orderNumber}
                                    onChange = {(e) => setCarDelivery({...carDelivery, orderNumber: e.target.value})}
                                />
                            </Row>
                            <Row className='mb-4'>
                                <TextField                                    
                                    label= "Vin number"
                                    variant="outlined"                                    
                                    fullWidth
                                    value = {carDelivery.vinNumber}
                                    onChange = {(e) => setCarDelivery({...carDelivery, vinNumber: e.target.value})}
                                />
                            </Row>
                            <Row className='mb-4'>
                                <TextField                                    
                                    label= "Model"
                                    variant="outlined"                                    
                                    fullWidth
                                    value = {carDelivery.model}
                                    onChange = {(e) => setCarDelivery({...carDelivery, model: e.target.value})}
                                />
                            </Row>
                            <Row className='mb-4'>
                                <TextField                                    
                                    label= "License plate"
                                    variant="outlined"                                    
                                    fullWidth
                                    value = {carDelivery.licensePlate}
                                    onChange = {(e) => setCarDelivery({...carDelivery, licensePlate: e.target.value})}
                                />
                            </Row>
                            <Row className='mb-4'> 
                                <TextField            
                                    type="date"
                                    label= "Delivery date"
                                    variant="outlined"                                    
                                    fullWidth
                                    value = {moment(carDelivery.deliveryDate).format('YYYY-MM-DD')}
                                    onChange = {(e) => setCarDelivery({...carDelivery, deliveryDate: e.target.value})}
                                />
                            </Row>
                            <Row> 
                                <Col>
                                <Button variant="contained" color="primary" className = {classes.submitButton} type="submit">
                                    <Save/>Save
                                </Button>
                                </Col>
                                <Col>
                                <Button variant="contained" color="secondary" onClick={handleClose}>
                                    <Cancel/>Cancel
                                </Button>
                                </Col>
                            </Row>
                        </Container>
                    </form>        
                </div>
            </section>
        </div>
     );
}
 
export default EditCarDelivery;