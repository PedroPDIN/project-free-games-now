import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { IGame } from '../../interfaces/Game.interface';
import getAllGames from '../../services/Api';

interface DataType {
  listGames: IGame[] | [];
  setListGames: React.Dispatch<React.SetStateAction<IGame[]>>
}

interface Props {
  children: ReactNode
}

// Context ========>
const MainContext = createContext({} as DataType);

// Provider =======>
export function MainContextProvider({ children }: Props) {
  const [listGames, setListGames] = useState<IGame[]>([]);

  useEffect(() => {
    getAllGames().then((res) => setListGames(res.data));
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const Content = {
    listGames,
    setListGames,
  };

  return (
    <MainContext.Provider value={ Content }>
      { children }
    </MainContext.Provider>
  );
}

export default MainContext;
