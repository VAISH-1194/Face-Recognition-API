import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AgeGenderDetection from './components/AgeGenderDetection';
import EmotionRecognition from './components/EmotionRecognition';
import FaceLandmarkDetection from './components/FaceLandmarkDetection';
import MatchComparison from './components/MatchComparison';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/age-gender" element={<AgeGenderDetection />} />
            <Route path="/emotion-recognition" element={<EmotionRecognition />} />
            <Route path="/face-landmark-detection" element={<FaceLandmarkDetection />} />
            <Route path="/match-comparison" element={<MatchComparison />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
