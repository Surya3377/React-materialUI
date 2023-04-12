import axios from 'axios';

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get(`https://dummyjson.com/posts`)
      .then((response) => {
        console.log(response)
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data.posts });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      });
  };
};
