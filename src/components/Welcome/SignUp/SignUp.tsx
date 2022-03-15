import React, {useState} from 'react'
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Button from '@mui/material/Button';
import Typography from "@material-ui/core/Typography";
import PasswordField from "components/Welcome/Fields/PasswordField";
import NameField from "components/Welcome/Fields/NameField";
import EmailField from "components/Welcome/Fields/EmailField";
import {Link} from '@reach/router';
import { signInWithGoogle } from 'db/index';
import {auth, generateUserDocument} from 'db/index';

const INITIAL = { text: "", err: "" };

interface NaviProps {
  gobackToSignIn: () => any;
}

export interface SignUpProps {
  handleSignUp: (signUpVars: {
    name: string;
    email: string;
    password: string;
  }) => any;
  hideTabs?: boolean;
  textFieldVariant?: "outlined" | "filled" | "standard";
  emailValidator?: (value: string) => boolean;
  passwordValidator?: (value: string) => boolean;
}


//const INITIAL = { text: "", error: "" };

const SignUp: React.FC<SignUpProps & NaviProps> = ({
  handleSignUp,
  gobackToSignIn,
  textFieldVariant = "filled",
  hideTabs,
  emailValidator = (e) => !!e,
  passwordValidator = (e) => !!e,
}) => {
  const [name, setName] = React.useState(INITIAL);
   const [email, setEmail] = React.useState(INITIAL);
  const [loading, setLoading] = useState(false);
 const [password, setPassword] = React.useState(INITIAL);
  const [error, setError] = useState(null);

  const handleSubmit = async(event :any,
                                   email:{ text: string; err: string } ,
                                   password: { text: string; err: string }) =>{
                               event.preventDefault();
                               try{
                                   const {user} = await auth.createUserWithEmailAndPassword(email.text, password.text);
                                   generateUserDocument(user, {name});
                                   alert('Registration successfull')
                                 }
                                 catch(error){
                                   // setError('Error Signing up with email and password');
                                 }
                               setEmail(INITIAL);
                               setPassword(INITIAL);
                               setName(INITIAL);
                           }
     const onChangeHandler = (event: any) => {
             const { name, value } = event.currentTarget;
             if (name === "userEmail") {
               setEmail(value);
             } else if (name === "userPassword") {
               setPassword(value);
             } else if (name === "Name") {
               setName(value);
             }
           };

  return (
    <Box p={2}>
      <NameField {...{ name, setName, textFieldVariant, loading }} />
      <EmailField {...{ email, setEmail, textFieldVariant, loading }} />

      <PasswordField
        {...{ password, setPassword, textFieldVariant, loading }}
      />

      <FormControl margin="normal" fullWidth>
        <Button
          style={{ textTransform: "none" }}
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit} >
          Register
        </Button>
      </FormControl>
      {hideTabs && (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ cursor: "pointer" }}
          onClick={gobackToSignIn}  >
          Go back to Login
        </Typography>
      )}
    </Box>
  );
};
export default SignUp;