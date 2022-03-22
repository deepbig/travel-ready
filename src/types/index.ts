export enum PageName {
    LANDING = '',
    SIGIN = '',
    DASHBOARD = 'Dashboard',
    COVID_19_CONDITION_SEARCH = 'COVID-19 Condition Search',
    PLACES_BY_INTEREST_SEARCH = 'Places Search By Interests',
}

export type UserData = {
    displayName: string,
    email: string,
    photoURL: string,
    Budget: number,
    countries_visited: string[],
    places_visited: string[],
    tags: string[],
    travels: number,
    countries_plan: string[],
    places_plan: string[],
} | null;

export interface CovidResultData {
    country: string;
    confirmed: number;
    confirmed_daily: number;
    date: string;
    deaths: number;
    deaths_daily: number;
    population: number;
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