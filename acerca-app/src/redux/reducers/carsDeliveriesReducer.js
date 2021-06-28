import { toast } from "react-toastify";

const carsDeliveriesReducer = (carsDeliveries = [], action) => {
  switch (action.type) {
    case "GET_CARS_DELIVERIES":
      return action.carsDeliveries.data;
    case "ADD_CAR_DELIVERY":
      toast.success("A car delivery was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.carDelivery.data, ...carsDeliveries];
    case "UPDATE_CAR_DELIVERY":
      toast.success("A car delivery was updated...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });      
      console.log(action.carDelivery);
      return carsDeliveries.map((carDelivery) =>      
      carDelivery.id === action.carDelivery.data.id ? action.carDelivery.data : carDelivery      
      );          
    case "DELETE_CAR_DELIVERY":
      toast.success("A car delivery was deleted...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return carsDeliveries.filter((carDelivery) => carDelivery.id !== action.id);
    case "CLEAR_CAR_DELIVERY":
      return [];
    default:
      return carsDeliveries;
  }
};

export default carsDeliveriesReducer;
