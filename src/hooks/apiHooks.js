import {useEffect, useState} from 'react';
import {fetchData} from '../lib/fetchdata';


const useUser = () => {
    const getUserByToken = async (token) => {
        const options = {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        };
        const url = import.meta.env.VITE_AUTH_API + '/users/token';
        const result = await fetchData(url, options);
        return result.user;
    };
    
    const postUser = async (inputs) => {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs),
        };
        const result = await fetchData(
            import.meta.env.VITE_AUTH_API + '/users',
            options,
        );
        return result;
    };
    return {getUserByToken, postUser};
};

const useMedia = () => {
    const [mediaArray, setMediaArray] = useState([]);

    const getMedia = async () => {
        const mediaResult = await fetchData(
        import.meta.env.VITE_MEDIA_API + '/media',
        );

        const mediaWithUser = await Promise.all(
            mediaResult.map(async (mediaItem) => {
                const userResult = await fetchData(
                import.meta.env.VITE_AUTH_API + '/users/' + mediaItem.user_id);
                return {...mediaItem, user: userResult.username};
            }),
        );

        setMediaArray(mediaWithUser);
    };

    useEffect(() => {
        getMedia();
    }, []);

  return {mediaArray};
};

const useAuthentication = () => {
    const postlogin = async (inputs) => {
        console.log("creds:", inputs.username, inputs.password);
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputs),
        };

        const result = await fetchData(
            import.meta.env.VITE_AUTH_API + '/auth/login',
            options,
        );
        return result;
    }
    return {postlogin};
};
    
    export {useMedia, useAuthentication, useUser};