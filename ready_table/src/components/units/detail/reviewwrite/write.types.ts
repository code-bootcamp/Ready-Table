import { GestureResponderEvent } from "react-native";

export interface IWritePorps {
  onClickRegisterReview: (event: GestureResponderEvent) => void;
  onChangeContents: (text: string) => void;
  myStar: number;
  setMyStar: any;
  data: any;
}
