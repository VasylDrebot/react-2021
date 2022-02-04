import axios from 'axios';

import baseURL from '../constants/urlsPlaceholder';

export const axiosService = axios.create({baseURL});