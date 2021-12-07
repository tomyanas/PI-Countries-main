const initialState = {
    countries : [],
    allCountries: [],
    activities: [],
    details: [],
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
                case 'FILTER_COUNTRIES_BY_AREA':
                    const sortedArr3 = action.payload === "pAsc" ?
                    state.countries.sort((a, b) => a.area - b.area) : 
                    state.countries.sort((a, b) => b.area - a.area);
                    return {
                        ...state,
                        countries: sortedArr3,
                    }
            case 'GET_ACTIVITIES':
                return {
                    ...state,
                    activities: action.payload,
                }
            case 'GET_NAME_COUNTRY' :
                const chauNull = action.payload
                return {
                    ...state,
                    countries: chauNull
                }
            case 'POST_ACTIVITY': 
            return {
                ...state,
                }
            case 'FILTER_COUNTRIES_BY_ACTIVITIES' :
                const activitie2 = state.allCountries
                const activitiesBycountry = state.activities.find(a => a.id == action.payload)
                const render = action.payload === 'All' ? activitie2 : activitiesBycountry.countries
                //const activityBackUp = activitiesBycountry.countries 
                console.log(action.payload)
                return {
                    ...state,
                    countries: render
                }
            case 'COUNTRY_DETAILS' :
                return {
                    ...state,
                    details: action.payload
                }



                default:
                    return state;
                                 
            }
}

export default rootReducer;