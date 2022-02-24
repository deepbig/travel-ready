export enum PageName {
    LANDING = '',
    SIGIN = '',
    DASHBOARD = 'Dashboard',
    COVID_19_CONDITION_SEARCH = 'COVID-19 Condition Search',
    PLACES_BY_INTEREST_SEARCH = 'Places Search By Interests',
}

export type UserData = {
    id: string;
    name: string;
} | null;

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