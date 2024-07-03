import {createContext, useContext, useState} from 'react';
import {ICharacter} from 'src/types/types';

export interface IAppContext {
  numOfColumns: number;
  setNumOfColumns: (numOfColumns: number) => void;
  favoriteCharacterIds: number[];
  setFavoriteCharacterId: (characterId: number) => void;
  characters: ICharacter[];
  setCharacters: (characters: ICharacter[]) => void;
  charactersPage: number;
  setCharactersPage: (page: number) => void;
  filterName: string;
  setFilterName: (name: string) => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
}

const defaultContext: IAppContext = {
  numOfColumns: 1,
  favoriteCharacterIds: [],
  setFavoriteCharacterId() {},
  setNumOfColumns() {},
  characters: [],
  setCharacters() {},
  charactersPage: 1,
  setCharactersPage() {},
  filterName: '',
  setFilterName() {},
  filterStatus: '',
  setFilterStatus() {},
};

const AppContext = createContext(defaultContext);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const [numOfColumns, setNumOfColumns] = useState(1);
  const [favoriteCharacterIds, setFavoriteCharacterIds] = useState<number[]>(
    [],
  );
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [charactersPage, setCharactersPage] = useState<number>(1);
  const [filterName, setFilterName] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');

  const setFavoriteCharacterId = (characterId: number) => {
    if (favoriteCharacterIds.includes(characterId)) {
      setFavoriteCharacterIds(
        favoriteCharacterIds.filter(
          favoriteCharacterId => favoriteCharacterId !== characterId,
        ),
      );

      return;
    }

    setFavoriteCharacterIds([...favoriteCharacterIds, characterId]);
  };

  return (
    <AppContext.Provider
      value={{
        numOfColumns,
        setNumOfColumns,
        favoriteCharacterIds,
        setFavoriteCharacterId,
        characters,
        setCharacters,
        charactersPage,
        setCharactersPage,
        filterName,
        setFilterName,
        filterStatus,
        setFilterStatus,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
