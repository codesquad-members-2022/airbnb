import { createContext } from 'react';

import { IPersonnelContext } from 'contexts/personnelcontext/personnelContext.types';

export const PersonnelContext = createContext<IPersonnelContext>({
  personnelState: { adult: 0, child: 0, infant: 0 },
  personnelDispatch: () => {
    return {};
  },
});
