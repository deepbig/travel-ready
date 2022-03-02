import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { CountryData } from 'types';

export interface CountryState {
    countryList: CountryData[];
}

const initialState: CountryState = {
    countryList: [
        {
            code: "AD",
            code3: "AND",
            name: "Andorra",
        },
        {
            code: "AE",
            code3:"UAE",
            name: "United Arab Emirates",
        },
        {
            code: "AF",
            code3:"AFG",
            name: "Afghanistan",
        },
        {
            code: "AG",
            code3: "ATG",
            name: "Antigua and Barbuda",
        },
        {
            code: "AI",
            code3:"AIA",
            name: "Anguilla",
        },
        {
            code: "AL",
            code3:"ALB",
            name: "Albania",
        },
        {
            code: "AM",
            code3:"ARM",
            name: "Armenia",
        },
        {
            code: "AO",
            code3:"AGO",
            name: "Angola",
        },
        {
            code: "AQ",
            code3:"ATA",
            name: "Antarctica",
        },
        {
            code: "AR",
            code3:"ARG",
            name: "Argentina",
        },
        {
            code: "AS",
            code3:"ASM",
            name: "American Samoa",
        },
        {
            code: "AT",
            code3:"AUT",
            name: "Austria",
        },
        {
            code: "AU",
            code3:"AUS",
            name: "Australia",
        },
        {
            code: "AW",
            code3:"ABW",
            name: "Aruba",
        },
        {
            code: "AX",
            code3:"ALA",
            name: "Alland Islands",
        },
        {
            code: "AZ",
            code3:"AZE",
            name: "Azerbaijan",
        },
        {
            code: "BA",
            code3:"BIH",
            name: "Bosnia and Herzegovina",
        },
        {
            code: "BB",
            code3:"BRB",
            name: "Barbados",
        },
        {
            code: "BD",
            code3:"BGD",
            name: "Bangladesh",
        },
        {
            code: "BE",
            code3:"BEL",
            name: "Belgium",
        },
        {
            code: "BF",
            code3:"BFA",
            name: "Burkina Faso",
        },
        {
            code: "BG",
            code3:"BGR",
            name: "Bulgaria",
        },
        {
            code: "BH",
            code3:"BHR",
            name: "Bahrain",
        },
        {
            code: "BI",
            code3:"BDI",
            name: "Burundi",
        },
        {
            code: "BJ",
            code3:"BEN",
            name: "Benin",
        },
        {
            code: "BL",
            code3:"BLM",
            name: "Saint Barthelemy",
        },
        {
            code: "BM",
            code3:"BMU",
            name: "Bermuda",
        },
        {
            code: "BN",
            code3:"BRN",
            name: "Brunei Darussalam",
        },
        {
            code: "BO",
            code3:"BOL",
            name: "Bolivia",
        },
        {
            code: "BR",
            code3:"BRA",
            name: "Brazil",
        },
        {
            code: "BS",
            code3:"BHS",
            name: "Bahamas",
        },
        {
            code: "BT",
            code3:"BTN",
            name: "Bhutan",
        },
        {
            code: "BV",
            code3:"BVT",
            name: "Bouvet Island",
        },
        {
            code: "BW",
            code3:"BWA",
            name: "Botswana",
        },
        {
            code: "BY",
            code: "BLR",
            name: "Belarus",
        },
        {
            code: "BZ",
            code3:"BLZ",
            name: "Belize",
        },
        {
            code: "CA",
            code3:"CAN",
            name: "Canada",
        },
        {
            code: "CC",
            code3:"CCK",
            name: "Cocos (Keeling) Islands",
        },
        {
            code: "CD",
            code3:"COD",
            name: "Congo, Democratic Republic of the",
        },
        {
            code: "CF",
            code3:"CAF",
            name: "Central African Republic",
        },
        {
            code: "CG",
            code3:"COG",
            name: "Congo, Republic of the",
        },
        {
            code: "CH",
            code3:"CHE",
            name: "Switzerland",
        },
        {
            code: "CI",
            code3:"CIV",
            name: "Cote d'Ivoire",
        },
        {
            code: "CK",
            code3:"COK",
            name: "Cook Islands",
        },
        {
            code: "CL",
            code3:"CHL",
            name: "Chile",
        },
        {
            code: "CM",
            code3:"CMR",
            name: "Cameroon",
        },
        {
            code: "CN",
            code3:"CHN",
            name: "China",
        },
        {
            code: "CO",
            code3:"COL",
            name: "Colombia",
        },
        {
            code: "CR",
            code3:"CRI",
            name: "Costa Rica",
        },
        {
            code: "CU",
            code3:"CUB",
            name: "Cuba",
        },
        {
            code: "CV",
            code3:"CPV",
            name: "Cape Verde",
        },
        {
            code: "CW",
            code3:"CUW",
            name: "Curacao",
        },
        {
            code: "CX",
            code3:"CXR",
            name: "Christmas Island",
        },
        {
            code: "CY",
            code3:"CYP",
            name: "Cyprus",
        },
        {
            code: "CZ",
            code3:"CZE",
            name: "Czech Republic",
        },
        {
            code: "DE",
            code3:"DEU",
            name: "Germany",
        },
        {
            code: "DJ",
            code3:"DJI",
            name: "Djibouti",
        },
        {
            code: "DK",
            code3:"DNK",
            name: "Denmark",
        },
        {
            code: "DM",
            code3:"DMA",
            name: "Dominica",
        },
        {
            code: "DO",
            code3:"DOM",
            name: "Dominican Republic",
        },
        {
            code: "DZ",
            code3:"DZA",
            name: "Algeria",
        },
        {
            code: "EC",
            code3:"ECU",
            name: "Ecuador",
        },
        {
            code: "EE",
            code3:"EST",
            name: "Estonia",
        },
        {
            code: "EG",
            code3:"EGY",
            name: "Egypt",
        },
        {
            code: "EH",
            code3:"ESH",
            name: "Western Sahara",
        },
        {
            code: "ER",
            code3:"ERI",
            name: "Eritrea",
        },
        {
            code: "ES",
            code3:"ESP",
            name: "Spain",
        },
        {
            code: "ET",
            code3:"ETH",
            name: "Ethiopia",
        },
        {
            code: "FI",
            code3:"FIN",
            name: "Finland",
        },
        {
            code: "FJ",
            code3:"FJI",
            name: "Fiji",
        },
        {
            code: "FK",
            code3:"FLK",
            name: "Falkland Islands (Malvinas)",
        },
        {
            code: "FM",
            code3:"FSM",
            name: "Micronesia, Federated States of",
        },
        {
            code: "FO",
            code3:"FRO",
            name: "Faroe Islands",
        },
        {
            code: "FR",
            code3:"FRA",
            name: "France",
        },
        {
            code: "GA",
            name: "Gabon",
        },
        {
            code: "GB",
            name: "United Kingdom",
        },
        {
            code: "GD",
            name: "Grenada",
        },
        {
            code: "GE",
            name: "Georgia",
        },
        {
            code: "GF",
            name: "French Guiana",
        },
        {
            code: "GG",
            name: "Guernsey",
        },
        {
            code: "GH",
            name: "Ghana",
        },
        {
            code: "GI",
            name: "Gibraltar",
        },
        {
            code: "GL",
            name: "Greenland",
        },
        {
            code: "GM",
            name: "Gambia",
        },
        {
            code: "GN",
            name: "Guinea",
        },
        {
            code: "GP",
            name: "Guadeloupe",
        },
        {
            code: "GQ",
            name: "Equatorial Guinea",
        },
        {
            code: "GR",
            name: "Greece",
        },
        {
            code: "GS",
            name: "South Georgia and the South Sandwich Islands",
        },
        {
            code: "GT",
            name: "Guatemala",
        },
        {
            code: "GU",
            name: "Guam",
        },
        {
            code: "GW",
            name: "Guinea-Bissau",
        },
        {
            code: "GY",
            name: "Guyana",
        },
        {
            code: "HK",
            name: "Hong Kong",
        },
        {
            code: "HM",
            name: "Heard Island and McDonald Islands",
        },
        {
            code: "HN",
            name: "Honduras",
        },
        {
            code: "HR",
            name: "Croatia",
        },
        {
            code: "HT",
            name: "Haiti",
        },
        {
            code: "HU",
            name: "Hungary",
        },
        {
            code: "ID",
            name: "Indonesia",
        },
        {
            code: "IE",
            name: "Ireland",
        },
        {
            code: "IL",
            name: "Israel",
        },
        {
            code: "IM",
            name: "Isle of Man",
        },
        {
            code: "IN",
            name: "India",
        },
        {
            code: "IO",
            name: "British Indian Ocean Territory",
        },
        {
            code: "IQ",
            name: "Iraq",
        },
        {
            code: "IR",
            name: "Iran, Islamic Republic of",
        },
        {
            code: "IS",
            name: "Iceland",
        },
        {
            code: "IT",
            name: "Italy",
        },
        {
            code: "JE",
            name: "Jersey",
        },
        {
            code: "JM",
            name: "Jamaica",
        },
        {
            code: "JO",
            name: "Jordan",
        },
        {
            code: "JP",
            name: "Japan",
        },
        {
            code: "KE",
            name: "Kenya",
        },
        {
            code: "KG",
            name: "Kyrgyzstan",
        },
        {
            code: "KH",
            name: "Cambodia",
        },
        {
            code: "KI",
            name: "Kiribati",
        },
        {
            code: "KM",
            name: "Comoros",
        },
        {
            code: "KN",
            name: "Saint Kitts and Nevis",
        },
        {
            code: "KP",
            name: "Korea, Democratic People's Republic of",
        },
        {
            code: "KR",
            name: "Korea, Republic of",
        },
        {
            code: "KW",
            name: "Kuwait",
        },
        {
            code: "KY",
            name: "Cayman Islands",
        },
        {
            code: "KZ",
            name: "Kazakhstan",
        },
        {
            code: "LA",
            name: "Lao People's Democratic Republic",
        },
        {
            code: "LB",
            name: "Lebanon",
        },
        {
            code: "LC",
            name: "Saint Lucia",
        },
        {
            code: "LI",
            name: "Liechtenstein",
        },
        {
            code: "LK",
            name: "Sri Lanka",
        },
        {
            code: "LR",
            name: "Liberia",
        },
        {
            code: "LS",
            name: "Lesotho",
        },
        {
            code: "LT",
            name: "Lithuania",
        },
        {
            code: "LU",
            name: "Luxembourg",
        },
        {
            code: "LV",
            name: "Latvia",
        },
        {
            code: "LY",
            name: "Libya",
        },
        {
            code: "MA",
            name: "Morocco",
        },
        {
            code: "MC",
            name: "Monaco",
        },
        {
            code: "MD",
            name: "Moldova, Republic of",
        },
        {
            code: "ME",
            name: "Montenegro",
        },
        {
            code: "MF",
            name: "Saint Martin (French part)",
        },
        {
            code: "MG",
            name: "Madagascar",
        },
        {
            code: "MH",
            name: "Marshall Islands",
        },
        {
            code: "MK",
            name: "Macedonia, the Former Yugoslav Republic of",
        },
        {
            code: "ML",
            name: "Mali",
        },
        {
            code: "MM",
            name: "Myanmar",
        },
        {
            code: "MN",
            name: "Mongolia",
        },
        {
            code: "MO",
            name: "Macao",
        },
        {
            code: "MP",
            name: "Northern Mariana Islands",
        },
        {
            code: "MQ",
            name: "Martinique",
        },
        {
            code: "MR",
            name: "Mauritania",
        },
        {
            code: "MS",
            name: "Montserrat",
        },
        {
            code: "MT",
            name: "Malta",
        },
        {
            code: "MU",
            name: "Mauritius",
        },
        {
            code: "MV",
            name: "Maldives",
        },
        {
            code: "MW",
            name: "Malawi",
        },
        {
            code: "MX",
            name: "Mexico",
        },
        {
            code: "MY",
            name: "Malaysia",
        },
        {
            code: "MZ",
            name: "Mozambique",
        },
        {
            code: "NA",
            name: "Namibia",
        },
        {
            code: "NC",
            name: "New Caledonia",
        },
        {
            code: "NE",
            name: "Niger",
        },
        {
            code: "NF",
            name: "Norfolk Island",
        },
        {
            code: "NG",
            name: "Nigeria",
        },
        {
            code: "NI",
            name: "Nicaragua",
        },
        {
            code: "NL",
            name: "Netherlands",
        },
        {
            code: "NO",
            name: "Norway",
        },
        {
            code: "NP",
            name: "Nepal",
        },
        {
            code: "NR",
            name: "Nauru",
        },
        {
            code: "NU",
            name: "Niue",
        },
        {
            code: "NZ",
            name: "New Zealand",
        },
        {
            code: "OM",
            name: "Oman",
        },
        {
            code: "PA",
            name: "Panama",
        },
        {
            code: "PE",
            name: "Peru",
        },
        {
            code: "PF",
            name: "French Polynesia",
        },
        {
            code: "PG",
            name: "Papua New Guinea",
        },
        {
            code: "PH",
            name: "Philippines",
        },
        {
            code: "PK",
            name: "Pakistan",
        },
        {
            code: "PL",
            name: "Poland",
        },
        {
            code: "PM",
            name: "Saint Pierre and Miquelon",
        },
        {
            code: "PN",
            name: "Pitcairn",
        },
        {
            code: "PR",
            name: "Puerto Rico",
        },
        {
            code: "PS",
            name: "Palestine, State of",
        },
        {
            code: "PT",
            name: "Portugal",
        },
        {
            code: "PW",
            name: "Palau",
        },
        {
            code: "PY",
            name: "Paraguay",
        },
        {
            code: "QA",
            name: "Qatar",
        },
        {
            code: "RE",
            name: "Reunion",
        },
        {
            code: "RO",
            name: "Romania",
        },
        {
            code: "RS",
            name: "Serbia",
        },
        {
            code: "RU",
            name: "Russian Federation",
        },
        {
            code: "RW",
            name: "Rwanda",
        },
        {
            code: "SA",
            name: "Saudi Arabia",
        },
        {
            code: "SB",
            name: "Solomon Islands",
        },
        {
            code: "SC",
            name: "Seychelles",
        },
        {
            code: "SD",
            name: "Sudan",
        },
        {
            code: "SE",
            name: "Sweden",
        },
        {
            code: "SG",
            name: "Singapore",
        },
        {
            code: "SH",
            name: "Saint Helena",
        },
        {
            code: "SI",
            name: "Slovenia",
        },
        {
            code: "SJ",
            name: "Svalbard and Jan Mayen",
        },
        {
            code: "SK",
            name: "Slovakia",
        },
        {
            code: "SL",
            name: "Sierra Leone",
        },
        {
            code: "SM",
            name: "San Marino",
        },
        {
            code: "SN",
            name: "Senegal",
        },
        {
            code: "SO",
            name: "Somalia",
        },
        {
            code: "SR",
            name: "Suriname",
        },
        {
            code: "SS",
            name: "South Sudan",
        },
        {
            code: "ST",
            name: "Sao Tome and Principe",
        },
        {
            code: "SV",
            name: "El Salvador",
        },
        {
            code: "SX",
            name: "Sint Maarten (Dutch part)",
        },
        {
            code: "SY",
            name: "Syrian Arab Republic",
        },
        {
            code: "SZ",
            name: "Swaziland",
        },
        {
            code: "TC",
            name: "Turks and Caicos Islands",
        },
        {
            code: "TD",
            name: "Chad",
        },
        {
            code: "TF",
            name: "French Southern Territories",
        },
        {
            code: "TG",
            name: "Togo",
        },
        {
            code: "TH",
            name: "Thailand",
        },
        {
            code: "TJ",
            name: "Tajikistan",
        },
        {
            code: "TK",
            name: "Tokelau",
        },
        {
            code: "TL",
            name: "Timor-Leste",
        },
        {
            code: "TM",
            name: "Turkmenistan",
        },
        {
            code: "TN",
            name: "Tunisia",
        },
        {
            code: "TO",
            name: "Tonga",
        },
        {
            code: "TR",
            name: "Turkey",
        },
        {
            code: "TT",
            name: "Trinidad and Tobago",
        },
        {
            code: "TV",
            name: "Tuvalu",
        },
        {
            code: "TW",
            name: "Taiwan, Province of China",
        },
        {
            code: "TZ",
            name: "United Republic of Tanzania",
        },
        {
            code: "UA",
            name: "Ukraine",
        },
        {
            code: "UG",
            name: "Uganda",
        },
        {
            code: "US",
            name: "United States",
        },
        {
            code: "UY",
            name: "Uruguay",
        },
        {
            code: "UZ",
            name: "Uzbekistan",
        },
        {
            code: "VA",
            name: "Holy See (Vatican City State)",
        },
        {
            code: "VC",
            name: "Saint Vincent and the Grenadines",
        },
        {
            code: "VE",
            name: "Venezuela",
        },
        {
            code: "VG",
            name: "British Virgin Islands",
        },
        {
            code: "VI",
            name: "US Virgin Islands",
        },
        {
            code: "VN",
            name: "Vietnam",
        },
        {
            code: "VU",
            name: "Vanuatu",
        },
        {
            code: "WF",
            name: "Wallis and Futuna",
        },
        {
            code: "WS",
            name: "Samoa",
        },
        {
            code: "XK",
            name: "Kosovo",
        },
        {
            code: "YE",
            name: "Yemen",
        },
        {
            code: "YT",
            name: "Mayotte",
        },
        {
            code: "ZA",
            name: "South Africa",
        },
        {
            code: "ZM",
            name: "Zambia",
        },
        {
            code: "ZW",
            name: "Zimbabwe",
        },

    ]
};

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountryList: (state, action: PayloadAction<CountryData[]>) => {
            state.countryList = action.payload;
        }
    }
})

export const { setCountryList } = countrySlice.actions;

export const getCountries = (state: RootState) => state.country.countryList;

export default countrySlice.reducer;
