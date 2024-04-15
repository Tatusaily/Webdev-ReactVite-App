import PropTypes from 'prop-types';


const SingleView = (props) => {
const {item} = props;
return (
    <>
        <dialog open={item ? true : false}>
            <p>
                <button onClick={() => props.setSelectedItem(null)}>Close</button>
            </p>
            {item && (
                <>
                { item.media_type.includes('video') ? (
                <video controls>
                    <source
                    src={item.filename}
                    type={item.media_type} />
                </video>
                ) : (
                <img src={item.filename} alt={item.title}/>
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