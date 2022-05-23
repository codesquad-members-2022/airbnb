export const mixin = {
  flexbox: ({ dir = 'row', jc = '', ai = '' }) => `
    display: flex;
    flex-direction: ${dir};
    justify-content: ${jc};
    align-items: ${ai};
  `,
};
