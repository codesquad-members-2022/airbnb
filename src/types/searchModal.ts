export type SearchModalType = "PERIOD" | "PRICE" | "PERSONNEL";

export type SearchModalState = {
  openedModal: SearchModalType | null;
};

export type SearchModalActionType = { type: SearchModalType | "OFF" };

export type SearchModalDispatches = {
  onOpenSearchModal(searchModal: SearchModalType): void;
  onCloseSearchModal(): void;
};
