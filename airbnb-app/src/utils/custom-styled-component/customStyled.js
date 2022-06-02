import React, { useRef, useEffect } from 'react';
import { useTheme } from './useTheme';
import domElements from './domElements';

const customStyled =
  TargetComponent =>
  (strs, ...exprs) =>
  props => {
    const theme = useTheme();
    const newProps = {...props, theme};
    const elementRef = useRef(null);

    useEffect(() => {
      const style = exprs.reduce((result, expr, index) => {
        const isFunc = typeof expr === 'function';
        const value = isFunc ? expr(newProps) : expr;

        return result + value + strs[index + 1];
      }, strs[0]);

      elementRef.current.setAttribute('style', style);
    });

    return <TargetComponent {...props} ref={elementRef} />;
  };

domElements.forEach(domElement => (customStyled[domElement] = customStyled(domElement)));

export default customStyled;