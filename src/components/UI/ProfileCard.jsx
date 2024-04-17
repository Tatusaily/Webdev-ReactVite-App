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
    const data = await fetch(url).then((response) => response.json());
    const image = data.results[0].picture.medium;
    console.log("Image fetched!", image);
    return image;
};

ProfileCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
}; 

export default ProfileCard;