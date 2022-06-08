export type InputGuestState = {
  [key in InputGuestType]: number;
};

export type InputGuestType = "adult" | "child" | "baby";

export type InputGuestActionType =
  | { type: "INCREASE_GUEST"; guestType: InputGuestType }
  | { type: "DECREASE_GUEST"; guestType: InputGuestType }
  | { type: "RESET_GUEST" };

export type InputGuestDispatches = {
  onIncreaseGuest: (guestType: InputGuestType) => void;
  onDecreaseGuest: (guestType: InputGuestType) => void;
  onResetGuest: () => void;
};
