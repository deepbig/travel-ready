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