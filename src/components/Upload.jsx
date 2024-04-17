import { useState } from 'react';

const Upload = () => {

    const [file] = useState("");
    console.log(file);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Joku koittaa lähettää tiedostoa');
    };

    return <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name'/>
        <input type="file" />
        <button type="submit">Upload file</button>
    </form>
    </>
};

export default Upload;