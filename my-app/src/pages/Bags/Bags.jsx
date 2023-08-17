import React, { useEffect } from 'react'

function Bags() {
  useEffect(() => {
    document.title = "Шопери";
  }, []);
  return (
    <div>Шопери</div>
  );
}

export default Bags
