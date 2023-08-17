import React, { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    document.title = "Контакти";
  }, []);
  return (
    <div>Контакти</div>
  );
}

export default Contact