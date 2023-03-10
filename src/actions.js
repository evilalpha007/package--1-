// src/actions.js

const fetchDataRequest = () => ({
    type: "FETCH_DATA_REQUEST",
  });
  
  const fetchDataSuccess = (data) => ({
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  });
  
  const fetchDataError = (error) => ({
    type: "FETCH_DATA_ERROR",
    payload: error,
  });
  
  export const fetchData = () => {
    return (dispatch) => {
      dispatch(fetchDataRequest());
  
      const proxyUrl = "http://localhost:3001/proxy"; // change to your proxy server URL
      const targetUrl = "http://167.71.224.189/vandu1792/cricket";
      const url = `${proxyUrl}?url=${encodeURIComponent(targetUrl)}`;
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchDataSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchDataError(error));
          console.error("Error fetching data:", error);
        });
    };
  };
  