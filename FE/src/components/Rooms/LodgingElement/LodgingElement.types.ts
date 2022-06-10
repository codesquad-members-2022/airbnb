export interface ILodgingElementProps {
  lodgingData: {
    address: string;
    id: number;
    imageUrl: string;
    price: number;
    provides: {
      name: string;
      count: number;
    }[];
    title: string;
    wish: {
      id: number;
      accommodationId: number;
      memberId: number;
    } | null;
    x: number;
    y: number;
  };
  isFetching: boolean;
}
