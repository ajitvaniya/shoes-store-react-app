import axios from "axios";

export const LOGIN_REQUEST ='LOGIN_REQUEST';
export const LOGIN_SUCCESS ='LOGIN_SUCCESS';
export const LOGIN_FAILED ='LOGIN_FAILED';

export const LOGOUT_REQUEST ='LOGOUT_REQUEST';
export const LOGOUT_SUCCESS ='LOGOUT_SUCCESS';
export const LOGOUT_FAILED ='LOGOUT_FAILED';

export const FETCH_DATA_REQUEST ='FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS ='FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED ='FETCH_DATA_FAILED';

export  const loginAction = ()=>{
    return { type:LOGIN_REQUEST }
}
export const logoutAction = (todoData=[])=>{
    return { type:LOGOUT_REQUEST  }
} 

export const fetchData = () => {
    return async (dispatch) => {
      dispatch({ type:FETCH_DATA_REQUEST  });
      try {
        const response = await axios.get('https://api.example.com/data');
        dispatch({ type:FETCH_DATA_SUCCESS, payload: response.data  });
      } catch (error) { 
        dispatch({ type:FETCH_DATA_FAILED, payload: error.message  });
      }
    };
};