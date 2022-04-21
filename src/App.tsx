import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Backdrop, CircularProgress, CssBaseline } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthChange } from 'db/repositories/auth';
import LandingPage from 'pages/LandingPage';
import DashboardPage from 'pages/DashboardPage';
import CovidSearchPage from 'pages/CovidSearchPage';
import PlacesSearchPage from 'pages/PlacesSearchPage';
import ProfilePage from 'pages/ProfilePage';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setUser, reset as resetUser } from 'modules/user';
import { reset as resetTravelHistory } from 'modules/travelHistory';
import { reset as resetCountry } from 'modules/country';
import { reset as resetCovid } from 'modules/covid';
import { reset as resetPlacesSearch } from 'modules/placesSearch';
import { reset as resetBackdrop } from 'modules/backdrop';
import { getLoggedInUser } from 'db/repositories/user';
import { getBackdrop } from 'modules/backdrop';

function App() {
  const dispatch = useAppDispatch();
  const backdrop = useAppSelector(getBackdrop);
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
        dispatch(resetUser());
        dispatch(resetCountry());
        dispatch(resetCovid());
        dispatch(resetPlacesSearch());
        dispatch(resetTravelHistory());
        dispatch(resetBackdrop());
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
        <Route path='/profile' element={<ProfilePage />} />
        <Route
          path='/covid-19-condition-search'
          element={<CovidSearchPage />}
        />
        <Route path='/places-search' element={<PlacesSearchPage />} />
      </Routes>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1000 }}
        open={backdrop}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </ThemeProvider>
  );
}

export default App;
