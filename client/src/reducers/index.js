const initialState = {
    countries : [],
    allCountries: [],
    activities: [],
}

function rootReducer (state=initialState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case 'FILTER_COUNTRIES_BY_CONTINENT':
            const allCountries = state.allCountries;
            const filteredCountries = action.payload === 'All' ? allCountries : allCountries.filter(country => country.continent === action.payload);
            return {
                ...state,
                countries: filteredCountries,
            }
            case 'FILTER_COUNTRIES_BY_ORDER_ABC':
                const sortedArr = action.payload === "asc" ?
                state.countries.sort((a, b) => a.name.localeCompare(b.name)) :
                state.countries.sort((a, b) => b.name.localeCompare(a.name));
                return {
                    ...state,
                    countries: sortedArr,
                }
            case 'FILTER_COUNTRIES_BY_ORDER_POBLATINAL':
                const sortedArr2 = action.payload === "pAsc" ?
                state.countries.sort((a, b) => a.population - b.population) : 
                state.countries.sort((a, b) => b.population - a.population);
                return {
                    ...state,
                    countries: sortedArr2,
                }
            case 'GET_ACTIVITIES':
                return {
                    ...state,
                    activities: action.payload,
                }
            case 'GET_NAME_COUNTRY' :
                return {
                    ...state,
                    countries: action.payload,
                }
            case 'POST_ACTIVITY': 
            return {
                ...state,
            }              

        default:
            return state
    }

}

export default rootReducer;