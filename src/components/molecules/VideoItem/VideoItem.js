import React from 'react';

import { StyledItem, StyledImage, StyledUnderline } from './VideoItem.styles';
import { Title } from '../../atoms/Title/Title';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div style={{ width: '100%' }}>
      <StyledItem onClick={() => onVideoSelect(video)}>
        <StyledImage
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.thumbnails.title}
        />
        <Title style={{ fontSize: '1.3rem' }}>{video.snippet.title}</Title>
      </StyledItem>
      <StyledUnderline></StyledUnderline>
    </div>
  );
};

export default VideoItem;
