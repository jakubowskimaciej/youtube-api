import React from 'react';
import {
  Wrapper,
  StyledDetail,
  StyledIframe,
  StyledDescription,
} from './VideoDetail.styles';
import { Title } from '../../atoms/Title/Title';

const VideoDetail = ({ video }) => {
  if (!video) {
    return null;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Wrapper>
      <StyledIframe
        title="video player"
        src={videoSrc}
        frameBorder="0"
      ></StyledIframe>
      <StyledDetail>
        <Title>{video.snippet.title}</Title>
        <StyledDescription>{video.snippet.description}</StyledDescription>
      </StyledDetail>
    </Wrapper>
  );
};

export default VideoDetail;
