import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import {PasswordFieldProps} from 'types';

/*export interface PasswordFieldProps {
  password: { text: string; err: string };
  setPassword: (props: { text: string; err: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}*/

const PasswordField: React.FC<PasswordFieldProps> = ({
  password,
  setPassword,
  textFieldVariant = "filled",
  loading,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl
    margin="none"
    fullWidth
    error={Boolean(password.err)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Password" : ""}
        label={textFieldVariant !== "outlined" && "Password"}
        error={Boolean(password.err)}
        variant={textFieldVariant}
        value={password.text}
        disabled={loading}
        onChange={(e) => {
          setPassword({ text: e.target.value, err: "" });
        }}
        type={!showPassword ? "password" : "text"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <LockOpenOutlinedIcon color={password.err ? "error" : "action"} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password" onClick={tooglePassword}>
                {React.createElement(
                  !showPassword ? VisibilityOffOutlinedIcon : VisibilityOutlinedIcon ,
                  {
                    color: password.err ? "error" : "action", }
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        />
      <FormHelperText>{password.err || " "}
      </FormHelperText>
    </FormControl>
  );
};
export default PasswordField;