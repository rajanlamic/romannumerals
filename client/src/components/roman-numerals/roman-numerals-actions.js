import { ROMAN_NUMERALS } from './roman-numerals-constants';
import { getRomanNumericals } from './roman-numerals-api';

export const loadRomaNumerals = () => {
	return async dispatch => {
    try {
      await dispatch({
        type: ROMAN_NUMERALS.LOAD,
        payload: getRomanNumericals()
      });
	    } catch (err) {
	      console.log('error payload');
	    }
  }
}
