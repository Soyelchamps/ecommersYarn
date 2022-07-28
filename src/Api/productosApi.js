import axios from "axios";

const BaseURL= 'https://ecomerce-master.herokuapp.com/api/v1'

export const productosApi = axios.create({baseURL:BaseURL})