import {ICharacter} from 'src/types/types';

export type RootStackParamList = {
  ListScreen: undefined;
  DetailScreen: {
    item: ICharacter;
  };
};
