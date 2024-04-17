import PropTypes from 'prop-types';

const ProfileCard = (props) => {
    const {name} = props;
    let image = props.image;
    if (!props.image) {
        getRandomImage().then((data) => {
            console.log("Image fetched!");
            image = data;
        });
    }


    return(
        <div className="bg-gray-100 p-4 rounded-xl m-2">
            <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto" />
            <h1 className="text-2xl font-bold">{name}</h1>
        </div>
    );
};

const getRandomImage = async () => {
    console.log("Fetching image...");
    const url = "https://randomuser.me/api";
    const response = await fetch(url);
    const data = await response.json();
    return data.results[0].picture.medium;
};

ProfileCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
}; 

export default ProfileCard;