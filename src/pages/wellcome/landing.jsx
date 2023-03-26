import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './landing.css'

export default function Landing() {
    const history = useHistory();

    useEffect(() => {
      const timer = setTimeout(() => {
        history.push("./log_in");
        console.log(history)
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timer);
      
    }, [history]);
    console.log(history)
  return (
    <div className='landing'>
    <div className='landing_frame1'>
      
       

        <p className='landing_wellcome'>Wellcome</p>
        <p className='landing_shopname'>ABC shopping center</p>
        <p className='pos_sys'>POS system</p>
        <p className='creator'>powered by @sasith</p>
    
    </div>
    </div>
  )
}
