import axios from 'axios';
import { FETCH_DATA, SET_YEAR } from './actions';

export function selectFiscalYear(year) {
  return { type: SET_YEAR, year: year };
}

export function addApiData(apiData) {
  return { type: FETCH_DATA, payload: apiData };
}

export function getAPIData() {
	console.log(window.location);
  return dispatch => {
    axios.get('./public/json/sample_data.json').then(response => {
      dispatch(addApiData(response.data));
    });
  };
}
