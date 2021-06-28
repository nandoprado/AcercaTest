import React, { useState } from "react";
import ListCarsDeliveries from "./ListCarsDeliveries";

const CarsDeliveries = () => {  
  const [carDelivery, setCarDelivery] = useState({
    name: "",
    isComplete: false,
  });

  return (
    <>
      <>
        <ListCarsDeliveries carDelivery={carDelivery} setCarDelivery={setCarDelivery} />
      </>            
    </>
  );
};

export default CarsDeliveries;
