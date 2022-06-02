/* eslint-disable react/prop-types */

export const ComposedProivider = ({ components, children }) => {
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
