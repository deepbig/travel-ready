import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PasswordField from "components/Welcome/Fields/PasswordField";
import NameField from "components/Welcome/Fields/NameField";
import EmailField from "components/Welcome/Fields/EmailField";
import checkValid from "util/CheckValid";
import {Link} from '@reach/router';
import { signInWithGoogle } from 'db/index';
import {auth, generateUserDocument} from 'db/index';
import {SignUpProps} from 'types';


interface NaviProps {
  gobackToSignIn: () => any;
}

const INITIAL = { text: "", error: "" };

const SignUp: React.FC<SignUpProps & NaviProps> = ({
  handleSignUp,
  gobackToSignIn,
  textFieldVariant = "filled",
  hideTabs,
  emailValidator = (e) => !!e,
  passwordValidator = (e) => !!e,
}) => {
  const [name, setName] = useState(INITIAL);
  const [email, setEmail] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(INITIAL);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: any, email: any, password: any) =>{
                               event.preventDefault();
                               try{
                                   const {user} = await auth.createUserWithEmailAndPassword(email, password);
                                   generateUserDocument(user, {displayName});
                                   alert('Registration successfull')
                                 }
                                 catch(error){
                                   // setError('Error Signing up with email and password');
                                 }
                               setEmail('');
                               setPassword('');
                               setDisplayName('');
                           }
     const onChangeHandler = (event: any) => {
             const { name, value } = event.currentTarget;
             if (name === "userEmail") {
               setEmail(value);
             } else if (name === "userPassword") {
               setPassword(value);
             } else if (name === "displayName") {
               setDisplayName(value);
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