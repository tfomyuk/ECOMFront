import React, { useEffect } from 'react'
import Products from '../../components/products';


function Tshirts() {
  useEffect(() => {
    document.title = "Футболки";
  }, []);
  return (
    <Products />
  );
}

export default Tshirts