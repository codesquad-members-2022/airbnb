import { useContext } from "react";
import { ModalContext, CheckModalContext } from "Context";
import { StyledModal, StyledModalWrapper, Background } from "./Modal.styled";
import GuestsDetail from "./GuestsDetail";
import PriceDetail from "./PriceDetail/PriceDetail";
import CalendarDetail from "./CalendarDetail/CalendarDetail";
import ModalPortal from "./Portal";

const Modal = () => {
	const modal = useContext(ModalContext);
	const checkModal = useContext(CheckModalContext);
	const details = {
		guest: <GuestsDetail />,
		price: <PriceDetail />,
		checkin: <CalendarDetail />,
		checkout: <CalendarDetail />,
		empty: null,
	};
	const ModalDetail = details[modal];

	const handleModalPopup = () => {
		if (modal !== "empty") checkModal("empty");
	};

	return (
		<ModalPortal>
			<Background onClick={handleModalPopup}>
				<StyledModalWrapper>
					<StyledModal modal={modal} onClick={(event) => event.stopPropagation()}>
						{ModalDetail}
					</StyledModal>
				</StyledModalWrapper>
			</Background>
		</ModalPortal>
	);
};

export default Modal;
