import * as React from "react";
import TabAuth, { AuthProps } from "components/Welcome/Tab_Between/TabBetween";
import NavBar from 'components/navBar/NavBar';
import { PageName } from 'types';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import SignIn, {SignInProps}  from "components/Welcome/SignIn/SignIn";
import SignUp, {SignUpProps} from "components/Welcome/SignUp/SignUp";
import Forget, {ForgetProps}  from "components/Welcome/Forget/ForgotPassword";


interface WelcomePageProps extends AuthProps {
    width: boolean;
}
const WelcomePage: React.FC<WelcomePageProps> = ({ ...props }) => {
//export default function WelcomePage({handleSignIn}: {handleSignIn: SignInProps}) {
  return (
    <Box p={9}>
     <NavBar selectedName={PageName.WELCOME} />
      <Container maxWidth="md">
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