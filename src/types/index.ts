export enum PageName {
    LANDING = '',
    WELCOME = 'WelcomePage',
    DASHBOARD = 'Dashboard',
    COVID_19_CONDITION_SEARCH = 'COVID-19 Condition Search',
    PLACES_BY_INTEREST_SEARCH = 'Places Search By Interests',
}

export type UserData = {
    id: string;
    name: string;
} | null;

export interface CovidResultData {
    country: string;
    confirmed: number;
    confirmed_daily: number;
    date: string;
    deaths: number;
    deaths_daily: number;
    population: number
};


export interface CountryData {
    code: string;
    code3: string;
    name: string;
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        guideline: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        guideline?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        guideline: true;
    }
}

/*export interface SignInProps {
  handleSignIn: (signInVars: { email: string; password: string }) => any;
  hideTabs?: boolean;
  handleSocial: {
    Google?: () => void;
  };
  textFieldVariant?: "outlined" | "filled" | "standard";
  emailValidator?: (value: string) => boolean;
  passwordValidator?: (value: string) => boolean;
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

export interface ForgetProps {
  handleForget: (forgetVars: { email: string }) => any;
  textFieldVariant?: "outlined" | "filled" | "standard";
  emailValidator?: (value: string) => boolean;
}*/



