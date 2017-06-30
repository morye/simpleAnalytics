import axios from 'axios';
import { FETCH_DATA, SET_YEAR, VIEW_GRID } from './actions';

export function selectFiscalYear(year) {
  return { type: SET_YEAR, year: year };
}

export function addApiData(apiData) {
  return { type: FETCH_DATA, payload: apiData };
}

export function viewGridByProduct(product) {
  return { type: VIEW_GRID, product: product };
}

export function getAPIData() {
  return dispatch => {
    axios.get('/data').then(response => {
      dispatch(addApiData(response.data));
    });
  };
}
