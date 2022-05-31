import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();

    const acee = `12Bearer ${auth?.refreshToken}`
    console.log(acee)

    const refresh = async () => {
        const response = await axios.get('/api/token/refresh', {
            headers: { 'Authorization': `Bearer ${auth?.refreshToken}`, 'Content-Type': 'application/json' },
            //withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access_token);
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.access_token
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;