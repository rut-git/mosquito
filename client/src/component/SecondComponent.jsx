import React, { useState, useEffect } from 'react';
import FirstComponent from './FirstComponent';

const SecondComponent = () => {
  const [showFirstComponent, setShowFirstComponent] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstComponent(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  useEffect(()=>{
    const audioElement = new Audio(`../../public/sounds/כשהלב בוכה.mp3`);
    audioElement.play();
  },[show])

  return (
    <div>
        <audio src='../../public/sounds/כשהלב בוכה.mp3' autoPlay></audio>
        {console.log("../../public/sounds/כשהלב בוכה.mp3")}
      <h2>Second Component</h2>
      {showFirstComponent && <FirstComponent />}
    </div>
  );
};

export default SecondComponent;
