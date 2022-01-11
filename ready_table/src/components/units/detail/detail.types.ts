import { GestureResponderEvent } from "react-native";

export interface IdetailProps {
  onPressCart: (event: GestureResponderEvent) => void;
  items: any;
  data: any;
}

export interface IProduct {}
