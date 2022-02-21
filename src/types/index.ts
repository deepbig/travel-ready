export enum PageName {
    LANDING = '',
    SIGIN = '',
    DASHBOARD = 'Dashboard',
    COVID_19_CONDITION_SEARCH = 'Travel During COVID-19',
    PLACES_BY_INTEREST_SEARCH = 'Places by Interest',
}

export type UserData = {
    id: string;
    name: string;
} | null;