import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS_COUNT_I_SOLD,
  FETCH_USER_LOGGEDIN,
} from "./adminDashBoard.queries";
import AdminDashboardUI from "./adminDashBoard.presenter";

export default function AdminDashboard() {
  const { data: amountData } = useQuery(FETCH_USER_LOGGEDIN);
  const { data: productCountData } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);
  return (
    <AdminDashboardUI
      amountData={amountData}
      productCountData={productCountData}
    />
  );
}
