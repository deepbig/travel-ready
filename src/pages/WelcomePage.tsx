import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "components/Welcome/SignIn/SignIn";
import SignUp from "components/Welcome/SignUp/SignUp";
import ProfilePage from "./DashboardPage";
import PasswordReset from "components/Welcome/Forget/ForgotPassword";
import { Box, Toolbar } from '@mui/material';
import NavBar from 'components/navBar/NavBar';
import { PageName } from 'types';
import { Container, Grid, Paper } from '@mui/material';
import Typography from "@material-ui/core/Typography";
import TabAuth, { AuthProps } from "components/Welcome/Tab_Between/TabBetween";

const WelcomePage = () => {
  let user = null;
  return (
    <Box p={9}>
   <NavBar selectedName={PageName.WELCOME} />
      <Container maxWidth="md">
 user ?
        <WelcomePage path="Welcome"/>
        :
        <Routes>
        <SignUp path="signUp"/>
        <SignIn path="/"/>
        <PasswordReset path="passwordReset"/>
    </Routes>
        <Box boxShadow="0px 0px 10px 3px #ddd" p={3} width="100%" height="100%">
          <Grid container spacing={1}>
            <Grid item xs={false} md={7}>
              <Typography variant="h4" color="textSecondary">
                <b>Welcome</b>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <TabAuth {...props} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default WelcomePage;