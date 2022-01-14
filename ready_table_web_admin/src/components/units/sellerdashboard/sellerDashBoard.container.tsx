import { useQuery } from "@apollo/client";
import {
  FETCH_USER_LOGGEDIN,
  FETCH_USED_ITEMS_COUNT_I_SOLD,
} from "./sellerDashBoard.queries";
import DashboardUI from "./sellerDashBoard.presenter";

export default function SellerDashBoard() {
  const { data: amountData } = useQuery(FETCH_USER_LOGGEDIN);
  const { data: productCountData } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);

  return (
    <DashboardUI amountData={amountData} productCountData={productCountData} />
  );
}
