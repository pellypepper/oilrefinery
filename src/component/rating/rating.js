import React, { useState, useEffect, useRef } from 'react';
import './rating.css';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  return <span ref={countRef}>{count}{suffix}</span>;
};

const Rating = () => {
  return (
    <div className='text-content  content-5 d-flex justify-content-around px-4 align-items-center m-auto'>
      <div className='rating animate-in'>
        <h1 className='h1'><AnimatedCounter end={600} suffix="+" /></h1>
        <span  className='span'>Employees</span>
      </div>
      
      <div className='rating animate-in'>
        <h1 className='h1'><AnimatedCounter end={530} suffix="+" /></h1>
        <span  className='span'>Happy Clients</span>
      </div>
      
      <div className='rating animate-in'>
        <h1 className='h1'><AnimatedCounter end={10} suffix="+" /></h1>
        <span  className='span'>Awards</span>
      </div>
      
      <div className='rating animate-in'>
        <h1 className='h1'><AnimatedCounter end={5} suffix="*" /></h1>
        <span  className='span'>Star Rating</span>
      </div>
    </div>
  );
};

export default Rating;