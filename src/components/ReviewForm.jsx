/* eslint-disable no-alert */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import styled from "styled-components";
import useInput from "../hook/useInput";
import { createPost } from "../lib/api/post";

const ReviewForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { tag } = props;
  const queryClient = useQueryClient();
  const [accountId, onChangeAccountId] = useInput();
  const [pw, onChangePw] = useInput();
  const [title, onChangeTitle] = useInput();
  const [content, onChangeContent] = useInput();

  const { mutate: createReview } = useMutation(
    () => createPost({ accountId, pw, title, content, tag }),
    {
      onSuccess: () => {
        alert("댓글 작성 완료");
        queryClient.invalidateQueries("posts");
      },
      onError: () => {
        alert("다시 시도해 주세요");
      },
    },
  );

  return (
    <Container>
      <Title> 리뷰작성</Title>
      <AuthLine>
        닉네임:
        <LightInput
          type="text"
          value={accountId}
          onChange={onChangeAccountId}
          placeholder="닉네임을 입력하세요"
        />
        패스워드:
        <LightInput
          type="password"
          value={pw}
          onChange={onChangePw}
          placeholder="리뷰 제목을 입력하세요"
        />
      </AuthLine>
      <ReviewLine>
        제목:
        <Input
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="리뷰 제목을 입력하세요"
        />
        내용:
        <Input
          type="text"
          value={content}
          onChange={onChangeContent}
          placeholder="내용을 입력하세요"
        />
        <Button onClick={createReview}>등록</Button>
      </ReviewLine>
    </Container>
  );
};

const AuthLine = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Container = styled.div`
  width: 640px;
  padding: 20px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
`;

const ReviewLine = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
`;

const Input = styled.textarea`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  border: 1px solid #e5e5e5;
`;

const LightInput = styled.input`
  font-size: 12px;
  margin-bottom: 12px;
  border: 1px solid #e5e5e5;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  border: 1px solid #e5e5e5;
  background-color: #e5e5e5;
  cursor: pointer;
  &:hover {
    background-color: #b6b6b6;
  }
`;

export default memo(ReviewForm);
