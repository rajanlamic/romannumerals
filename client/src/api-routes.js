window.apiEndPoint = 'http://localhost:3001/api';
window.upperLimit = 3999;

export function getHeaders() {
  return {
    'headers': {
      'any': 'headers',
    }
  }
}

export const apiRoutes = {
  romanNumerals: `${window.apiEndPoint}/romannumerals/${window.upperLimit ? window.upperLimit : ''}`,
}
