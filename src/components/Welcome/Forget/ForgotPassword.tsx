import React, {useState} from 'react'
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import EmailField from "components/Welcome/Fields/EmailField";
import { Link } from '@reach/router';
import { auth } from 'db/index';
import {ForgetProps} from 'types';



interface NaviProps {
  gobackToSignIn: () => any;
}

const INITIAL = { text: "", error: "" };

const Forget: React.FC<ForgetProps & NaviProps> = ({
  gobackToSignIn,
  handleForget,
  textFieldVariant = "filled",
  emailValidator = (e) => !!e,
}) => {
  const [email, setEmail] = useState(INITIAL);
   const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event: any) => {
   const { name, value } = event.currentTarget;
           if (name === "userEmail") {
             setEmail(value);
           }
         };

 handleForget = (event: any) => {
        event.preventDefault();
        auth
        .sendPasswordResetEmail(email)
        .then(() => {
          setEmailHasBeenSent(true);
          setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
        })
        .catch(() => {
        //   setError("Error resetting password");
        console.log('Error resetting password')
        });
    };
  return (
    <>
      <IconButton aria-label="go back" onClick={gobackToSignIn}>
        <ArrowBackOutlinedIcon color="action" />
      </IconButton>
      <Box p={2} pb={6}>
        <Typography variant="h6" color="textSecondary" align="center">
          <b>Forget Your Password</b>
        </Typography>
        <br />
        <EmailField {...{ email, setEmail, textFieldVariant, loading }} />

        <FormControl margin="none" fullWidth>
          <Button
            onClick={handleSubmit}
            style={{ textTransform: "none" }}
            size="large"
            variant="contained"
            color="primary"
            fullWidth >
            Reset my Password
          </Button>
        </FormControl>
      </Box>
    </>
  );
};
export default Forget;