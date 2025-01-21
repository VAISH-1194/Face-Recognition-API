import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ isDarkMode }) => {
  const sidebarStyle = {
    position: 'fixed',
    top: 55,
    left: 0,
    height: '100vh',
    width: '200px',
    backgroundColor: isDarkMode ? '#373738' : '#fafafa', // Updated dark mode and light mode sidebar color
    borderRight: '1px solid #ddd',
    padding: '10px 0',
  };

  const bgColor = isDarkMode ? '#373738' : '#fafafa';
  const textColor = isDarkMode ? '#ffffff' : '#000000'; // Updated text color for dark and light mode
  const hoverBackgroundColor = isDarkMode ? '#4a4a4b' : '#e0e0e0'; // Adjusted hover color for dark mode

  return (
    <div className="sidebar" style={sidebarStyle}>
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          sx={{
            color: textColor,
            backgroundColor : bgColor,
            '&:hover': {
              backgroundColor: hoverBackgroundColor,
            },
          }}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/age-gender"
          sx={{
            color: textColor,
            backgroundColor : bgColor,
            '&:hover': {
              backgroundColor: hoverBackgroundColor,
            },
          }}
        >
          <ListItemText primary="Age & Gender Detection" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/emotion"
          sx={{
            color: textColor,
            backgroundColor : bgColor,
            '&:hover': {
              backgroundColor: hoverBackgroundColor,
            },
          }}
        >
          <ListItemText primary="Emotion Recognition" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/landmark"
          sx={{
            color: textColor,
            backgroundColor : bgColor,
            '&:hover': {
              backgroundColor: hoverBackgroundColor,
            },
          }}
        >
          <ListItemText primary="Face Landmark Detection" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/match"
          sx={{
            color: textColor,
            backgroundColor : bgColor,
            '&:hover': {
              backgroundColor: hoverBackgroundColor,
            },
          }}
        >
          <ListItemText primary="Match Comparison & Detection" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
