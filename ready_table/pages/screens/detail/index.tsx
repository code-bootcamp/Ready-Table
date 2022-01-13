import React from "react";
import DetailHeader from "../../../src/components/units/detail/detail.header";
import DetailContainer from "../../../src/components/units/detail/detail.container";

import DetailReviewContainer from "../../../src/components/units/detail/reviewlist/reviewlist.container";
import UserWriteContainer from "../../../src/components/units/detail/reviewwrite/write.container";

const DetailScreen = () => {
  return (
    <>
      <DetailHeader />

      <DetailContainer />
      {/* <UserWriteContainer /> */}
      {/* <DetailReviewContainer /> */}
    </>
  );
};

export default DetailScreen;
