import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
const HomeContainer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [myPickData, setMyPickData] = useState([]);
  // const (setId, setTagId) = useContext(GlobalContext)

  const onPressMoreRestaurant = () => {
    setIsEdit(true);
  };

  const onPressCloseRestaurant = () => {
    setIsEdit(false);
  };

  const { data } = useQuery;
};
