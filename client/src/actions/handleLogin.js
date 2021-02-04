import backend from '../apis/backend';

const handleLogin = (onSuccessfullLogin, loginFailed, email, password) => {

    return async (dispatch, getState) => {
        try {
           
            const response = await backend.post('/api/users/login', {
                email,
                password
            });
            dispatch({ type: "SET_USER", payload: response.data });
            return onSuccessfullLogin();
        }
        catch (error) {
           
            loginFailed(error.response);
        }

    }
}
export default handleLogin;