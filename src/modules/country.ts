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
            code3:"GAB",
            name: "Gabon",
        },
        {
            code: "GB",
            code3:"GBR",
            name: "United Kingdom",
        },
        {
            code: "GD",
            code3:"GRD",
            name: "Grenada",
        },
        {
            code: "GE",
            code3:"GEO",
            name: "Georgia",
        },
        {
            code: "GF",
            code3:"GUF",
            name: "French Guiana",
        },
        {
            code: "GG",
            code3:"GGY",
            name: "Guernsey",
        },
        {
            code: "GH",
            code3:"GHA",
            name: "Ghana",
        },
        {
            code: "GI",
            code3:"GIB",
            name: "Gibraltar",
        },
        {
            code: "GL",
            code3:"GRL",
            name: "Greenland",
        },
        {
            code: "GM",
            code3:"GMB",
            name: "Gambia",
        },
        {
            code: "GN",
            code3:"GIN",
            name: "Guinea",
        },
        {
            code: "GP",
            code3:"GLP",
            name: "Guadeloupe",
        },
        {
            code: "GQ",
            code3:"GNQ",
            name: "Equatorial Guinea",
        },
        {
            code: "GR",
            code3:"GRC",
            name: "Greece",
        },
        {
            code: "GS",
            code3:"SGS",
            name: "South Georgia and the South Sandwich Islands",
        },
        {
            code: "GT",
            code3:"GTM",
            name: "Guatemala",
        },
        {
            code: "GU",
            code3:"GUM",
            name: "Guam",
        },
        {
            code: "GW",
            code3:"GNB",
            name: "Guinea-Bissau",
        },
        {
            code: "GY",
            code3:"GUY",
            name: "Guyana",
        },
        {
            code: "HK",
            code3:"HKG",
            name: "Hong Kong",
        },
        {
            code: "HM",
            code3:"HMD",
            name: "Heard Island and McDonald Islands",
        },
        {
            code: "HN",
            code3:"HND",
            name: "Honduras",
        },
        {
            code: "HR",
            code3:"HRV",
            name: "Croatia",
        },
        {
            code: "HT",
            code3:"HTI",
            name: "Haiti",
        },
        {
            code: "HU",
            code3:"HUN",
            name: "Hungary",
        },
        {
            code: "ID",
            code3:"IDN",
            name: "Indonesia",
        },
        {
            code: "IE",
            code3:"IRL",
            name: "Ireland",
        },
        {
            code: "IL",
            code3:"ISR",
            name: "Israel",
        },
        {
            code: "IM",
            code3:"IMN",
            name: "Isle of Man",
        },
        {
            code: "IN",
            code3:"IND",
            name: "India",
        },
        {
            code: "IO",
            code3:"IOT",
            name: "British Indian Ocean Territory",
        },
        {
            code: "IQ",
            code3:"IRQ",
            name: "Iraq",
        },
        {
            code: "IR",
            code3:"IRI",
            name: "Iran, Islamic Republic of",
        },
        {
            code: "IS",
            code3:"ISL",
            name: "Iceland",
        },
        {
            code: "IT",
            code3:"ITA",
            name: "Italy",
        },
        {
            code: "JE",
            code3:"JEY",
            name: "Jersey",
        },
        {
            code: "JM",
            code3:"JAM",
            name: "Jamaica",
        },
        {
            code: "JO",
            code3:"JOR",
            name: "Jordan",
        },
        {
            code: "JP",
            code3:"JPN",
            name: "Japan",
        },
        {
            code: "KE",
            code3:"KEN",
            name: "Kenya",
        },
        {
            code: "KG",
            code3:"KGZ",
            name: "Kyrgyzstan",
        },
        {
            code: "KH",
            code3:"KHM",
            name: "Cambodia",
        },
        {
            code: "KI",
            code3:"KIR",
            name: "Kiribati",
        },
        {
            code: "KM",
            code3:"COM",
            name: "Comoros",
        },
        {
            code: "KN",
            code3:"KNA",
            name: "Saint Kitts and Nevis",
        },
        {
            code: "KP",
            code3:"PRK",
            name: "Korea, Democratic People's Republic of",
        },
        {
            code: "KR",
            code3:"ROK",
            name: "Korea, Republic of",
        },
        {
            code: "KW",
            code3:"KWT",
            name: "Kuwait",
        },
        {
            code: "KY",
            code3:"CYM",
            name: "Cayman Islands",
        },
        {
            code: "KZ",
            code3:"KAZ",
            name: "Kazakhstan",
        },
        {
            code: "LA",
            code3:"LAO",
            name: "Lao People's Democratic Republic",
        },
        {
            code: "LB",
            code3:"LBN",
            name: "Lebanon",
        },
        {
            code: "LC",
            code3:"LCA",
            name: "Saint Lucia",
        },
        {
            code: "LI",
            code3:"LIE",
            name: "Liechtenstein",
        },
        {
            code: "LK",
            code3:"LKA",
            name: "Sri Lanka",
        },
        {
            code: "LR",
            code3:"LBR",
            name: "Liberia",
        },
        {
            code: "LS",
            code3:"LSO",
            name: "Lesotho",
        },
        {
            code: "LT",
            code3:"LTU",
            name: "Lithuania",
        },
        {
            code: "LU",
            code3:"LUX",
            name: "Luxembourg",
        },
        {
            code: "LV",
            code3:"LVA",
            name: "Latvia",
        },
        {
            code: "LY",
            code3:"LBY",
            name: "Libya",
        },
        {
            code: "MA",
            code3:"MAR",
            name: "Morocco",
        },
        {
            code: "MC",
            code3:"MCO",
            name: "Monaco",
        },
        {
            code: "MD",
            code3:"MDA",
            name: "Moldova, Republic of",
        },
        {
            code: "ME",
            code3:"MNE",
            name: "Montenegro",
        },
        {
            code: "MF",
            code3:"MAF",
            name: "Saint Martin (French part)",
        },
        {
            code: "MG",
            code3:"MDG",
            name: "Madagascar",
        },
        {
            code: "MH",
            code3:"MHL",
            name: "Marshall Islands",
        },
        {
            code: "MK",
            code3:"MKD",
            name: "Macedonia, the Former Yugoslav Republic of",
        },
        {
            code: "ML",
            code3:"MLI",
            name: "Mali",
        },
        {
            code: "MM",
            code3:"MMR",
            name: "Myanmar",
        },
        {
            code: "MN",
            code3:"MNG",
            name: "Mongolia",
        },
        {
            code: "MO",
            code3:"MAC",
            name: "Macao",
        },
        {
            code: "MP",
            code3:"MNP",
            name: "Northern Mariana Islands",
        },
        {
            code: "MQ",
            code3:"MTQ",
            name: "Martinique",
        },
        {
            code: "MR",
            code3:"MRT",
            name: "Mauritania",
        },
        {
            code: "MS",
            code3:"MSR",
            name: "Montserrat",
        },
        {
            code: "MT",
            code3:"MLT",
            name: "Malta",
        },
        {
            code: "MU",
            code3:"MUS",
            name: "Mauritius",
        },
        {
            code: "MV",
            code3:"MDV",
            name: "Maldives",
        },
        {
            code: "MW",
            code3:"MWI",
            name: "Malawi",
        },
        {
            code: "MX",
            code3:"MEX",
            name: "Mexico",
        },
        {
            code: "MY",
            code3:"MYS",
            name: "Malaysia",
        },
        {
            code: "MZ",
            code3:"MOZ",
            name: "Mozambique",
        },
        {
            code: "NA",
            code3:"NAM",
            name: "Namibia",
        },
        {
            code: "NC",
            code3:"NCL",
            name: "New Caledonia",
        },
        {
            code: "NE",
            code3:"NER",
            name: "Niger",
        },
        {
            code: "NF",
            code3:"NFK",
            name: "Norfolk Island",
        },
        {
            code: "NG",
            code3:"NGA",
            name: "Nigeria",
        },
        {
            code: "NI",
            code3:"NIC",
            name: "Nicaragua",
        },
        {
            code: "NL",
            code3:"NLD",
            name: "Netherlands",
        },
        {
            code: "NO",
            code3:"NOR",
            name: "Norway",
        },
        {
            code: "NP",
            code3:"NPL",
            name: "Nepal",
        },
        {
            code: "NR",
            code3:"NRU",
            name: "Nauru",
        },
        {
            code: "NU",
            code3:"NIU",
            name: "Niue",
        },
        {
            code: "NZ",
            code3:"NZL",
            name: "New Zealand",
        },
        {
            code: "OM",
            code3:"OMN",
            name: "Oman",
        },
        {
            code: "PA",
            code3:"PAN",
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
