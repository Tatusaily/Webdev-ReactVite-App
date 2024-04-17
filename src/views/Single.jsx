import { useLocation, useParams } from "react-router-dom"

const Single = () => {
    const location = useLocation();
    const params = useParams();

    console.log("location" , location);
    console.lof("params", params);

    return(
        <>
        <h1>ID: {params.id}</h1>
        </>
    )
}

export default Single;