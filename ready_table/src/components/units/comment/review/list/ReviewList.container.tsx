import { useMutation, useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { GlobalContext } from "../../../../../App";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs
} from "../../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS
} from "./ReviewList.queries";
import { IReviewListProps } from "./ReviewList.types";
// import { useForm } from "react-hook-form";
import ReviewListUIItem from "./ReviewList.presenterItem";
import { ListItemWrapper, Wrapper } from "./ReviewList.styles";
const ReviewList = (props: IReviewListProps) => {
  const [contents, setContents] = useState("");
  const [createReview] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  const { data: reviewdata } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: props.useditemId }
  });
  // const { handleSubmit, control, reset } = useForm({
  //   defaultValues: { contents: "" }
  // });
  const onReviewSubmit = async (data: any) => {
    try {
      await createReview({
        variables: {
          useditemId: props.useditemId,
          createUseditemQuestionInput: { contents }
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: props.useditemId
            }
          }
        ]
      });
      Alert.alert("댓글이 등록되었습니다.");
      reset({ contents: "" });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return (
    <Wrapper>
      {/* <WriteWrapper>리뷰를 작성해주세요</WriteWrapper> */}
      {reviewdata?.fetchUseditemQuestions.map(el => (
        <ListItemWrapper key={el._id}>
          <ReviewListUIItem
            el={el}
            reset={reset}
            data={reviewdata}
            handleSubmit={handleSubmit}
            control={control}
            onReviewSubmit={onReviewSubmit}
          />
        </ListItemWrapper>
      ))}
    </Wrapper>
  );
};
export default ReviewList;
function reset(arg0: { contents: string }) {
  throw new Error("Function not implemented.");
}
