import { useEffect, useState } from 'react';
import MediaRow from './MediaRow.jsx'
import SingleView from './SingleView';
import {fetchData} from '/src/lib/fetchdata';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      //const data = await fetchData('https://10.120.32.94/media-api/api/v1/media?page=1?limit=10')
      const data = await fetchData('test.json');
      setMediaArray(data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  // getMedia();
  useEffect(() => {
    getMedia();
  }, []);

    return (
      <>
        <h2>My Media</h2>
        <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} setSelectedItem={setSelectedItem} />
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      </>
    );
  };
  export default Home;