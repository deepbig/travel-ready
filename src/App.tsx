import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { Navigate, Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'light' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Navigate to='/landing' />} />
        <Route path='/landing' element={<LandingPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
