import React, { useEffect } from 'react'

function Puzzles() {
  useEffect(() => {
    document.title = "Пазли";
  }, []);
  return (
    <div>Пазли</div>
  );
}
 

export default Puzzles