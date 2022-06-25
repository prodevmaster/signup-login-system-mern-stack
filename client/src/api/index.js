import axios from "axios";
axios.defaults.withCredentials = true;
const URL = "http://localhost:3001";

export const signup = (body) => axios.post(`${URL}/signup`, body);
export const login = (body) => axios.post(`${URL}/login`, body);
export const logout = () => axios.get(`${URL}/logout`);
