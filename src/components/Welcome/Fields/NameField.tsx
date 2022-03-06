import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';


export interface NameFieldProps {
  name: { text: string; err: string };
  setName: (props: { text: string; err: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

const NameField: React.FC<NameFieldProps> = ({
  name,
  setName,
  textFieldVariant = "filled",
  loading,
}) => {
  return (
    <FormControl
    margin="none"
    fullWidth
    error={Boolean(name?.err)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Name" : ""}
        label={textFieldVariant !== "outlined" && "Name"}
        error={Boolean(name?.err)}
        variant={textFieldVariant}
        value={name?.text}
        disabled={loading}
        onChange={(e) => {
          setName({ text: e.target.value, err: "" });
        }}
        type={"name"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <AccountBoxOutlinedIcon color={name?.err ? "error" : "action"} />
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{name?.err || " "}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(NameField);