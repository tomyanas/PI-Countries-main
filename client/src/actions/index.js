import axios from 'axios';

export function getCountries() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/api/country');
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
    });
  }
}

 export function getActivites() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/api/activities');
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: json.data
    });
  }
}


export function filterCountriesByContinent(payload) {
    return {
        type: 'FILTER_COUNTRIES_BY_CONTINENT',
        payload
    }
}



export function filterCountriesByOrderAbc(payload) {
    return {
        type: 'FILTER_COUNTRIES_BY_ORDER_ABC',
        payload
    }
}

export function filterCountriesByOrderPoblatinal(payload) {
    return {
        type: 'FILTER_COUNTRIES_BY_ORDER_POBLATINAL',
        payload
    }
}

export function getNameCountry(name) {
    return async function(dispatch) {
        try{ 
        var json = await axios.get('http://localhost:3001/api/country?name='+name);
        return dispatch({
            type: 'GET_NAME_COUNTRY',
            payload: json.data
    });
   } catch(e){
    console.log(e);
  }
}
}

export function postActivity(payload) {
    return async function(dispatch) {
        const response = await axios.post('http://localhost:3001/api/activities/activity', payload);
        return response;
}
}


