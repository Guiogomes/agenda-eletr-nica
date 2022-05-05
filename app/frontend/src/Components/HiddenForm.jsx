import React, { useContext } from 'react';
import { MyContext } from '../context/Provider';

const FillAgenda = () => {
  const { setHidden } = useContext(MyContext);

  const handleClick = () => {
    setHidden(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Preencher agenda</button>
    </div>
  )
}

export default FillAgenda;