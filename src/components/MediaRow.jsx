import PropTypes from 'prop-types';
import Button from './UI/Button';

const MediaRow = (props) => {
    const {item, setSelectedItem} = props;
    const handleclick = () => {
        setSelectedItem(item);
    };
    return (
        <tr>
            <td>
            <img src={item.thumbnail} alt={item.title} />
            </td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
            <td>{item.filesize}</td>
            <td>{item.media_type}</td>
            <td>
                <Button text="View" handleclick={handleclick} />
            </td>
        </tr>
    );
};

MediaRow.propTypes = {
    item: PropTypes.object.isRequired,
    setSelectedItem: PropTypes.func,
};

export default MediaRow;