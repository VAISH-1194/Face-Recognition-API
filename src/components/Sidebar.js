import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/age-gender">
          <ListItemText primary="Age & Gender Detection" />
        </ListItem>
        <ListItem button component={Link} to="/emotion">
          <ListItemText primary="Emotion Recognition" />
        </ListItem>
        <ListItem button component={Link} to="/landmark">
          <ListItemText primary="Face Landmark Detection" />
        </ListItem>
        <ListItem button component={Link} to="/match">
          <ListItemText primary="Match Comparison & Detection" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
