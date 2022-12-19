import requestApi from './config';
import { IGame } from '../../interfaces/Game.interface';

const getAllGames = () => {
  const allGames = requestApi.get<IGame[]>('/games');
  return allGames;
};

const getAllGamesCategory = (category: string) => {
  const allGames = requestApi.get<IGame[]>('/games', {
    params: {
      category,
    },
  });

  return allGames;
};

export {
  getAllGames,
  getAllGamesCategory,
};
