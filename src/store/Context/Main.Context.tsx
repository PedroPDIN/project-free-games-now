import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { IGame } from '../../interfaces/Game.interface';
import { getAllGames } from '../../services/Api';
import fisherYates from '../../utils/randomArray';

interface DataType {
  listGames: IGame[] | [];
  setListGames: React.Dispatch<React.SetStateAction<IGame[]>>,
  gamesLike: IGame[] | [];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>,
  currentPlatform: string;
  setCurrentPlatform: React.Dispatch<React.SetStateAction<string>>,
}

interface Props {
  children: ReactNode
}

// Context ======================================================================>
const MainContext = createContext({} as DataType);

// Provider =====================================================================>
export function MainContextProvider({ children }: Props) {
  const [listGames, setListGames] = useState<IGame[]>([]);
  const [gamesLike, setGamesLike] = useState<IGame[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [currentPlatform, setCurrentPlatform] = useState<string>('');

  useEffect(() => {
    getAllGames().then((res) => setListGames(res.data));
  }, []);

  useEffect(() => {
    const listLength: number = listGames.length;
    const arrRandom: number[] = fisherYates(listLength);

    for (let i = 0; i < arrRandom.length; i += 1) {
      setGamesLike((prevGame) => [...prevGame, listGames[arrRandom[i]]]);
    }
  }, [listGames]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const Content = {
    listGames,
    setListGames,
    gamesLike,
    currentCategory,
    setCurrentCategory,
    currentPlatform,
    setCurrentPlatform,
  };

  return (
    <MainContext.Provider value={ Content }>
      { children }
    </MainContext.Provider>
  );
}

export default MainContext;
