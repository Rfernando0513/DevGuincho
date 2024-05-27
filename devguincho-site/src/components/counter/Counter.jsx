import React, { useEffect, useState } from 'react';


const Counter = ({ end }) => {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endInt = parseInt(end, 10); 
    const duration = 2500; 
    const increment = endInt / (duration / 100);

    const handleScroll = () => {
      const element = document.getElementById('counter');

      if (element && element.getBoundingClientRect().top <= window.innerHeight) {
       
        const interval = setInterval(() => {
          start += increment;
          if (start > endInt) {
            clearInterval(interval); 
            start = endInt;
          }
          setCount(Math.floor(start)); 
        }, 100);

        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll); 

    return () => window.removeEventListener('scroll', handleScroll); 
  }, [end]);

  
  return <h3 id="counter">+DE {count} CLIENTES ATENDIDOS</h3>;
};

export default Counter;
