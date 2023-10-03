import axios from 'axios';
//axios.defaults.baseURL = 'https://taskpro.onrender.com';
axios.defaults.baseURL = 'http://localhost:3000';


export const sendEmailApi = async userEmail => {
  const { data } = await axios.post('/sendEmail', userEmail);
  return data.message;
};