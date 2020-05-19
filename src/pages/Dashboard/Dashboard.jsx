import React, { useState } from 'react';


const DashBoard = ({ category }) => {
  const [test, setTest] = useState('');

  return (
    <>
      <h1>{category}</h1>
    </>
  );
};

export default DashBoard;
