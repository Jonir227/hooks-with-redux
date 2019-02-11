import Axios from 'axios';

export const apiAction = () => async dispatch => {
  try {
    dispatch({ type: 'REQEUST ' });
    const { data } = await Axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    dispatch({ type: 'SUCCESS', payload: { data } });
  } catch (err) {
    dispatch({ type: 'ERROR' });
  }
};
