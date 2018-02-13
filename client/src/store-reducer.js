import { combineReducers } from 'redux';
import romanNumerals from './components/roman-numerals/roman-numerals-reducer';

const CombinedReducers = combineReducers({
  romanNumerals
});

export default CombinedReducers;