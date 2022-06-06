import React from 'react';

import { PeriodAreaTypes } from '@components/SearchBar/PeriodArea';
import { PriceAreaTypes } from '@components/SearchBar/PriceArea';

interface WithProviderTypes {
  Component: React.FC<ComponentTypes>;
  Provider: React.FC<ProviderTypes>;
}

interface ProviderTypes {
  children: JSX.Element;
}

type ComponentTypes = PriceAreaTypes | PeriodAreaTypes;

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
