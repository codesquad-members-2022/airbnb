export interface CalendarModalBtnsProps {
  btn: {
    id: number;
    src: string;
    alt: string;
    className: string;
    carouselUnit: number;
  };
  handleClickButton: () => void;
}
