import axios from 'axios';

export const getRequestInstance = () => {
  const requestInstance = axios.create({
    baseURL: 'https://beta.autobooking.com/api/test/v1/'
  });

  requestInstance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return requestInstance;
};
