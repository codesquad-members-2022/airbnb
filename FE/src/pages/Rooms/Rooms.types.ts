import { Dispatch, SetStateAction } from 'react';

export interface IRoomsOutletContext {
  setIsSearchShowing: Dispatch<SetStateAction<boolean>>;
}
