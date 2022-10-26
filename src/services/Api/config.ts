import axios from 'axios';

const requestApi = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': 'ef2bd6bfb8mshbab8e069818d343p1f8668jsnc4dc6c77ef4d',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
});

export default requestApi;
