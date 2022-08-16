import Axios from 'axios'
export const nasaApi = Axios.create({
  baseURL: 'https://bcw-getter.herokuapp.com',
  timeout: 4000,
  params: {
    url: 'https://api.nasa.gov/planetary/apod',
    api_key: 'jZacntog0X5xMwam4Bdh7qVdmis6LhqI7ZlpGWpe'
  }
})


// https://api.nasa.gov/planetary/apod?api_key=jZacntog0X5xMwam4Bdh7qVdmis6LhqI7ZlpGWpe