import requestApi from './config';
import { IGame } from '../../interfaces/Game.interface';

const getAllGames = () => {
  const allGames = requestApi.get<IGame[]>('/games');
  return allGames;
};

export default getAllGames;
