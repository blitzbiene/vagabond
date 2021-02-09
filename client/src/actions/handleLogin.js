import backend from '../apis/backend';

const handleLogin = (onSuccessfullLogin, loginFailed, email, password) => {

    return async (dispatch, getState) => {
        try {
           
            const response = await backend.post('/api/users/login', {
                email,
                password
            });
            console.log("handleLogin action",response)
            onSuccessfullLogin(response);
        }
        catch (error) {

            console.log(error);
           
            loginFailed(error.response);
        }

    }
}
export default handleLogin;