import React from 'react';
import { StyledItem, StyledImage, StyledUnderline } from './VideoItem.styles';
import { Title } from '../../atoms/Title/Title';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <>
      <StyledItem onClick={() => onVideoSelect(video)}>
        <StyledImage
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />
        <Title style={{ fontSize: '1.3rem' }}>{video.snippet.title}</Title>
      </StyledItem>
      <StyledUnderline />
    </>
  );
};

export default VideoItem;
