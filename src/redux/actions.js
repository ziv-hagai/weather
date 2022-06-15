import { store } from '../index.js';
import dayApi from './jsons/dayApi.json';
import weekApi from './jsons/weekApi.json';
import searchApi from './jsons/searchApi.json';

// export const showDay = () => (dispatch) => {
//     dispatch({ type: 'DAY', payload: dayApi })
// }


// export const complete = (text) => (dispatch) => {
//     dispatch({ type: 'COMPLETE', payload: searchApi })
// }


// export const showWeek = () => (dispatch) => {
//     dispatch({ type: 'WEEK', payload: weekApi })
// }

export const showDay = () => (dispatch) => {
    fetch(`https://dataservice.accuweather.com/currentconditions/v1/${store.getState().cityKey}?apikey=2lLn3JAmY86Sjv1KNZuSLVad7G9yaWro`)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'DAY', payload: data })
        })
        .catch(e => {
            dispatch({ type: 'DAY', payload: [] })
        })
}

export const complete = (text) => (dispatch) => {
    fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=2lLn3JAmY86Sjv1KNZuSLVad7G9yaWro&q=${text}`)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'COMPLETE', payload: data })
        })
        .catch(e => {
            dispatch({ type: 'COMPLETE', payload: [] })
        })
}


export const showWeek = () => (dispatch) => {
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${store.getState().cityKey}?apikey=2lLn3JAmY86Sjv1KNZuSLVad7G9yaWro&metric=true`)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'WEEK', payload: data })
        })
        .catch(e => {
            dispatch({ type: 'WEEK', payload: [] })
        })
}


export const changeMetric = () => {
    return {
        type: 'METRIC',
    }
};

export const getLocal = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || []
    return {
        type: 'LOCAL', payload: favs
    }
};

export const choose = (city) => {
    return {
        type: 'CHOOSE',
        payload: city
    }
};
