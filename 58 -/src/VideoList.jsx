import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import YouTube from 'react-youtube';
import './index.css';

const videos = [
  { id: 'v=2ED8z80y5B0', title: 'Video 1', description: 'Description 1' },
  { id: 'v=2ED8z80y5B0', title: 'Video 2', description: 'Description 2' },
  { id: 'v=2ED8z80y5B0', title: 'Video 3', description: 'Description 3' },
  { id: 'v=2ED8z80y5B0', title: 'Video 4', description: 'Description 4' },
  { id: 'v=2ED8z80y5B0', title: 'Video 5', description: 'Description 5' },
  { id: 'v=2ED8z80y5B0', title: 'Video 6', description: 'Description 6' },
];

const VideoList = () => {
  const [likedVideos, setLikedVideos] = useState(Array(videos.length).fill(false));

  const handleLikeClick = (index) => {
    const newLikedVideos = [...likedVideos];
    newLikedVideos[index] = !newLikedVideos[index];
    setLikedVideos(newLikedVideos);
  };

  return (
    <Box>
      {videos.map((video, index) => (
        <Box key={video.id} sx={{ marginBottom: 4 }}>
          <YouTube className='ytb-video' videoId={video.id} opts={{ height: '300', width: '550' }} />

          <Typography variant="h6">{video.title}</Typography>

          <Typography variant="body1">{video.description}</Typography>

          <button onClick={() => handleLikeClick(index)} className={`like-button ${likedVideos[index] ? 'liked' : ''} like-button-border`}>
  <span role="img" aria-label="Heart" className={`heart ${likedVideos[index] ? 'filled' : ''}`}>❤</span>
</button>
        </Box>
      ))}
    </Box>
  );
};

export default VideoList;