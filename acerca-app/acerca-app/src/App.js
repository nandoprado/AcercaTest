import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import CarsDeliveries from './components/CarsDeliveries';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCarsDeliveries } from "./redux/actions/carsDeliveriesActions";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  }
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsDeliveries());
  }, [dispatch]);

  return (
    <>
    <BrowserRouter>
      <ToastContainer />
      <Container>
        <Container className={classes.contentStyle}>
          <Switch>
            <Route path="/" component={CarsDeliveries} />
          </Switch>
        </Container>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
