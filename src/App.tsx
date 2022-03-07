import React, {useState} from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Navigate, Routes, Route, Link } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import DashboardPage from 'pages/DashboardPage';
import CovidSearchPage from 'pages/CovidSearchPage';
import PlacesSearchPage from 'pages/PlacesSearchPage';
import WelcomePage from 'pages/WelcomePage';
import UserProvider from "./providers/UserProvider";

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
class WelcomePage extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div>handleSignIn</div>
        <Link to='/'>gobackToSignIn</Link>
         <div>handleSignUp</div>
         <Link to='/'>goToSignUp</Link>
         <div>handleForget</div>
         <Link to='/'>goToForget</Link>
      </div>
    );
  }
}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
      <Routes>
        <Route path='/' element={<Navigate to='/landing' />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route
          path='/covid-19-condition-search'
          element={<CovidSearchPage />} />
        <Route path='/places-search' element={<PlacesSearchPage />} />
        <Route path='/WelcomePage' element={<WelcomePage />} />
      </Routes>
      </UserProvider>
    </ThemeProvider>
  );
}


export default App;
