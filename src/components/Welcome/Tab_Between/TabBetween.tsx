import * as React from "react";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import SignIn, { SignInProps } from "components/Welcome/SignIn/SignIn";
import SignUp, { SignUpProps } from "components/Welcome/SignUp/SignUp";
import Forget, { ForgetProps } from "components/Welcome/Forget/ForgotPassword";
import Typography from "@material-ui/core/Typography";

export interface AuthProps extends SignInProps, SignUpProps, ForgetProps {
  hideTabs?: boolean;
  logoComponent?: React.ReactChildren;
  logoName?: string;
}

const App: React.FC<AuthProps> = ({
  hideTabs,
  logoComponent,
  logoName,
  ...props
}) => {
  const [authIndex, setAuthIndex] = React.useState(0);

  const tabChange = (event: React.ChangeEvent, tabValue: number): void => {
    event.preventDefault();
    setAuthIndex(tabValue);
  };
  const goToForget = () => {
    setAuthIndex(2);
  };
  const goToSignUp = () => {
    setAuthIndex(1);
  };
  const gobackToSignIn = () => {
    setAuthIndex(0);
  };
  if (authIndex === 2) return <Forget {...{ ...props, gobackToSignIn }} />;
  return (
    <>
      <Box display="flex" justifyContent="center">
        {logoComponent ||
          (logoName && (
            <Typography align="center" variant="h5" color="textPrimary">
              {logoName}
            </Typography>
          ))}
      </Box>
      {!hideTabs && (
        <Tabs
          variant="fullWidth"
          value={authIndex}
          centered
          onChange={tabChange}
          aria-label="auth tabs"
        >
          <Tab label="Login" tabIndex={0} />
          <Tab label="Register" tabIndex={1} />
        </Tabs>
      )}
      {(() => {
        switch (authIndex) {
          case 0:
            return (
              <SignIn {...{ ...props, goToForget, hideTabs, goToSignUp }} />
            );
          case 1:
            return <SignUp {...{ ...props, hideTabs, gobackToSignIn }} />;
          default:
            return null;
        }
      })()
      }
    </>
  );
};
export default App;