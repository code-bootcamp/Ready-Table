import { GestureResponderEvent } from "react-native";

export interface IdetailProps {

  onPressEndTime: (event: GestureResponderEvent) => void;
  onPressStartTime: (event: GestureResponderEvent) => void;
  el: any;
  onPressCart: any;
  data: any;
}

export interface IProduct {
  id: any;
  productName: string;
}
