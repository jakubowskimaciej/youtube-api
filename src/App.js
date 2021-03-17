import React, { useState, useEffect } from 'react';
import youtube from './api/youtube';
import SearchBar from './components/organisms/SearchBar/SearchBar';
import VideoDetail from './components/organisms/VideoDetail/VideoDetail';
import VideoList from './components/organisms/VideoList/VideoList';
import MainTemplate from './components/template/MainTemplate';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onFormSubmit('start wars lofi hiphop');
  }, []);

  const onFormSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };

  const handleVideoSelect = (video) => setSelectedVideo(video);

  return (
    <section>
      <SearchBar submitFn={onFormSubmit} />
      <MainTemplate>
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
      </MainTemplate>
    </section>
  );
};
export default App;
