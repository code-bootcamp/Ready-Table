import React, { useContext, useState } from "react";
import { FETCH_USED_ITEMS } from "./search.queries";
import _ from "lodash";
import SearchUI from "./search.presenter";
import { useQuery } from "@apollo/client";
import { GlobalContext } from "../../../../App";

const SearchContainer = () => {
  const { setId, id } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [dataRes, setDataRes] = useState(null);
  const [dataToggle, setDataToggle] = useState(false);

  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      search: "",
      page: 1
    }
  });

  const getDebounce = _.debounce(data => {
    refetch({
      search: data,
      page: 1
    });
    setSearch(data);
  }, 500);

  function onChangeSearch(event: any) {
    getDebounce(event);
  }

  function onPressDetail(el: any) {
    setId(el._id);
    console.log("globalId: ", id);
    console.log("elId: ", el._id);
  }

  const onLoadMore = () => {
    if (!data) {
      return;
    }
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditem
          ]
        };
      }
    });
  };

  const searchAllTime = () => {
    setDataRes(data?.fetchUseditems);
  };

  const searchKoreaThema = () => {
    const result = data?.fetchUseditems.filter(el => {
      return Number(el.price) === 1;
    });
    setDataRes(result);
  };

  const searchWesternThema = () => {
    const result = data?.fetchUseditems.filter(el => {
      return Number(el.price) === 2;
    });
    setDataRes(result);
  };

  const searchFastFoodThema = () => {
    const result = data?.fetchUseditems.filter(el => {
      return Number(el.price) === 3;
    });
    setDataRes(result);
  };
  const searchChinaThema = () => {
    const result = data?.fetchUseditems.filter(el => {
      return Number(el.price) === 4;
    });
    setDataRes(result);
  };
  const searchSnackThema = () => {
    const result = data?.fetchUseditems.filter(el => {
      return Number(el.price) === 5;
    });
    setDataRes(result);
  };
  const searchJapanThema = () => {
    const result = data?.fetchUseditems.filter(el => {
      return Number(el.price) === 6;
    });
    setDataRes(result);
  };
  const searchLunchBoxThema = () => {
    const result = data?.fetchUseditems.filter(el => {
      return Number(el.price) === 7;
    });
    setDataRes(result);
  };

  return (
    <SearchUI
      data={data}
      onChangeSearch={onChangeSearch}
      onPressDetail={onPressDetail}
      onLoadMore={onLoadMore}
      searchAllTime={searchAllTime}
      searchKoreaThema={searchKoreaThema}
      searchWesternThema={searchWesternThema}
      searchFastFoodThema={searchFastFoodThema}
      searchChinaThema={searchChinaThema}
      searchSnackThema={searchSnackThema}
      searchJapanThema={searchJapanThema}
      searchLunchBoxThema={searchLunchBoxThema}
    />
  );
};

export default SearchContainer;
