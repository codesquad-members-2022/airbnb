/* eslint-disable react/prop-types */

export const ComposedProvider = ({ components, children }) => {
  return (
    <>
      {components?.reduceRight(
        (prev, Component) => (
          <Component>{prev}</Component>
        ),
        children,
      )}
    </>
  );
};
