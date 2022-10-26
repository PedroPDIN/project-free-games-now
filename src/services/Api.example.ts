import axios from 'axios';
import { IGame, IGameId } from '../interfaces/Game.interface';

const URL_ALL_GAMES = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const URL_GAME_ID = 'https://free-to-play-games-database.p.rapidapi.com/api/game';

const headers = {
  'X-RapidAPI-Key': 'ef2bd6bfb8mshbab8e069818d343p1f8668jsnc4dc6c77ef4d',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
};

const getAllGames = (): Promise<IGame[]> => {
  const allGames = axios.get(URL_ALL_GAMES, { headers })
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return allGames;
};

const getGamesId = (id: string): Promise<IGameId> => {
  const getGame = axios.get(URL_GAME_ID, { params: { id }, headers })
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return getGame;
};

export {
  getAllGames,
  getGamesId,
};
