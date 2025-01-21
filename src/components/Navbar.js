import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function Navbar({ toggleDarkMode, isDarkMode }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Face Recognition App
        </Typography>
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Switch checked={isDarkMode} onChange={toggleDarkMode} color="default" />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
