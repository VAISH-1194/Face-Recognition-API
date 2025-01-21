// import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
// import { Brightness4, Brightness7 } from '@mui/icons-material';

// function Navbar({ toggleDarkMode, isDarkMode }) {
//   const navbarStyle = {
//     position: 'sticky',
//     top: 0,
//     zIndex: 1000,
//     backgroundColor: isDarkMode ? '#233861' : '#a2b5c7', // Dark mode and light mode colors
//   };

//   return (
//     <AppBar position="static" style={navbarStyle}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           Face Recognition App
//         </Typography>
//         <IconButton color="inherit" onClick={toggleDarkMode}>
//           {isDarkMode ? <Brightness7 /> : <Brightness4 />}
//         </IconButton>
//         <Switch checked={isDarkMode} onChange={toggleDarkMode} color="default" />
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;





















import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function Navbar({ toggleDarkMode, isDarkMode }) {
  const navbarStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: isDarkMode ? '#373738' : '#fafafa', // Dark mode and light mode navbar color
    color: isDarkMode ? '#ffffff' : '#000000', // Dark mode and light mode text color
  };

  return (
    <AppBar position="static" style={navbarStyle}>
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
