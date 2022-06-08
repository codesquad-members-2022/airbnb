export interface DateType {
  year: number;
  month: number;
  day: number;
}

export interface EventType {
  target: any;
}

export interface FlexBoxPropertyType {
  justify?: string;
  align?: string;
  direction?: string;
  wrap?: string;
  grow?: string;
}

export interface FlexType extends FlexBoxPropertyType {
  flex: boolean;
}

export interface SearchBarContainerType extends FlexType {
  searchBarStyle?: string;
}
