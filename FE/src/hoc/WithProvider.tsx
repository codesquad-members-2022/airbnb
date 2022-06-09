import React from 'react';

interface WithProviderTypes<T> {
  Component: React.FC<T>;
  Provider: React.FC<ProviderTypes>;
}

interface ProviderTypes {
  children: JSX.Element;
}

const WithProvider = <T,>({ Component, Provider }: WithProviderTypes<T>) => {
  return (props: T) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
};

export default WithProvider;
