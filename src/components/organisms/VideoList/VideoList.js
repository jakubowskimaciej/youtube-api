import React from 'react';
import VideoItem from '../../molecules/VideoItem/VideoItem';
import { ListWrapper } from './VideoList.styles';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video) => (
    <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
  ));

  return <ListWrapper>{videoList}</ListWrapper>;
};

export default VideoList;
