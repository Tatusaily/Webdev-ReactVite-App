import PropTypes from 'prop-types';

const Button = (props) => {
    const {text, handleclick} = props;

    return(
        <button
            className="bg-sky-500 m-2 p-2 rounded-xl text-white hover:bg-sky-700"
            onClick={handleclick}>{text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleclick: PropTypes.func,
};

export default Button;