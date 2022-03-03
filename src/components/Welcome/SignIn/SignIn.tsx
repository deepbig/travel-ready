import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EmailField from "Welcome/Fields/EmailField";
import PasswordField from "Welcome/Fields/PasswordField";
import checkValid from "util/checkvalid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

export interface SignInProps {
  handleSignIn: (signInVars: { email: string; password: string }) => any;
  hideTabs?: boolean;
  handleSocial: {
    Google?: () => void;
  };
  textFieldVariant?: "outlined" | "filled" | "standard";
  emailValidator?: (value: string) => boolean;
  passwordValidator?: (value: string) => boolean;
}
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
const provider = new GoogleAuthProvider();
.then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log({ credential, token, user });
        })
  const [email, setEmail] = React.useState<InitialType>(INITIAL);
  const [password, setPassword] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = React.useCallback(async () => {

    if (
      ![
        checkValid(email, setEmail, emailValidator),
        checkValid(password, setPassword, passwordValidator),
      ].every((v) => v)
    )
      return;
    setLoading(true);
    if (typeof handleSignIn !== "function") handleSignIn = () => {};
    await handleSignIn({ email: email.text, password: password.text });
    setLoading(false);
  }, [email, password]);

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