import PropTypes from 'prop-types';
import Button from './UI/Button';


const SingleView = (props) => {
const {item} = props;
return (
    <>
        <dialog
            className=" w-11/12 md:w-1/2 bg-zinc-900 text-white p-4 rounded-lg shadow-lg fixed top-10 bg-opacity-90"
            open={item ? true : false}>
            <p>
                <Button text="Close" handleclick={() => props.setSelectedItem(null)} />
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
    );
};
SingleView.propTypes = {
    item: PropTypes.object,
    setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;