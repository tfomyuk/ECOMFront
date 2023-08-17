import React, { useEffect } from 'react'

function Cups() {
  useEffect(() => {
    document.title = "Чашки";
  }, []);
  return (
    <div>Чашки</div>
  );
}

export default Cups