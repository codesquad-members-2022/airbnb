import styled from 'styled-components';

export const PriceModal = styled.div`
  width: 493px;
  height: 364px;
  padding: 52px 64px 75px;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 16px;
`;

export const PriceRange = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-bottom: 4px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.grey3};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-bottom: 37px;
`;

export const PersonnelModal = styled.div`
  width: 400px;
  height: 355px;
  padding: 40px 64px;
`;

export const PersonnelListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;

  &:not(:last-of-type) {
    margin-bottom: 1px solid ${({ theme }) => theme.color.grey5};
  }

  ${Title}, ${Description} {
    margin-bottom: 0;
  }
`;

export const TextArea = styled.div``;

export const CountArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 116px;
`;

export const PersonnelCount = styled.span`
  position: relative;
  top: 2px;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.5rem;
`;

export const CountButton = styled.button`
  width: 36px;
  height: 36px;
`;
