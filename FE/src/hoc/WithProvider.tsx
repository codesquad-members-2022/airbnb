import React from 'react';

import { PeriodAreaTypes } from '@components/SearchBar/PeriodArea';

interface WithProviderTypes {
  Component: React.FC<ComponentTypes>;
  Provider: React.FC<ProviderTypes>;
}

interface ProviderTypes {
  children: JSX.Element;
}

type ComponentTypes = PeriodAreaTypes;

const WithProvider = ({ Component, Provider }: WithProviderTypes) => {
  return (props: ComponentTypes) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
};

export default WithProvider;
