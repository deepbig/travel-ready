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
            code3: "ARE",
            name: "United Arab Emirates",
        },
        {
            code: "AF",
            code3: "AFG",
            name: "Afghanistan",
        },
        {
            code: "AG",
            code3: "ATG",
            name: "Antigua and Barbuda",
        },
        {
            code: "AI",
            code3: "AIA",
            name: "Anguilla",
        },
        {
            code: "AL",
            code3: "ALB",
            name: "Albania",
        },
        {
            code: "AM",
            code3: "ARM",
            name: "Armenia",
        },
        {
            code: "AO",
            code3: "AGO",
            name: "Angola",
        },
        {
            code: "AQ",
            code3: "ATA",
            name: "Antarctica",
        },
        {
            code: "AR",
            code3: "ARG",
            name: "Argentina",
        },
        {
            code: "AS",
            code3: "ASM",
            name: "American Samoa",
        },
        {
            code: "AT",
            code3: "AUT",
            name: "Austria",
        },
        {
            code: "AU",
            code3: "AUS",
            name: "Australia",
        },
        {
            code: "AW",
            code3: "ABW",
            name: "Aruba",
        },
        {
            code: "AX",
            code3: "ALA",
            name: "Alland Islands",
        },
        {
            code: "AZ",
            code3: "AZE",
            name: "Azerbaijan",
        },
        {
            code: "BA",
            code3: "BIH",
            name: "Bosnia and Herzegovina",
        },
        {
            code: "BB",
            code3: "BRB",
            name: "Barbados",
        },
        {
            code: "BD",
            code3: "BGD",
            name: "Bangladesh",
        },
        {
            code: "BE",
            code3: "BEL",
            name: "Belgium",
        },
        {
            code: "BF",
            code3: "BFA",
            name: "Burkina Faso",
        },
        {
            code: "BG",
            code3: "BGR",
            name: "Bulgaria",
        },
        {
            code: "BH",
            code3: "BHR",
            name: "Bahrain",
        },
        {
            code: "BI",
            code3: "BDI",
            name: "Burundi",
        },
        {
            code: "BJ",
            code3: "BEN",
            name: "Benin",
        },
        {
            code: "BL",
            code3: "BLM",
            name: "Saint Barthelemy",
        },
        {
            code: "BM",
            code3: "BMU",
            name: "Bermuda",
        },
        {
            code: "BN",
            code3: "BRN",
            name: "Brunei Darussalam",
        },
        {
            code: "BO",
            code3: "BOL",
            name: "Bolivia",
        },
        {
            code: "BR",
            code3: "BRA",
            name: "Brazil",
        },
        {
            code: "BS",
            code3: "BHS",
            name: "Bahamas",
        },
        {
            code: "BT",
            code3: "BTN",
            name: "Bhutan",
        },
        {
            code: "BV",
            code3: "BVT",
            name: "Bouvet Island",
        },
        {
            code: "BW",
            code3: "BWA",
            name: "Botswana",
        },
        {
            code: "BY",
            code3: "BLR",
            name: "Belarus",
        },
        {
            code: "BZ",
            code3: "BLZ",
            name: "Belize",
        },
        {
            code: "CA",
            code3: "CAN",
            name: "Canada",
        },
        {
            code: "CC",
            code3: "CCK",
            name: "Cocos (Keeling) Islands",
        },
        {
            code: "CD",
            code3: "COD",
            name: "Congo, Democratic Republic of the",
        },
        {
            code: "CF",
            code3: "CAF",
            name: "Central African Republic",
        },
        {
            code: "CG",
            code3: "COG",
            name: "Congo, Republic of the",
        },
        {
            code: "CH",
            code3: "CHE",
            name: "Switzerland",
        },
        {
            code: "CI",
            code3: "CIV",
            name: "Cote d'Ivoire",
        },
        {
            code: "CK",
            code3: "COK",
            name: "Cook Islands",
        },
        {
            code: "CL",
            code3: "CHL",
            name: "Chile",
        },
        {
            code: "CM",
            code3: "CMR",
            name: "Cameroon",
        },
        {
            code: "CN",
            code3: "CHN",
            name: "China",
        },
        {
            code: "CO",
            code3: "COL",
            name: "Colombia",
        },
        {
            code: "CR",
            code3: "CRI",
            name: "Costa Rica",
        },
        {
            code: "CU",
            code3: "CUB",
            name: "Cuba",
        },
        {
            code: "CV",
            code3: "CPV",
            name: "Cape Verde",
        },
        {
            code: "CW",
            code3: "CUW",
            name: "Curacao",
        },
        {
            code: "CX",
            code3: "CXR",
            name: "Christmas Island",
        },
        {
            code: "CY",
            code3: "CYP",
            name: "Cyprus",
        },
        {
            code: "CZ",
            code3: "CZE",
            name: "Czech Republic",
        },
        {
            code: "DE",
            code3: "DEU",
            name: "Germany",
        },
        {
            code: "DJ",
            code3: "DJI",
            name: "Djibouti",
        },
        {
            code: "DK",
            code3: "DNK",
            name: "Denmark",
        },
        {
            code: "DM",
            code3: "DMA",
            name: "Dominica",
        },
        {
            code: "DO",
            code3: "DOM",
            name: "Dominican Republic",
        },
        {
            code: "DZ",
            code3: "DZA",
            name: "Algeria",
        },
        {
            code: "EC",
            code3: "ECU",
            name: "Ecuador",
        },
        {
            code: "EE",
            code3: "EST",
            name: "Estonia",
        },
        {
            code: "EG",
            code3: "EGY",
            name: "Egypt",
        },
        {
            code: "EH",
            code3: "ESH",
            name: "Western Sahara",
        },
        {
            code: "ER",
            code3: "ERI",
            name: "Eritrea",
        },
        {
            code: "ES",
            code3: "ESP",
            name: "Spain",
        },
        {
            code: "ET",
            code3: "ETH",
            name: "Ethiopia",
        },
        {
            code: "FI",
            code3: "FIN",
            name: "Finland",
        },
        {
            code: "FJ",
            code3: "FJI",
            name: "Fiji",
        },
        {
            code: "FK",
            code3: "FLK",
            name: "Falkland Islands (Malvinas)",
        },
        {
            code: "FM",
            code3: "FSM",
            name: "Micronesia, Federated States of",
        },
        {
            code: "FO",
            code3: "FRO",
            name: "Faroe Islands",
        },
        {
            code: "FR",
            code3: "FRA",
            name: "France",
        },
        {
            code: "GA",
            code3: "GAB",
            name: "Gabon",
        },
        {
            code: "GB",
            code3: "GBR",
            name: "United Kingdom",
        },
        {
            code: "GD",
            code3: "GRD",
            name: "Grenada",
        },
        {
            code: "GE",
            code3: "GEO",
            name: "Georgia",
        },
        {
            code: "GF",
            code3: "GUF",
            name: "French Guiana",
        },
        {
            code: "GG",
            code3: "GGY",
            name: "Guernsey",
        },
        {
            code: "GH",
            code3: "GHA",
            name: "Ghana",
        },
        {
            code: "GI",
            code3: "GIB",
            name: "Gibraltar",
        },
        {
            code: "GL",
            code3: "GRL",
            name: "Greenland",
        },
        {
            code: "GM",
            code3: "GMB",
            name: "Gambia",
        },
        {
            code: "GN",
            code3: "GIN",
            name: "Guinea",
        },
        {
            code: "GP",
            code3: "GLP",
            name: "Guadeloupe",
        },
        {
            code: "GQ",
            code3: "GNQ",
            name: "Equatorial Guinea",
        },
        {
            code: "GR",
            code3: "GRC",
            name: "Greece",
        },
        {
            code: "GS",
            code3: "SGS",
            name: "South Georgia and the South Sandwich Islands",
        },
        {
            code: "GT",
            code3: "GTM",
            name: "Guatemala",
        },
        {
            code: "GU",
            code3: "GUM",
            name: "Guam",
        },
        {
            code: "GW",
            code3: "GNB",
            name: "Guinea-Bissau",
        },
        {
            code: "GY",
            code3: "GUY",
            name: "Guyana",
        },
        {
            code: "HK",
            code3: "HKG",
            name: "Hong Kong",
        },
        {
            code: "HM",
            code3: "HMD",
            name: "Heard Island and McDonald Islands",
        },
        {
            code: "HN",
            code3: "HND",
            name: "Honduras",
        },
        {
            code: "HR",
            code3: "HRV",
            name: "Croatia",
        },
        {
            code: "HT",
            code3: "HTI",
            name: "Haiti",
        },
        {
            code: "HU",
            code3: "HUN",
            name: "Hungary",
        },
        {
            code: "ID",
            code3: "IDN",
            name: "Indonesia",
        },
        {
            code: "IE",
            code3: "IRL",
            name: "Ireland",
        },
        {
            code: "IL",
            code3: "ISR",
            name: "Israel",
        },
        {
            code: "IM",
            code3: "IMN",
            name: "Isle of Man",
        },
        {
            code: "IN",
            code3: "IND",
            name: "India",
        },
        {
            code: "IO",
            code3: "IOT",
            name: "British Indian Ocean Territory",
        },
        {
            code: "IQ",
            code3: "IRQ",
            name: "Iraq",
        },
        {
            code: "IR",
            code3: "IRN",
            name: "Iran, Islamic Republic of",
        },
        {
            code: "IS",
            code3: "ISL",
            name: "Iceland",
        },
        {
            code: "IT",
            code3: "ITA",
            name: "Italy",
        },
        {
            code: "JE",
            code3: "JEY",
            name: "Jersey",
        },
        {
            code: "JM",
            code3: "JAM",
            name: "Jamaica",
        },
        {
            code: "JO",
            code3: "JOR",
            name: "Jordan",
        },
        {
            code: "JP",
            code3: "JPN",
            name: "Japan",
        },
        {
            code: "KE",
            code3: "KEN",
            name: "Kenya",
        },
        {
            code: "KG",
            code3: "KGZ",
            name: "Kyrgyzstan",
        },
        {
            code: "KH",
            code3: "KHM",
            name: "Cambodia",
        },
        {
            code: "KI",
            code3: "KIR",
            name: "Kiribati",
        },
        {
            code: "KM",
            code3: "COM",
            name: "Comoros",
        },
        {
            code: "KN",
            code3: "KNA",
            name: "Saint Kitts and Nevis",
        },
        {
            code: "KP",
            code3: "PRK",
            name: "Korea, Democratic People's Republic of",
        },
        {
            code: "KR",
            code3: "ROK",
            name: "Korea, Republic of",
        },
        {
            code: "KW",
            code3: "KWT",
            name: "Kuwait",
        },
        {
            code: "KY",
            code3: "CYM",
            name: "Cayman Islands",
        },
        {
            code: "KZ",
            code3: "KAZ",
            name: "Kazakhstan",
        },
        {
            code: "LA",
            code3: "LAO",
            name: "Lao People's Democratic Republic",
        },
        {
            code: "LB",
            code3: "LBN",
            name: "Lebanon",
        },
        {
            code: "LC",
            code3: "LCA",
            name: "Saint Lucia",
        },
        {
            code: "LI",
            code3: "LIE",
            name: "Liechtenstein",
        },
        {
            code: "LK",
            code3: "LKA",
            name: "Sri Lanka",
        },
        {
            code: "LR",
            code3: "LBR",
            name: "Liberia",
        },
        {
            code: "LS",
            code3: "LSO",
            name: "Lesotho",
        },
        {
            code: "LT",
            code3: "LTU",
            name: "Lithuania",
        },
        {
            code: "LU",
            code3: "LUX",
            name: "Luxembourg",
        },
        {
            code: "LV",
            code3: "LVA",
            name: "Latvia",
        },
        {
            code: "LY",
            code3: "LBY",
            name: "Libya",
        },
        {
            code: "MA",
            code3: "MAR",
            name: "Morocco",
        },
        {
            code: "MC",
            code3: "MCO",
            name: "Monaco",
        },
        {
            code: "MD",
            code3: "MDA",
            name: "Moldova, Republic of",
        },
        {
            code: "ME",
            code3: "MNE",
            name: "Montenegro",
        },
        {
            code: "MF",
            code3: "MAF",
            name: "Saint Martin (French part)",
        },
        {
            code: "MG",
            code3: "MDG",
            name: "Madagascar",
        },
        {
            code: "MH",
            code3: "MHL",
            name: "Marshall Islands",
        },
        {
            code: "MK",
            code3: "MKD",
            name: "Macedonia, the Former Yugoslav Republic of",
        },
        {
            code: "ML",
            code3: "MLI",
            name: "Mali",
        },
        {
            code: "MM",
            code3: "MMR",
            name: "Myanmar",
        },
        {
            code: "MN",
            code3: "MNG",
            name: "Mongolia",
        },
        {
            code: "MO",
            code3: "MAC",
            name: "Macao",
        },
        {
            code: "MP",
            code3: "MNP",
            name: "Northern Mariana Islands",
        },
        {
            code: "MQ",
            code3: "MTQ",
            name: "Martinique",
        },
        {
            code: "MR",
            code3: "MRT",
            name: "Mauritania",
        },
        {
            code: "MS",
            code3: "MSR",
            name: "Montserrat",
        },
        {
            code: "MT",
            code3: "MLT",
            name: "Malta",
        },
        {
            code: "MU",
            code3: "MUS",
            name: "Mauritius",
        },
        {
            code: "MV",
            code3: "MDV",
            name: "Maldives",
        },
        {
            code: "MW",
            code3: "MWI",
            name: "Malawi",
        },
        {
            code: "MX",
            code3: "MEX",
            name: "Mexico",
        },
        {
            code: "MY",
            code3: "MYS",
            name: "Malaysia",
        },
        {
            code: "MZ",
            code3: "MOZ",
            name: "Mozambique",
        },
        {
            code: "NA",
            code3: "NAM",
            name: "Namibia",
        },
        {
            code: "NC",
            code3: "NCL",
            name: "New Caledonia",
        },
        {
            code: "NE",
            code3: "NER",
            name: "Niger",
        },
        {
            code: "NF",
            code3: "NFK",
            name: "Norfolk Island",
        },
        {
            code: "NG",
            code3: "NGA",
            name: "Nigeria",
        },
        {
            code: "NI",
            code3: "NIC",
            name: "Nicaragua",
        },
        {
            code: "NL",
            code3: "NLD",
            name: "Netherlands",
        },
        {
            code: "NO",
            code3: "NOR",
            name: "Norway",
        },
        {
            code: "NP",
            code3: "NPL",
            name: "Nepal",
        },
        {
            code: "NR",
            code3: "NRU",
            name: "Nauru",
        },
        {
            code: "NU",
            code3: "NIU",
            name: "Niue",
        },
        {
            code: "NZ",
            code3: "NZL",
            name: "New Zealand",
        },
        {
            code: "OM",
            code3: "OMN",
            name: "Oman",
        },
        {
            code: "PA",
            code3: "PAN",
            name: "Panama",
        },
        {
            code: "PE",
            code3: "PER",
            name: "Peru",
        },
        {
            code: "PF",
            code3: "PYF",
            name: "French Polynesia",
        },
        {
            code: "PG",
            code3: "PNG",
            name: "Papua New Guinea",
        },
        {
            code: "PH",
            code3: "PHL",
            name: "Philippines",
        },
        {
            code: "PK",
            code3: "PAK",
            name: "Pakistan",
        },
        {
            code: "PL",
            code3: "POL",
            name: "Poland",
        },
        {
            code: "PM",
            code3: "SPM",
            name: "Saint Pierre and Miquelon",
        },
        {
            code: "PN",
            code3: "PCN",
            name: "Pitcairn",
        },
        {
            code: "PR",
            code3: "PRI",
            name: "Puerto Rico",
        },
        {
            code: "PS",
            code3: "PSE",
            name: "Palestine, State of",
        },
        {
            code: "PT",
            code3: "PRT",
            name: "Portugal",
        },
        {
            code: "PW",
            code3: "PLW",
            name: "Palau",
        },
        {
            code: "PY",
            code3: "PRY",
            name: "Paraguay",
        },
        {
            code: "QA",
            code3: "QAT",
            name: "Qatar",
        },
        {
            code: "RE",
            code3: "REU",
            name: "Reunion",
        },
        {
            code: "RO",
            code3: "ROU",
            name: "Romania",
        },
        {
            code: "RS",
            code3: "SRB",
            name: "Serbia",
        },
        {
            code: "RU",
            code3: "RUS",
            name: "Russian Federation",
        },
        {
            code: "RW",
            code3: "RWA",
            name: "Rwanda",
        },
        {
            code: "SA",
            code3: "SAU",
            name: "Saudi Arabia",
        },
        {
            code: "SB",
            code3: "SLB",
            name: "Solomon Islands",
        },
        {
            code: "SC",
            code3: "SYC",
            name: "Seychelles",
        },
        {
            code: "SD",
            code3: "SDN",
            name: "Sudan",
        },
        {
            code: "SE",
            code3: "SWE",
            name: "Sweden",
        },
        {
            code: "SG",
            code3: "SGP",
            name: "Singapore",
        },
        {
            code: "SH",
            code3: "SHN",
            name: "Saint Helena",
        },
        {
            code: "SI",
            code3: "SVN",
            name: "Slovenia",
        },
        {
            code: "SJ",
            code3: "SJM",
            name: "Svalbard and Jan Mayen",
        },
        {
            code: "SK",
            code3: "SVK",
            name: "Slovakia",
        },
        {
            code: "SL",
            code3: "SLE",
            name: "Sierra Leone",
        },
        {
            code: "SM",
            code3: "SMR",
            name: "San Marino",
        },
        {
            code: "SN",
            code3: "SEN",
            name: "Senegal",
        },
        {
            code: "SO",
            code3: "SOM",
            name: "Somalia",
        },
        {
            code: "SR",
            code3: "SUR",
            name: "Suriname",
        },
        {
            code: "SS",
            code3: "SSD",
            name: "South Sudan",
        },
        {
            code: "ST",
            code3: "STP",
            name: "Sao Tome and Principe",
        },
        {
            code: "SV",
            code3: "SLV",
            name: "El Salvador",
        },
        {
            code: "SX",
            code3: "SXM",
            name: "Sint Maarten (Dutch part)",
        },
        {
            code: "SY",
            code3: "SYR",
            name: "Syrian Arab Republic",
        },
        {
            code: "SZ",
            code3: "SWZ",
            name: "Swaziland",
        },
        {
            code: "TC",
            code3: "TCA",
            name: "Turks and Caicos Islands",
        },
        {
            code: "TD",
            code3: "TCD",
            name: "Chad",
        },
        {
            code: "TF",
            code3: "ATF",
            name: "French Southern Territories",
        },
        {
            code: "TG",
            code3: "TGO",
            name: "Togo",
        },
        {
            code: "TH",
            code3: "THA",
            name: "Thailand",
        },
        {
            code: "TJ",
            code3: "TJK",
            name: "Tajikistan",
        },
        {
            code: "TK",
            code3: "TKL",
            name: "Tokelau",
        },
        {
            code: "TL",
            code3: "TLS",
            name: "Timor-Leste",
        },
        {
            code: "TM",
            code3: "TKM",
            name: "Turkmenistan",
        },
        {
            code: "TN",
            code3: "TUN",
            name: "Tunisia",
        },
        {
            code: "TO",
            code3: "TON",
            name: "Tonga",
        },
        {
            code: "TR",
            code3: "TUR",
            name: "Turkey",
        },
        {
            code: "TT",
            code3: "TTO",
            name: "Trinidad and Tobago",
        },
        {
            code: "TV",
            code3: "TUV",
            name: "Tuvalu",
        },
        {
            code: "TW",
            code3: "TWN",
            name: "Taiwan, Province of China",
        },
        {
            code: "TZ",
            code3: "TZA",
            name: "United Republic of Tanzania",
        },
        {
            code: "UA",
            code3: "UKR",
            name: "Ukraine",
        },
        {
            code: "UG",
            code3: "UGA",
            name: "Uganda",
        },
        {
            code: "US",
            code3: "USA",
            name: "United States",
        },
        {
            code: "UY",
            code3: "URY",
            name: "Uruguay",
        },
        {
            code: "UZ",
            code3: "UZB",
            name: "Uzbekistan",
        },
        {
            code: "VA",
            code3: "VAT",
            name: "Holy See (Vatican City State)",
        },
        {
            code: "VC",
            code3: "VCT",
            name: "Saint Vincent and the Grenadines",
        },
        {
            code: "VE",
            code3: "VEN",
            name: "Venezuela",
        },
        {
            code: "VG",
            code3: "VGB",
            name: "British Virgin Islands",
        },
        {
            code: "VI",
            code3: "VIR",
            name: "US Virgin Islands",
        },
        {
            code: "VN",
            code3: "VNM",
            name: "Vietnam",
        },
        {
            code: "VU",
            code3: "VUT",
            name: "Vanuatu",
        },
        {
            code: "WF",
            code3: "WLF",
            name: "Wallis and Futuna",
        },
        {
            code: "WS",
            code3: "WSM",
            name: "Samoa",
        },
        {
            code: "XK",
            code3: "XXK",
            name: "Kosovo",
        },
        {
            code: "YE",
            code3: "YEM",
            name: "Yemen",
        },
        {
            code: "YT",
            code3: "MYT",
            name: "Mayotte",
        },
        {
            code: "ZA",
            code3: "ZAF",
            name: "South Africa",
        },
        {
            code: "ZM",
            code3: "ZMB",
            name: "Zambia",
        },
        {
            code: "ZW",
            code3: "ZWE",
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
