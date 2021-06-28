import axios from "axios";
import { toast } from "react-toastify";

const url = "https://localhost:44396/api";

export const getCarsDeliveries = () => {
  return (dispatch) => {
    axios
      .get(`${url}/CarDeliveries`)
      .then((carsDeliveries) => {        
        dispatch({
          type: "GET_CARS_DELIVERIES",
          carsDeliveries: carsDeliveries,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addCarDelivery = (newCarDelivery) => {
  return (dispatch, getState) => {    
    axios
      .post(`${url}/CarDeliveries/`, { ...newCarDelivery})
      .then((carDelivery) => {
        dispatch({
          type: "ADD_CAR_DELIVERY",
          carDelivery: carDelivery,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const updateCarDelivery = (updatedCarDelivery, id) => {
  return (dispatch) => {    
    axios
      .put(`${url}/CarDeliveries/${id}`, updatedCarDelivery)
      .then((carDelivery) => {
        dispatch({
          type: "UPDATE_CAR_DELIVERY",
          carDelivery,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const deleteCarDelivery = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/CarDeliveries/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_CAR_DELIVERY",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
