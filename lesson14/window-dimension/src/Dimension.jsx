import React, { useState, useEffect } from 'react';

const Dimension = props => {
  const [dimension, setDimension] = useState({ innerWidth: null, innerHeight: null });
  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimension({ innerHeight, innerWidth });

    const handleChangeSize = event => {
      const { innerHeight, innerWidth } = event.target;
      setDimension({ innerHeight, innerWidth });
    };
    window.addEventListener('resize', handleChangeSize);

    return () => {
      window.removeEventListener('resize', handleChangeSize);
    };
  }, []);
  return (
    <div className="dimensions">
      {dimension.innerWidth}px - {dimension.innerHeight}px
    </div>
  );
};

export default Dimension;
