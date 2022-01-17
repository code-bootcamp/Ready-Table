import { GestureResponderEvent } from "react-native";

export interface IdetailProps {
  review: any;
  onPressWrite(el: any);
  el: any;
  onPressCart: any;

  data: any;
}

export interface IProduct {
  id: any;
  productName: string;
}
