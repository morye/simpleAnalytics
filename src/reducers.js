import { combineReducers } from 'redux';
import { FETCH_DATA, SET_YEAR, VIEW_GRID } from './actions';

const apiData = (state = {}, action) => {
  if (action.type === FETCH_DATA) {
    return Object.assign({}, state, {
      data: action.payload
    });
  }
  return state;
};

const fiscalYear = (state = { year: 'All' }, action) => {
  if (action.type === SET_YEAR) {
    return Object.assign({}, state, {
      year: action.year
    });
  }
  return state;
};

const viewProduct = (state = { product: '' }, action) => {
  if (action.type === VIEW_GRID) {
    return Object.assign({}, state, {
      product: action.product
    });
  }
  return state;
};

const rootReducer = combineReducers({
  apiData,
  fiscalYear,
  viewProduct
});

export default rootReducer;
