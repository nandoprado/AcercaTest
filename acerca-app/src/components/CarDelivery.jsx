import React from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup, Button } from "@material-ui/core";
import { Create, Delete } from "@material-ui/icons";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import moment from 'moment';

import { deleteCarDelivery } from "../redux/actions/carsDeliveriesActions";

const CarDelivery = ({ carDelivery, setCarDelivery, carsDeliveries, handleUpdate }) => {  
  const dispatch = useDispatch();
  
  const handleOnUpdateClick = (id) => {
    const foundCarDelivery = carsDeliveries.find((carDelivery) => carDelivery.id === id);    
    setCarDelivery({ ...foundCarDelivery });
    handleUpdate();    
  };

  const handleDelete = (id) => {
    dispatch(deleteCarDelivery(id));
  };  

  return (
    <TableRow key={carDelivery.id}>
      <TableCell component="th" scope="row">{carDelivery.orderNumber}</TableCell>
      <TableCell align="left">{carDelivery.vinNumber}</TableCell>
      <TableCell align="left">{carDelivery.model}</TableCell>
      <TableCell align="left">{carDelivery.licensePlate}</TableCell>
      <TableCell align="left">{moment(carDelivery.deliveryDate).format('DD/MM/YYYY')}</TableCell>
      <TableCell align="left">
        <ButtonGroup size="small" aria-label="outlined primary button group">            
          <Button onClick={() => handleOnUpdateClick(carDelivery.id)}>
            <Create color="primary" />
          </Button>
          <Button onClick={() => {if(window.confirm('DELETE DELIVERY '+ carDelivery.orderNumber + "?")){handleDelete(carDelivery.id)};}}>
            <Delete color="secondary" />
          </Button>
        </ButtonGroup></TableCell>
    </TableRow>    
  );
};

export default CarDelivery;
