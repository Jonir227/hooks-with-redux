import useConnect from './useConnect';

const useCounter = () => {
  const [counter, actions] = useConnect(state => state.counter, {
    up: () => ({ type: 'UP' }),
    down: () => ({ type: 'DOWN' }),
  });
  return [counter, actions];
};

export default useCounter;
