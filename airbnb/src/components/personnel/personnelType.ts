export type GuestInfosType = {
  title: string;
  desc: string;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}[];


type GuestTitle = {
  title: string
}

export type GuestAgeProps = GuestTitle & {
  desc: string;
};

export type GuestNumProps = GuestTitle & {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

export type GuestItemProps = GuestNumProps & {
  desc: string;
};