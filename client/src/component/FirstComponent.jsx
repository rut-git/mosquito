import React, { useState, useEffect } from 'react';
import SecondComponent from './SecondComponent';

const FirstComponent = () => {
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondComponent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>First Component</h2>
      {showSecondComponent && <SecondComponent />}
    </div>
  );
};

export default FirstComponent;
