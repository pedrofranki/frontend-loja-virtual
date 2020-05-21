import React, { useState } from 'react';
import CardProduct from '../../components/CardProduct/CardProduct'

export interface DashBoardProps{
  category: string
}

const DashBoard: React.FC<DashBoardProps> = ({ category }) => {
  const [test, setTest] = useState('');

  return (
    <>
      <CardProduct />

    </>
  );
};

export default DashBoard;
