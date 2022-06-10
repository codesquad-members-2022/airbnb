import React from 'react';
import ModalPortal from 'Portal';
import Personnel from 'components/Modal/Personnel/Personnel';
import { useAddSearch, useSearch } from 'context/SearchProvider';
import Period from 'components/Modal/Period/Period';
import Price from 'components/Modal/Price/Price';
import { BackGround, ModalBlock } from './Modal.styled';

export default function Modal({
  shown,
  onClose,
  content,
}: {
  shown: boolean;
  onClose: () => void;
  content: string;
}): JSX.Element {
  const search = useSearch();
  const addSearch = useAddSearch();

  const stopMouseEventPropagation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const modal = {
    period: { size: { width: 916 }, element: Period },
    price: { size: { width: 493 }, element: Price },
    personnel: { size: { width: 400 }, element: Personnel },
  };

  const Element = modal[content].element;

  return (
    <ModalPortal>
      {shown && (
        <BackGround
          role="button"
          tabIndex={0}
          className="ModalBackGround"
          onClick={(event) => {
            onClose();
            stopMouseEventPropagation(event);
          }}
        >
          <ModalBlock onClick={stopMouseEventPropagation} width={modal[content].size.width}>
            <Element search={search[content]} addSearch={addSearch} />
          </ModalBlock>
        </BackGround>
      )}
    </ModalPortal>
  );
}
