import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import SidebarUI from "./sidebar.presenter";
import { FETCH_USER_LOGGEDIN } from "./sidebar.queries";

export default function Sidebar() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const { accessToken } = useContext(GlobalContext);
  const isActive = router.pathname;

  function onClickMoveToDashboard() {
    router.push("./dashboard");
  }
  function onClickMoveToRegister() {
    router.push("./register");
  }
  function onClickMoveToProductstable() {
    router.push("/productstable");
  }
  function onClickMoveToModify() {
    router.push("/modify");
  }
  function onClickLogout() {
    localStorage.clear();
    alert("로그아웃 되었습니다.");
    router.push("/");
  }
  return (
    <SidebarUI
      onClickMoveToDashboard={onClickMoveToDashboard}
      onClickMoveToRegister={onClickMoveToRegister}
      onClickMoveToProductstable={onClickMoveToProductstable}
      onClickMoveToModify={onClickMoveToModify}
      onClickLogout={onClickLogout}
      accessToken={accessToken}
      isActive={isActive}
      data={data}
    />
  );
}
