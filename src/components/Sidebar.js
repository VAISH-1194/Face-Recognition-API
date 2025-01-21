// import React from 'react';
// import { List, ListItem, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Sidebar = ({ isDarkMode }) => {
//   const sidebarStyle = {
//     position: 'fixed',
//     top: 55,
//     left: 0,
//     height: '100vh',
//     width: '200px',
//     backgroundColor: isDarkMode ? '#222223' : '#fafafa', // Dark mode and light mode sidebar color
//     borderRight: '1px solid #ddd',
//     padding: '10px 0',
//   };

//   const textColor = isDarkMode ? '#ffffff' : '#000000'; // Adjust text color for dark and light mode

//   return (
//     <div className="sidebar" style={sidebarStyle}>
//       <List>
//         <ListItem button component={Link} to="/">
//           <ListItemText primary="Home" style={{ color: textColor }} />
//         </ListItem>
//         <ListItem button component={Link} to="/age-gender">
//           <ListItemText primary="Age & Gender Detection" style={{ color: textColor }} />
//         </ListItem>
//         <ListItem button component={Link} to="/emotion">
//           <ListItemText primary="Emotion Recognition" style={{ color: textColor }} />
//         </ListItem>
//         <ListItem button component={Link} to="/landmark">
//           <ListItemText primary="Face Landmark Detection" style={{ color: textColor }} />
//         </ListItem>
//         <ListItem button component={Link} to="/match">
//           <ListItemText primary="Match Comparison & Detection" style={{ color: textColor }} />
//         </ListItem>
//       </List>
//     </div>
//   );
// };

// export default Sidebar;

















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
