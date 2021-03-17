import React from 'react';
import VideoItem from '../../molecules/VideoItem/VideoItem';
import { ListWrapper } from './VideoList.styles';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <section>
      <ListWrapper>{renderedList}</ListWrapper>
    </section>
  );
};

export default VideoList;
