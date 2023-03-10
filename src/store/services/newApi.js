export const fetchData = () => {
    return async (dispatch) => {
      try {
        const url = "http://167.71.224.189/vandu1792";
        const request = new Request(url, { mode: "no-cors" });
        const response = await fetch(request);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: data
        });
      } catch (error) {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: error.message
        });
      }
    }
  };
  