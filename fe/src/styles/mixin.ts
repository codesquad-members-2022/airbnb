export const mixin = {
  flexbox: ({ dir = 'row', jc = '', ai = '' }) => `
    display: flex;
    flex-direction: ${dir};
    justify-content: ${jc};
    align-items: ${ai};
  `,

  defaultButtonTransition: () => `
    transition: opacity 300ms;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.7;
    }
  `,
};
