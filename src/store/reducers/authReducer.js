import { FETCH_DATA_FAILED, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../actions/authActions";

const initialState = {
    data: null,
    isLoading: false,
    error: null,
    sampleData:null
};
  
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true, error: null };
        case LOGIN_SUCCESS:
            return { ...state, data: action.payload, isLoading: false };
        case LOGIN_FAILED:
            return { ...state, error: action.payload, isLoading: false };
        case LOGOUT_REQUEST:
            return { ...state, isLoading: true, error: null };
        case LOGOUT_SUCCESS:
            return { ...state, data: action.payload, isLoading: false };
        case LOGOUT_FAILED:
            return { ...state, error: action.payload, isLoading: false };
        case FETCH_DATA_REQUEST:
            return { ...state, isLoading: true, error: null };
        case FETCH_DATA_SUCCESS:
            return { ...state, sampleData: action.payload, isLoading: false };
        case FETCH_DATA_FAILED:
            return { ...state, sampleData: null, isLoading: false };
      default:
        return state;
    }
};

export default authReducer
  
 