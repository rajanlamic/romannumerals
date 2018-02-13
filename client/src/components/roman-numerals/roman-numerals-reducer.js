import { ROMAN_NUMERALS, defaultState } from './roman-numerals-constants';

export default function romanNumerals(state = defaultState, action) {

  switch (action.type) {

    case `${ROMAN_NUMERALS.LOAD}_PENDING`:
      return {
        ...state,
        ...{
          isFetchig: true,
        }
      }
      case `${ROMAN_NUMERALS.LOAD}_REJECTED`:
      return {
        ...state,
        ...{
          isFetchig: false,
          isFetched: false,
          isFailed: true
        }
      }

    case `${ROMAN_NUMERALS.LOAD}_FULFILLED`:
      return {
        ...state,
        ...{
          isFetchig: false,
          isFetched: true,
          data:action.payload.data
        }
      } 

    default:
      return state;
  }
}
