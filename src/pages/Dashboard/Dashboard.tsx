import React, { useState } from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import {StyledDashboard, StyledGridCards} from './style'

export interface DashBoardProps{
  category: string
}

const DashBoard: React.FC<DashBoardProps> = ({ category }) => {
  const [test, setTest] = useState('');

  return (
    <>
    <StyledDashboard>
      <StyledGridCards>

      <CardProduct />
      <CardProduct />
      <CardProduct />

      </StyledGridCards>

    </StyledDashboard>
    </>
  );
};

export default DashBoard;
