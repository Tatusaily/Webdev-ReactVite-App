// TODO: add necessary imports
import {useEffect, useState} from 'react';
import {fetchData} from '../lib/fetchdata';

const useMedia = async () => {
    const [mediaArray, setMediaArray] = useState([]);

    const getMedia = async () => {
        const mediaResult = await fetchData(
        import.meta.env.VITE_MEDIA_API + '/media',
        );

        const mediaWithUser = await Promise.all(
            mediaResult.map(async (mediaItem) => {
                const userResult = await fetchData(
                import.meta.env.VITE_AUTH_API + '/users/' + mediaItem.user_id,);
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
    
    export {useMedia};