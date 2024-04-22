import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MediaRow = (props) => {
    const {item} = props;
    return (
        <tr>
            <td>
            <img src={item.thumbnail} alt={item.title} />
            </td>
            <td>{item.owner}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
            <td>{item.filesize}</td>
            <td>{item.media_type}</td>
            <td>
                <Link to="/single" state={{item}}>Show</Link>
            </td>
        </tr>
    );
};

MediaRow.propTypes = {
    item: PropTypes.object.isRequired,
    setSelectedItem: PropTypes.func,
};

export default MediaRow;