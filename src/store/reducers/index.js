import {combineReducers} from 'redux';
import {loadingReducer} from './loadingReducer';
import {errorReducer} from './errorReducer';
import {fetchReducer} from './fetchReducer';

export const rootReducer = combineReducers({
  pokemon: fetchReducer,
  isLoading: loadingReducer,
  isErrored: errorReducer
})