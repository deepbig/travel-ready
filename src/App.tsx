import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Navigate, Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import DashboardPage from 'pages/DashboardPage';
import CovidSearchPage from 'pages/CovidSearchPage';
import PlacesSearchPage from 'pages/PlacesSearchPage';
import WelcomePage from 'pages/WelcomePage'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
    typography: {
      guideline: {
        color: 'gray',
        display: 'block',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Navigate to='/landing' />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route
          path='/covid-19-condition-search'
          element={<CovidSearchPage />} />
        <Route path='/places-search' element={<PlacesSearchPage />} />
        <Route path='/Welcome' element={<WelcomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
