import React, { useEffect } from 'react'


function Tshirts() {
  useEffect(() => {
    document.title = "Футболки";
  }, []);
  return (
   <div>Футболки</div>
  );
}

export default Tshirts