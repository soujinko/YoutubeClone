import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD0iZQQo7NXDybTSsJ8lFePg9Wcbm9nO7Y&=AIzaSyD0iZQQo7NXDybTSsJ8lFePg9Wcbm9nO7Y", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])
  return (
  <div>
    <VideoList videos={videos} />
  </div>)
  
};

export default App;