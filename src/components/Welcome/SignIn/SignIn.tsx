import React, {useState} from 'react'
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EmailField from "components/Welcome/Fields/EmailField";
import PasswordField from "components/Welcome/Fields/PasswordField";
import {Link} from '@reach/router';
import {auth, signInWithGoogle} from "db/index";
import DashboardPage from 'pages/DashboardPage';
import {SignInProps} from 'types';


type InitialType = { text: string; error: string };

const Social = {
  Google: {
    color: "red",
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
        width={20}
        height={20} />
    ),
  },
};


interface NaviProps {
  goToForget: () => any;
  goToSignUp: () => any;
}

const INITIAL: InitialType = { text: "", error: "" };

const SignIn: React.FC<SignInProps & NaviProps> = ({
  goToForget,
  handleSignIn,
  goToSignUp,
  handleSocial,
  hideTabs = false,
  textFieldVariant = "filled",
  emailValidator = (e) => !!e,
  passwordValidator = (e) => !!e,
}) => {

  const [email, setEmail] = useState<InitialType>(INITIAL);
  const [password, setPassword] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit =  (event: any) => {
                               const {name, value} = event.currentTarget;

                               if(name === 'userEmail')
                                   setEmail(value);
                               else if(name === 'userPassword')
                                   setPassword(value);
                           }
       const signInWithEmailAndPasswordHandler = (event :any, email: any, password: any) => {
             event.preventDefault();
             auth.signInWithEmailAndPassword(email, password)
             .then(() =>{
                 alert('Success')
             })
             .catch(error: any => {
                 if (error.code === 'auth/email-already-in-use') {
                   console.log('That email address is already in use!');
                 }
                 if (error.code === 'auth/invalid-email') {
                       console.log('That email address is invalid!');
                     }

                 console.error(error);
               });
         }

  return (
    <Box p={2}>
      <EmailField {...{ email, setEmail, textFieldVariant, loading }} />
      <PasswordField
        {...{ password, setPassword, textFieldVariant, loading }} />

      <Typography
        variant="body2"
        color="textSecondary"
        align="right"
        style={{ cursor: "pointer" }}
        onClick={goToForget}
      >
        Forget Password?
      </Typography>

      <FormControl margin="normal" fullWidth>
        <Button
          onClick={handleSubmit}
          style={{ textTransform: "none" }}
          size="large"
          disabled={loading}
          variant="contained"
          color="primary"
          fullWidth >
          Sign In
        </Button>
      </FormControl>

      {Object.values(handleSocial).some((v) => typeof v === "function") && (
        <Typography variant="subtitle2" color="textSecondary" align="center">
          or continue with
        </Typography>
      )}
      <Box display="flex" justifyContent="center">
        {Object.entries(handleSocial).map(([key, handler]) => {
          if (
            typeof handler !== "function" ||
            !Social[key] ||
            !Social[key].icon
          )
            return null;
          return (
            <IconButton
              key={key}
              aria-label={`${key} login button`}
              onClick={handler}>
              {React.createElement(Social[key].icon, {
                htmlColor: Social[key].color,
              })}
            </IconButton>
          );
        })}
      </Box>
      {hideTabs && (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ cursor: "pointer" }}
          onClick={goToSignUp} >
          No Account? Create Now
        </Typography>
      )}
    </Box>
  );
};
export default SignIn;