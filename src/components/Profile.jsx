import ProfileCard from "./UI/ProfileCard";

export const Profile = () => {
    return (
        <div id="Profile" className="flex">
            <ProfileCard name="John Doe" />
            <ProfileCard name="Jane Doe" />
            
        </div>
    );
};