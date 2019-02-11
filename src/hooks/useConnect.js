import { useContext } from 'react';
import reduxContext from '../reduxContext';

const useConnect = (getStateFromProps, getDispatchFromProps) => {
  const { store } = useContext(reduxContext);
  const { getState, dispatch } = store;
  const state = getStateFromProps(getState());
  const actions = Object.entries(getDispatchFromProps).reduce(
    (acc, [key, value]) => {
      return {
        ...acc,
        [key]: arg => dispatch(value(arg)),
      };
    },
    {},
  );
  return [state, actions];
};

export default useConnect;
