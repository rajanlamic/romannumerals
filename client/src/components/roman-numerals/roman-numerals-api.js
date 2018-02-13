import axios from 'axios';
import { apiRoutes, getHeaders } from "../../api-routes";

export const getRomanNumericals = () => {
	return axios.get(apiRoutes.romanNumerals, getHeaders());
}
