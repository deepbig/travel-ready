import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthChange } from 'db/repositories/auth';
import LandingPage from 'pages/LandingPage';
import DashboardPage from 'pages/DashboardPage';
import CovidSearchPage from 'pages/CovidSearchPage';
import PlacesSearchPage from 'pages/PlacesSearchPage';
import { useAppDispatch } from 'hooks';
import { setUser } from 'modules/user';
import { getLoggedInUser } from 'db/repositories/user';

function App() {
  const dispatch = useAppDispatch();
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

  const navigate = useNavigate();
  useEffect(() => {
    onAuthChange(async (user: any) => {
      if (user) {
        navigate('/dashboard');
        dispatch(setUser(await getLoggedInUser(user)));
      } else {
        navigate('/landing');
        dispatch(setUser(null));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route
          path='/covid-19-condition-search'
          element={<CovidSearchPage />}
        />
        <Route path='/places-search' element={<PlacesSearchPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
