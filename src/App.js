import React from 'react';
import useCounter from './hooks/useCounter';
import SubComponent from './SubComponent';

const App = () => {
  // 카운터 로직 분리하여 재사용성 증가
  const [counter, modCounter] = useCounter();

  return (
    <div>
      {counter}
      <button onClick={() => modCounter.up()}>올라가요</button>
      <button onClick={() => modCounter.down()}>내려가요</button>
      <SubComponent />
    </div>
  );
};

export default App;
