import React from 'react';
import useCounter from './hooks/useCounter';

const SubComponent = () => {
  const [counter] = useCounter();
  return <h1>{counter}</h1>;
};

export default SubComponent;
