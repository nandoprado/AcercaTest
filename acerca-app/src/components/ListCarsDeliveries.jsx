import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarDelivery from "./CarDelivery";
import EditCarDelivery from "./EditCarDelivery";
import TablePaginationActions from "./TablePaginations"; 
import { getCarsDeliveries } from "../redux/actions/carsDeliveriesActions";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { AddBox } from "@material-ui/icons";

const useStyles = makeStyles({
  todosStyle: {    
    margin: "20px auto",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const ListCarsDeliveries = ({ carDelivery, setCarDelivery }) => {  
  const carsDeliveries = useSelector((state) => state.carsDeliveries);
  const [showEdit, setShowEdit] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();    

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, carsDeliveries.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {setPage(newPage);};
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  useEffect(() => {
    dispatch(getCarsDeliveries());
  }, [carDelivery.id, dispatch]);  

  const handleNew = () => {    
    setCarDelivery({});
    setShowEdit(true);
    setPage(0);
  };

  const handleUpdate = () => {
    setShowEdit(true);
  }

  const hideModal = () => {    
    setShowEdit(false);    
  };

  return (
    <>
      <div className={classes.todosStyle}>
        <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
          <Typography variant="h5">
            {"DELIVERIES"}          
          </Typography>                    
        </Box>        
        <Box marginBottom={1} display="flex" flexWrap="wrap" justifyContent="right" alignItems="right">
          <Button variant="contained" onClick={() => handleNew()}>
            <AddBox color="primary" />
              New delivery
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Order Number</StyledTableCell>
                <StyledTableCell align="left">VinNumber</StyledTableCell>
                <StyledTableCell align="left">Model</StyledTableCell>   
                <StyledTableCell align="left">License Plate</StyledTableCell>                 
                <StyledTableCell align="left">Delivery Date</StyledTableCell>
                <StyledTableCell align="left">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>     
            {carsDeliveries &&
              (rowsPerPage > 0
                ? carsDeliveries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : carsDeliveries
              ).map((carDelivery) => {            
                return (
                  <CarDelivery
                    carDelivery={carDelivery}
                    key={carDelivery.id}
                    setCarDelivery={setCarDelivery}
                    carsDeliveries={carsDeliveries}
                    handleUpdate = {handleUpdate}
                  />
                );
              })
            }  
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>)
            }     
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 50, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={carsDeliveries.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>    
        {showEdit && <EditCarDelivery carDelivery={carDelivery} setCarDelivery={setCarDelivery} handleClose={hideModal}/>}        
      </div>
    </>
  );
};

export default ListCarsDeliveries;
