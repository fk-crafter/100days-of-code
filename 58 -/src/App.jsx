import React from 'react';
import { Container, Typography, TextField, Box } from '@mui/material';
import VideoList from './VideoList';
import './index.css';

function App() {
  return (

    <Container maxWidth="sm">

    <Typography variant="h2" component="h1" gutterBottom className="title">
  ReactPlayer
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom className="subtitle">
  React selection
    </Typography>

    <Box className='text-input' sx={{ padding: '20px 0' }}>
        <TextField fullWidth label="Search"  variant="outlined" />
      </Box>

      <VideoList />
    </Container>
  );
}

export default App;