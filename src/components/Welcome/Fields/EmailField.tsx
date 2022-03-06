import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export interface EmailFieldProps {
  email: { text: string; err: string };
  setEmail: (props: { text: string; err: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

const EmailField: React.FC<EmailFieldProps> = ({
  email,
  setEmail,
  textFieldVariant = "filled",
  loading,
}) => {
  return (
    <FormControl margin="none" fullWidth err={Boolean(email.err)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Email" : ""}
        label={textFieldVariant !== "outlined" && "Email"}
        err={Boolean(email.err)}
        variant={textFieldVariant}
        value={email.text}
        disabled={loading}
        onChange={(e) => {
          setEmail({ text: e.target.value, err: "" });
        }}
        type={"email"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <EmailOutlinedIcon color={email.err ? "error" : "action"} />
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{email.err || " "}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(EmailField);