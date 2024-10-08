export type Country = {
    name: string
    link: string
    code: string
    status?: "E" | "ON_ARRIVAL" | "REQUIRED" | "ONLINE"
}

export const DEPENDENT_TERRITORIES : Country[] = [
    { name: "Hong Kong", link: "https://en.wikipedia.org/wiki/Hong_Kong", code: "HK" },
    { name: "Macau", link: "https://en.wikipedia.org/wiki/Macau", code: "MO", status: "ON_ARRIVAL" },
    { name: "Faroe Islands", link: "https://en.wikipedia.org/wiki/Faroe_Islands", code: "FO", status: "REQUIRED" },
    { name: "Greenland", link: "https://en.wikipedia.org/wiki/Greenland", code: "GL", status: "REQUIRED" },
    { name: "French Guiana", link: "https://en.wikipedia.org/wiki/French_Guiana", code: "GF" },
    { name: "French Polynesia", link: "https://en.wikipedia.org/wiki/French_Polynesia", code: "PF" },
    { name: "French West Indies", link: "https://en.wikipedia.org/wiki/French_West_Indies", code: "FR-WI" },
    { name: "Mayotte", link: "https://en.wikipedia.org/wiki/Mayotte", code: "YT" },
    { name: "New Caledonia", link: "https://en.wikipedia.org/wiki/New_Caledonia", code: "NC" },
    { name: "Réunion", link: "https://en.wikipedia.org/wiki/R%C3%A9union", code: "RE" },
    { name: "Saint Pierre and Miquelon", link: "https://en.wikipedia.org/wiki/Saint_Pierre_and_Miquelon", code: "PM" },
    { name: "Wallis and Futuna", link: "https://en.wikipedia.org/wiki/Wallis_and_Futuna", code: "WF" },
    { name: "Aruba", link: "https://en.wikipedia.org/wiki/Aruba", code: "AW", status: "REQUIRED" },
    { name: "Caribbean Netherlands", link: "https://en.wikipedia.org/wiki/Caribbean_Netherlands", code: "BQ", status: "REQUIRED" },
    { name: "Curaçao", link: "https://en.wikipedia.org/wiki/Cura%C3%A7ao", code: "CW", status: "REQUIRED" },
    { name: "Sint Maarten", link: "https://en.wikipedia.org/wiki/Sint_Maarten", code: "SX", status: "REQUIRED"},
    { name: "Cook Islands", link: "https://en.wikipedia.org/wiki/Cook_Islands", code: "CK" },
    { name: "Niue", link: "https://en.wikipedia.org/wiki/Niue", code: "NU" },
    { name: "Tokelau", link: "https://en.wikipedia.org/wiki/Tokelau", code: "TK" , status: "REQUIRED"},
    { name: "Akrotiri and Dhekelia", link: "https://en.wikipedia.org/wiki/Akrotiri_and_Dhekelia", code: "XK-AD" },
    { name: "Anguilla", link: "https://en.wikipedia.org/wiki/Anguilla", code: "AI" },
    { name: "Bermuda", link: "https://en.wikipedia.org/wiki/Bermuda", code: "BM" },
    { name: "British Indian Ocean Territory", link: "https://en.wikipedia.org/wiki/British_Indian_Ocean_Territory", code: "IO" },
    { name: "British Virgin Islands", link: "https://en.wikipedia.org/wiki/British_Virgin_Islands", code: "VG" },
    { name: "Cayman Islands", link: "https://en.wikipedia.org/wiki/Cayman_Islands", code: "KY" },
    { name: "Falkland Islands", link: "https://en.wikipedia.org/wiki/Falkland_Islands", code: "FK", status: "REQUIRED" },
    { name: "Gibraltar", link: "https://en.wikipedia.org/wiki/Gibraltar", code: "GI" },
    { name: "Montserrat", link: "https://en.wikipedia.org/wiki/Montserrat", code: "MS" },
    { name: "Pitcairn Islands", link: "https://en.wikipedia.org/wiki/Pitcairn_Islands", code: "PN" },
    { name: "Ascension Island", link: "https://en.wikipedia.org/wiki/Ascension_Island", code: "SH-AC" },
    { name: "Saint Helena", link: "https://en.wikipedia.org/wiki/Saint_Helena", code: "SH-HL" },
    { name: "Tristan da Cunha", link: "https://en.wikipedia.org/wiki/Tristan_da_Cunha", code: "SH-TA" },
    { name: "South Georgia and the South Sandwich Islands", link: "https://en.wikipedia.org/wiki/South_Georgia_and_the_South_Sandwich_Islands", code: "GS" },
    { name: "Turks and Caicos Islands", link: "https://en.wikipedia.org/wiki/Turks_and_Caicos_Islands", code: "TC" },
    { name: "American Samoa", link: "https://en.wikipedia.org/wiki/American_Samoa", code: "AS", status: "REQUIRED" },
    { name: "Guam", link: "https://en.wikipedia.org/wiki/Guam", code: "GU", status: "REQUIRED" },
    { name: "Northern Mariana Islands", link: "https://en.wikipedia.org/wiki/Northern_Mariana_Islands", code: "MP", status: "REQUIRED" },
    { name: "Puerto Rico", link: "https://en.wikipedia.org/wiki/Puerto_Rico", code: "PR", status: "REQUIRED" },
    { name: "U.S. Virgin Islands", link: "https://en.wikipedia.org/wiki/United_States_Virgin_Islands", code: "VI", status: "REQUIRED" }
];

export const UNRECOGNIZED_TERRITORIES : Country[] = [
    { name: "Abkhazia", link: "https://en.wikipedia.org/wiki/Abkhazia", code: "AB", status: "REQUIRED" },
    { name: "Kosovo", link: "https://en.wikipedia.org/wiki/Kosovo", code: "XK" },
    { name: "Northern Cyprus", link: "https://en.wikipedia.org/wiki/Northern_Cyprus", code: "NC" },
    { name: "Palestine", link: "https://en.wikipedia.org/wiki/State_of_Palestine", code: "PS" },
    { name: "Sahrawi Arab Democratic Republic", link: "https://en.wikipedia.org/wiki/Sahrawi_Arab_Democratic_Republic", code: "EH" },
    { name: "Somaliland", link: "https://en.wikipedia.org/wiki/Somaliland", code: "SO", status: "ON_ARRIVAL" },
    { name: "South Ossetia", link: "https://en.wikipedia.org/wiki/South_Ossetia", code: "SO" },
    { name: "Taiwan", link: "https://en.wikipedia.org/wiki/Taiwan", code: "TW", status: "REQUIRED" },
    { name: "Transnistria", link: "https://en.wikipedia.org/wiki/Transnistria", code: "PMR" }
];

export const RECOGNIZED_COUNTRIES : Country[] = [
    { name: "Afghanistan", code: "AF", link: "https://en.wikipedia.org/wiki/Afghanistan", status: "REQUIRED" },
    { name: "Albania", code: "AL", link: "https://en.wikipedia.org/wiki/Albania", status: "REQUIRED" },
    { name: "Algeria", code: "DZ", link: "https://en.wikipedia.org/wiki/Algeria", status: "REQUIRED" },
    { name: "Andorra", code: "AD", link: "https://en.wikipedia.org/wiki/Andorra", status: "REQUIRED" },
    { name: "Angola", code: "AO", link: "https://en.wikipedia.org/wiki/Angola"},
    { name: "Antigua and Barbuda", code: "AG", link: "https://en.wikipedia.org/wiki/Antigua_and_Barbuda" },
    { name: "Argentina", code: "AR", link: "https://en.wikipedia.org/wiki/Argentina", status: "REQUIRED" },
    { name: "Armenia", code: "AM", link: "https://en.wikipedia.org/wiki/Armenia", status: "ON_ARRIVAL" },
    { name: "Australia", code: "AU", link: "https://en.wikipedia.org/wiki/Australia", status: "REQUIRED" },
    { name: "Austria", code: "AT", link: "https://en.wikipedia.org/wiki/Austria", status: "REQUIRED" },
    { name: "Azerbaijan", code: "AZ", link: "https://en.wikipedia.org/wiki/Azerbaijan", status: "REQUIRED" },
    { name: "Bahamas", code: "BS", link: "https://en.wikipedia.org/wiki/The_Bahamas" },
    { name: "Bahrain", code: "BH", link: "https://en.wikipedia.org/wiki/Bahrain", status: "REQUIRED" },
    { name: "Bangladesh", code: "BD", link: "https://en.wikipedia.org/wiki/Bangladesh", status: "REQUIRED" },
    { name: "Barbados", code: "BB", link: "https://en.wikipedia.org/wiki/Barbados" },
    { name: "Belarus", code: "BY", link: "https://en.wikipedia.org/wiki/Belarus" },
    { name: "Belgium", code: "BE", link: "https://en.wikipedia.org/wiki/Belgium", status: "REQUIRED" },
    { name: "Belize", code: "BZ", link: "https://en.wikipedia.org/wiki/Belize" },
    { name: "Benin", code: "BJ", link: "https://en.wikipedia.org/wiki/Benin", status: "ON_ARRIVAL" },
    { name: "Bhutan", code: "BT", link: "https://en.wikipedia.org/wiki/Bhutan", status: "REQUIRED" },
    { name: "Bolivia", code: "BO", link: "https://en.wikipedia.org/wiki/Bolivia" },
    { name: "Bosnia and Herzegovina", code: "BA", link: "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina" },
    { name: "Botswana", code: "BW", link: "https://en.wikipedia.org/wiki/Botswana" },
    { name: "Brazil", code: "BR", link: "https://en.wikipedia.org/wiki/Brazil", status: "REQUIRED" },
    { name: "Brunei", code: "BN", link: "https://en.wikipedia.org/wiki/Brunei", status: "REQUIRED"},
    { name: "Bulgaria", code: "BG", link: "https://en.wikipedia.org/wiki/Bulgaria", status: "REQUIRED" },
    { name: "Burkina Faso", code: "BF", link: "https://en.wikipedia.org/wiki/Burkina_Faso", status: "REQUIRED" },
    { name: "Burundi", code: "BI", link: "https://en.wikipedia.org/wiki/Burundi", status: "REQUIRED" },
    { name: "Cambodia", code: "KH", link: "https://en.wikipedia.org/wiki/Cambodia" },
    { name: "Cameroon", code: "CM", link: "https://en.wikipedia.org/wiki/Cameroon", status: "REQUIRED" },
    { name: "Canada", code: "CA", link: "https://en.wikipedia.org/wiki/Canada", status: "REQUIRED" },
    { name: "Cape Verde", code: "CV", link: "https://en.wikipedia.org/wiki/Cape_Verde", status: "ON_ARRIVAL" },
    { name: "Central African Republic", code: "CF", link: "https://en.wikipedia.org/wiki/Central_African_Republic", status: "REQUIRED"},
    { name: "Chad", code: "TD", link: "https://en.wikipedia.org/wiki/Chad", status: "REQUIRED" },
    { name: "Chile", code: "CL", link: "https://en.wikipedia.org/wiki/Chile", status: "REQUIRED" },
    { name: "China", code: "CN", link: "https://en.wikipedia.org/wiki/China", status: "REQUIRED" },
    { name: "Colombia", code: "CO", link: "https://en.wikipedia.org/wiki/Colombia", status: "REQUIRED" },
    { name: "Comoros", code: "KM", link: "https://en.wikipedia.org/wiki/Comoros", status: "ON_ARRIVAL" },
    { name: "Republic of the Congo", code: "CG", link: "https://en.wikipedia.org/wiki/Republic_of_the_Congo", status: "REQUIRED" },
    { name: "Democratic Republic of the Congo", code: "CD", link: "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo", status: "REQUIRED" },
    { name: "Costa Rica", code: "CR", link: "https://en.wikipedia.org/wiki/Costa_Rica" },
    { name: "Côte d'Ivoire", code: "CI", link: "https://en.wikipedia.org/wiki/Ivory_Coast", status: "REQUIRED" },
    { name: "Croatia", code: "HR", link: "https://en.wikipedia.org/wiki/Croatia", status: "REQUIRED" },
    { name: "Cuba", code: "CU", link: "https://en.wikipedia.org/wiki/Cuba", status: "REQUIRED" },
    { name: "Cyprus", code: "CY", link: "https://en.wikipedia.org/wiki/Cyprus", status: "REQUIRED"},
    { name: "Czech Republic", code: "CZ", link: "https://en.wikipedia.org/wiki/Czech_Republic", status: "REQUIRED" },
    { name: "Denmark", code: "DK", link: "https://en.wikipedia.org/wiki/Denmark", status: "REQUIRED" },
    { name: "Djibouti", code: "DJ", link: "https://en.wikipedia.org/wiki/Djibouti", status: "E" },
    { name: "Dominica", code: "DM", link: "https://en.wikipedia.org/wiki/Dominica", status: "REQUIRED" },
    { name: "Dominican Republic", code: "DO", link: "https://en.wikipedia.org/wiki/Dominican_Republic", status: "REQUIRED" },
    { name: "Ecuador", code: "EC", link: "https://en.wikipedia.org/wiki/Ecuador", status: "REQUIRED" },
    { name: "Egypt", code: "EG", link: "https://en.wikipedia.org/wiki/Egypt", status: "ON_ARRIVAL" },
    { name: "El Salvador", code: "SV", link: "https://en.wikipedia.org/wiki/El_Salvador", },
    { name: "Equatorial Guinea", code: "GQ", link: "https://en.wikipedia.org/wiki/Equatorial_Guinea", status: "REQUIRED" },
    { name: "Eritrea", code: "ER", link: "https://en.wikipedia.org/wiki/Eritrea", status: "REQUIRED" },
    { name: "Estonia", code: "EE", link: "https://en.wikipedia.org/wiki/Estonia", status: "REQUIRED" },
    { name: "Eswatini", code: "SZ", link: "https://en.wikipedia.org/wiki/Eswatini" },
    { name: "Ethiopia", code: "ET", link: "https://en.wikipedia.org/wiki/Ethiopia", status: "E" },
    { name: "Fiji", code: "FJ", link: "https://en.wikipedia.org/wiki/Fiji" },
    { name: "Finland", code: "FI", link: "https://en.wikipedia.org/wiki/Finland", status: "REQUIRED" },
    { name: "France", code: "FR", link: "https://en.wikipedia.org/wiki/France", status: "REQUIRED" },
    { name: "Gabon", code: "GA", link: "https://en.wikipedia.org/wiki/Gabon", status: "REQUIRED" },
    { name: "Gambia", code: "GM", link: "https://en.wikipedia.org/wiki/The_Gambia" },
    { name: "Georgia", code: "GE", link: "https://en.wikipedia.org/wiki/Georgia_(country)", status: "E" },
    { name: "Germany", code: "DE", link: "https://en.wikipedia.org/wiki/Germany", status: "REQUIRED" },
    { name: "Ghana", code: "GH", link: "https://en.wikipedia.org/wiki/Ghana", status: "REQUIRED" },
    { name: "Greece", code: "GR", link: "https://en.wikipedia.org/wiki/Greece", status: "REQUIRED" },
    { name: "Grenada", code: "GD", link: "https://en.wikipedia.org/wiki/Grenada" },
    { name: "Guatemala", code: "GT", link: "https://en.wikipedia.org/wiki/Guatemala" },
    { name: "Guinea", code: "GN", link: "https://en.wikipedia.org/wiki/Guinea", status: "REQUIRED" },
    { name: "Guinea-Bissau", code: "GW", link: "https://en.wikipedia.org/wiki/Guinea-Bissau", status: "ON_ARRIVAL" },
    { name: "Guyana", code: "GY", link: "https://en.wikipedia.org/wiki/Guyana", status: "REQUIRED"},
    { name: "Haiti", code: "HT", link: "https://en.wikipedia.org/wiki/Haiti" },
    { name: "Honduras", code: "HN", link: "https://en.wikipedia.org/wiki/Honduras" },
    { name: "Hungary", code: "HU", link: "https://en.wikipedia.org/wiki/Hungary", status: "REQUIRED" },
    { name: "Iceland", code: "IS", link: "https://en.wikipedia.org/wiki/Iceland", status: "REQUIRED" },
    { name: "India", code: "IN", link: "https://en.wikipedia.org/wiki/India", status: "E" },
    { name: "Indonesia", code: "ID", link: "https://en.wikipedia.org/wiki/Indonesia", status: "REQUIRED" },
    { name: "Iran", code: "IR", link: "https://en.wikipedia.org/wiki/Iran", status: "E" },
    { name: "Iraq", code: "IQ", link: "https://en.wikipedia.org/wiki/Iraq", status: "REQUIRED" },
    { name: "Ireland", code: "IE", link: "https://en.wikipedia.org/wiki/Republic_of_Ireland", status: "REQUIRED" },
    { name: "Israel", code: "IL", link: "https://en.wikipedia.org/wiki/Israel" },
    { name: "Italy", code: "IT", link: "https://en.wikipedia.org/wiki/Italy", status: "REQUIRED" },
    { name: "Jamaica", code: "JM", link: "https://en.wikipedia.org/wiki/Jamaica" },
    { name: "Japan", code: "JP", link: "https://en.wikipedia.org/wiki/Japan", status: "REQUIRED" },
    { name: "Jordan", code: "JO", link: "https://en.wikipedia.org/wiki/Jordan", status: "ON_ARRIVAL" },
    { name: "Kazakhstan", code: "KZ", link: "https://en.wikipedia.org/wiki/Kazakhstan", status: "REQUIRED" },
    { name: "Kenya", code: "KE", link: "https://en.wikipedia.org/wiki/Kenya", status: "E" },
    { name: "Kiribati", code: "KI", link: "https://en.wikipedia.org/wiki/Kiribati" },
    { name: "North Korea", code: "KP", link: "https://en.wikipedia.org/wiki/North_Korea", status: "REQUIRED" },
    { name: "South Korea", code: "KR", link: "https://en.wikipedia.org/wiki/South_Korea", status: "REQUIRED" },
    { name: "Kuwait", code: "KW", link: "https://en.wikipedia.org/wiki/Kuwait", status: "REQUIRED" },
    { name: "Kyrgyzstan", code: "KG", link: "https://en.wikipedia.org/wiki/Kyrgyzstan", status: "E" },
    { name: "Laos", code: "LA", link: "https://en.wikipedia.org/wiki/Laos", status: "E" },
    { name: "Latvia", code: "LV", link: "https://en.wikipedia.org/wiki/Latvia", status: "REQUIRED" },
    { name: "Lebanon", code: "LB", link: "https://en.wikipedia.org/wiki/Lebanon", status: "REQUIRED" },
    { name: "Lesotho", code: "LS", link: "https://en.wikipedia.org/wiki/Lesotho" },
    { name: "Liberia", code: "LR", link: "https://en.wikipedia.org/wiki/Liberia", status: "REQUIRED" },
    { name: "Libya", code: "LY", link: "https://en.wikipedia.org/wiki/Libya", status: "REQUIRED" },
    { name: "Liechtenstein", code: "LI", link: "https://en.wikipedia.org/wiki/Liechtenstein", status: "REQUIRED" },
    { name: "Lithuania", code: "LT", link: "https://en.wikipedia.org/wiki/Lithuania", status: "REQUIRED" },
    { name: "Luxembourg", code: "LU", link: "https://en.wikipedia.org/wiki/Luxembourg", status: "REQUIRED"},
    { name: "Madagascar", code: "MG", link: "https://en.wikipedia.org/wiki/Madagascar", status: "E"},
    { name: "Malawi", code: "MW", link: "https://en.wikipedia.org/wiki/Malawi", status: "ON_ARRIVAL" },
    { name: "Malaysia", code: "MY", link: "https://en.wikipedia.org/wiki/Malaysia" },
    { name: "Maldives", code: "MV", link: "https://en.wikipedia.org/wiki/Maldives", status: "ON_ARRIVAL" },
    { name: "Mali", code: "ML", link: "https://en.wikipedia.org/wiki/Mali", status: "REQUIRED" },
    { name: "Malta", code: "MT", link: "https://en.wikipedia.org/wiki/Malta", status: "REQUIRED" },
    { name: "Marshall Islands", code: "MH", link: "https://en.wikipedia.org/wiki/Marshall_Islands" },
    { name: "Mauritania", code: "MR", link: "https://en.wikipedia.org/wiki/Mauritania", status: "ON_ARRIVAL" },
    { name: "Mauritius", code: "MU", link: "https://en.wikipedia.org/wiki/Mauritius", status: "ON_ARRIVAL" },
    { name: "Mexico", code: "MX", link: "https://en.wikipedia.org/wiki/Mexico", status: "REQUIRED" },
    { name: "Micronesia", code: "FM", link: "https://en.wikipedia.org/wiki/Federated_States_of_Micronesia" },
    { name: "Moldova", code: "MD", link: "https://en.wikipedia.org/wiki/Moldova" },
    { name: "Monaco", code: "MC", link: "https://en.wikipedia.org/wiki/Monaco", status: "REQUIRED" },
    { name: "Mongolia", code: "MN", link: "https://en.wikipedia.org/wiki/Mongolia", status: "REQUIRED" },
    { name: "Montenegro", code: "ME", link: "https://en.wikipedia.org/wiki/Montenegro", status: "E" },
    { name: "Morocco", code: "MA", link: "https://en.wikipedia.org/wiki/Morocco", status: "REQUIRED" },
    { name: "Mozambique", code: "MZ", link: "https://en.wikipedia.org/wiki/Mozambique", status: "ON_ARRIVAL" },
    { name: "Myanmar", code: "MM", link: "https://en.wikipedia.org/wiki/Myanmar", status: "E" },
    { name: "Namibia", code: "NA", link: "https://en.wikipedia.org/wiki/Namibia", status: "REQUIRED" },
    { name: "Nauru", code: "NR", link: "https://en.wikipedia.org/wiki/Nauru" },
    { name: "Nepal", code: "NP", link: "https://en.wikipedia.org/wiki/Nepal" },
    { name: "Netherlands", code: "NL", link: "https://en.wikipedia.org/wiki/Netherlands", status: "REQUIRED" },
    { name: "New Zealand", code: "NZ", link: "https://en.wikipedia.org/wiki/New_Zealand", status: "REQUIRED"},
    { name: "Nicaragua", code: "NI", link: "https://en.wikipedia.org/wiki/Nicaragua" },
    { name: "Niger", code: "NE", link: "https://en.wikipedia.org/wiki/Niger", status: "REQUIRED" },
    { name: "Nigeria", code: "NG", link: "https://en.wikipedia.org/wiki/Nigeria", status: "REQUIRED" },
    { name: "North Macedonia", code: "MK", link: "https://en.wikipedia.org/wiki/North_Macedonia", status: "REQUIRED" },
    { name: "Norway", code: "NO", link: "https://en.wikipedia.org/wiki/Norway", status: "REQUIRED" },
    { name: "Oman", code: "OM", link: "https://en.wikipedia.org/wiki/Oman", status: "REQUIRED"},
    { name: "Pakistan", code: "PK", link: "https://en.wikipedia.org/wiki/Pakistan", status: "ONLINE" },
    { name: "Palau", code: "PW", link: "https://en.wikipedia.org/wiki/Palau", status: "ON_ARRIVAL" },
    { name: "Panama", code: "PA", link: "https://en.wikipedia.org/wiki/Panama" },
    { name: "Papua New Guinea", code: "PG", link: "https://en.wikipedia.org/wiki/Papua_New_Guinea", status: "E" },
    { name: "Paraguay", code: "PY", link: "https://en.wikipedia.org/wiki/Paraguay", status: "REQUIRED" },
    { name: "Peru", code: "PE", link: "https://en.wikipedia.org/wiki/Peru" },
    { name: "Philippines", code: "PH", link: "https://en.wikipedia.org/wiki/Philippines" },
    { name: "Poland", code: "PL", link: "https://en.wikipedia.org/wiki/Poland", status: "REQUIRED" },
    { name: "Portugal", code: "PT", link: "https://en.wikipedia.org/wiki/Portugal", status: "REQUIRED" },
    { name: "Qatar", code: "QA", link: "https://en.wikipedia.org/wiki/Qatar", status: "E" },
    { name: "Romania", code: "RO", link: "https://en.wikipedia.org/wiki/Romania", status: "REQUIRED" },
    { name: "Russia", code: "RU", link: "https://en.wikipedia.org/wiki/Russia" },
    { name: "Rwanda", code: "RW", link: "https://en.wikipedia.org/wiki/Rwanda" },
    { name: "Saint Kitts and Nevis", code: "KN", link: "https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis" },
    { name: "Saint Lucia", code: "LC", link: "https://en.wikipedia.org/wiki/Saint_Lucia" },
    { name: "Saint Vincent and the Grenadines", code: "VC", link: "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines" },
    { name: "Samoa", code: "WS", link: "https://en.wikipedia.org/wiki/Samoa" },
    { name: "San Marino", code: "SM", link: "https://en.wikipedia.org/wiki/San_Marino", status: "REQUIRED" },
    { name: "Sao Tome and Principe", code: "ST", link: "https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe", status: "E" },
    { name: "Saudi Arabia", code: "SA", link: "https://en.wikipedia.org/wiki/Saudi_Arabia", status: "REQUIRED" },
    { name: "Senegal", code: "SN", link: "https://en.wikipedia.org/wiki/Senegal", status: "ON_ARRIVAL" },
    { name: "Serbia", code: "RS", link: "https://en.wikipedia.org/wiki/Serbia", status: "REQUIRED" },
    { name: "Seychelles", code: "SC", link: "https://en.wikipedia.org/wiki/Seychelles", status: "ON_ARRIVAL" },
    { name: "Sierra Leone", code: "SL", link: "https://en.wikipedia.org/wiki/Sierra_Leone", status: "ON_ARRIVAL" },
    { name: "Singapore", code: "SG", link: "https://en.wikipedia.org/wiki/Singapore" },
    { name: "Slovakia", code: "SK", link: "https://en.wikipedia.org/wiki/Slovakia", status: "REQUIRED" },
    { name: "Slovenia", code: "SI", link: "https://en.wikipedia.org/wiki/Slovenia", status: "REQUIRED" },
    { name: "Solomon Islands", code: "SB", link: "https://en.wikipedia.org/wiki/Solomon_Islands", status: "ON_ARRIVAL" },
    { name: "Somalia", code: "SO", link: "https://en.wikipedia.org/wiki/Somalia", status: "ON_ARRIVAL" },
    { name: "South Africa", code: "ZA", link: "https://en.wikipedia.org/wiki/South_Africa", status: "REQUIRED" },
    { name: "South Sudan", code: "SS", link: "https://en.wikipedia.org/wiki/South_Sudan", status: "E" },
    { name: "Spain", code: "ES", link: "https://en.wikipedia.org/wiki/Spain", status: "REQUIRED" },
    { name: "Sri Lanka", code: "LK", link: "https://en.wikipedia.org/wiki/Sri_Lanka", status: "ON_ARRIVAL" },
    { name: "Sudan", code: "SD", link: "https://en.wikipedia.org/wiki/Sudan", status: "REQUIRED" },
    { name: "Suriname", code: "SR", link: "https://en.wikipedia.org/wiki/Suriname", status: "E"  },
    { name: "Sweden", code: "SE", link: "https://en.wikipedia.org/wiki/Sweden", status: "REQUIRED" },
    { name: "Switzerland", code: "CH", link: "https://en.wikipedia.org/wiki/Switzerland", status: "REQUIRED" },
    { name: "Syria", code: "SY", link: "https://en.wikipedia.org/wiki/Syria", status: "REQUIRED" },
    { name: "Taiwan", code: "TW", link: "https://en.wikipedia.org/wiki/Taiwan", status: "REQUIRED" },
    { name: "Tajikistan", code: "TJ", link: "https://en.wikipedia.org/wiki/Tajikistan", status: "REQUIRED" },
    { name: "Tanzania", code: "TZ", link: "https://en.wikipedia.org/wiki/Tanzania", status: "ON_ARRIVAL" },
    { name: "Thailand", code: "TH", link: "https://en.wikipedia.org/wiki/Thailand", status: "ON_ARRIVAL" },
    { name: "Timor-Leste", code: "TL", link: "https://en.wikipedia.org/wiki/East_Timor", status: "ON_ARRIVAL" },
    { name: "Togo", code: "TG", link: "https://en.wikipedia.org/wiki/Togo", status: "ON_ARRIVAL" },
    { name: "Tonga", code: "TO", link: "https://en.wikipedia.org/wiki/Tonga", status: "ON_ARRIVAL" },
    { name: "Trinidad and Tobago", code: "TT", link: "https://en.wikipedia.org/wiki/Trinidad_and_Tobago" },
    { name: "Tunisia", code: "TN", link: "https://en.wikipedia.org/wiki/Tunisia", status: "REQUIRED" },
    { name: "Turkey", code: "TR", link: "https://en.wikipedia.org/wiki/Turkey", status: "REQUIRED" },
    { name: "Turkmenistan", code: "TM", link: "https://en.wikipedia.org/wiki/Turkmenistan", status: "REQUIRED" },
    { name: "Tuvalu", code: "TV", link: "https://en.wikipedia.org/wiki/Tuvalu", status: "ON_ARRIVAL" },
    { name: "Uganda", code: "UG", link: "https://en.wikipedia.org/wiki/Uganda", },
    { name: "Ukraine", code: "UA", link: "https://en.wikipedia.org/wiki/Ukraine", status: "REQUIRED" },
    { name: "United Arab Emirates", code: "AE", link: "https://en.wikipedia.org/wiki/United_Arab_Emirates", status: "E" },
    { name: "United Kingdom", code: "GB", link: "https://en.wikipedia.org/wiki/United_Kingdom", status: "REQUIRED" },
    { name: "United States", code: "US", link: "https://en.wikipedia.org/wiki/United_States", status: "REQUIRED" },
    { name: "Uruguay", code: "UY", link: "https://en.wikipedia.org/wiki/Uruguay",status: "REQUIRED" },
    { name: "Uzbekistan", code: "UZ", link: "https://en.wikipedia.org/wiki/Uzbekistan", status: "E" },
    { name: "Vanuatu", code: "VU", link: "https://en.wikipedia.org/wiki/Vanuatu", status: "REQUIRED" },
    { name: "Vatican City", code: "VA", link: "https://en.wikipedia.org/wiki/Vatican_City", status: "REQUIRED" },
    { name: "Venezuela", code: "VE", link: "https://en.wikipedia.org/wiki/Venezuela", status: "REQUIRED" },
    { name: "Vietnam", code: "VN", link: "https://en.wikipedia.org/wiki/Vietnam", status: "E" },
    { name: "Yemen", code: "YE", link: "https://en.wikipedia.org/wiki/Yemen", status: "REQUIRED" },
    { name: "Zambia", code: "ZM", link: "https://en.wikipedia.org/wiki/Zambia" },
    { name: "Zimbabwe", code: "ZW", link: "https://en.wikipedia.org/wiki/Zimbabwe" }
]