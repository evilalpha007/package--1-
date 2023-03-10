export const fetchDataRequest = () => ({
    type: "FETCH_DATA_REQUEST",
  });
  
  export const fetchDataSuccess = (data) => ({
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  });
  
  export const fetchDataError = (error) => ({
    type: "FETCH_DATA_ERROR",
    payload: error,
  });
  
  export const fetchData = () => {
    return (dispatch) => {
      dispatch(fetchDataRequest());
  
      const url = "http://167.71.224.189/vandu1792/cricket";
      const request = new Request(url, { mode: "no-cors" });
  
      fetch(request)
        .then(response => response.json())
        .then(data => {
          dispatch(fetchDataSuccess(data));
        })
        .catch(error => {
          dispatch(fetchDataError(error));
          console.error("Error fetching data:", error);
        });
    };
  };
  