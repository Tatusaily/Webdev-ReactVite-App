import {useEffect, useState} from 'react';
import {fetchData} from '../lib/fetchdata';


const useUser = () => {
    getUserByToken = async (token) => {
        const url = import.meta.env.VITE_AUTH_API + '/users/token/' + token;
        return fetchData(url);
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
    
    export {useMedia, useAuthentication};