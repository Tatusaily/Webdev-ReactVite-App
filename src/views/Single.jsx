import { useNavigate, useLocation, } from "react-router-dom"

const Single = () => {
    const {state} = useLocation();
    const item = state.item;
    const navigate = useNavigate();

    return(
        <>
        <dialog
            className=" w-11/12 md:w-1/2 bg-zinc-900 text-white p-4 rounded-lg shadow-lg fixed top-10 bg-opacity-90"
            open={item ? true : false}>
            <p>
                <button onClick={() => navigate(-1)}>Go back</button>
            </p>
            {item && (  
                <>
                { item.media_type.includes('video') ? (
                <video
                className='m-auto'
                controls>
                    <source
                    src={item.filename}
                    type={item.media_type} />
                </video>
                ) : (
                <img
                className='m-auto'
                src={item.filename} alt={item.title}/>
                )}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Created: {new Date(item.created_at).toLocaleString('fi-FI')}</p>
                <p>Size: {item.filesize}</p>
                <p>Type: {item.media_type}</p>
                </>
            )}
        </dialog>
    </>
    )
}

export default Single;