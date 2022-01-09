import { GestureResponderEvent } from "react-native";
import { IQuery, IUseditem } from "../../commons/types/generated/types";

export interface IdetailProps {
  onPressCart: (event: GestureResponderEvent) => void;
  onClickBasket: readonly Readonly<{ name: string; label?: string }>[];
  items: Pick<IQuery, "fetchUseditems">;
  data: any;
  el: IUseditem;
}

export interface IProduct {
  productName: string;
  productContents: string;
  productPrice: number;
  seller: string;
  id: any;
  images: any;
}
