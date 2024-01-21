import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReduceer = (state, action) => {
 switch(action.type) {
    case 'add_error':
        return { ...state, errorMessage: action.payload }
    default:
        return state;
 }

};


const signup = dispatch => {
    return  async({ email, password }) => {
try {
    const response = await trackerApi.post('/signup', { email, password });
    console.log(response.data);
} catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
}

    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {

    };
}

const singout = (dispatch) => {
    return () => {

    };
};



export const { Provider, Context } = createDataContext(
    authReduceer,
    { signin, signup, signup},
    { isSignedIn: false, errorMessage: '' }
);