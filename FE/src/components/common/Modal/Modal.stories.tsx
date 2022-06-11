import Modal, { MODAL_POSITION, ModalPropsTypes } from '@components/common/Modal';
import * as S from '@components/common/Modal/Modal.style';

export default {
  title: 'Common/Modal',
  component: Modal,
  args: {
    position: MODAL_POSITION.LEFT,
  },
  argTypes: {
    position: {
      control: {
        type: 'radio',
      },
      options: [MODAL_POSITION.LEFT, MODAL_POSITION.RIGHT, MODAL_POSITION.CENTER],
    },
  },
};

export const Default = (args: ModalPropsTypes) => {
  const element = document.getElementById('root') as HTMLElement;
  element.style.position = 'relative';

  return (
    <S.StoryContainer>
      Element
      <Modal {...args} />
    </S.StoryContainer>
  );
};
