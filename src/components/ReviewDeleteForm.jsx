import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import useInput from "../hook/useInput";
import useToggle from "../hook/useToggle";
import { deletePost } from "../lib/api/post";

const ReviewDeleteForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { postId } = props;
  const [toggle, onChangeToggle] = useToggle();
  const [pw, onChangePw] = useInput();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => deletePost({ postId, pw }), {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
    onError: () => {
      // eslint-disable-next-line no-alert
      alert("다시 시도해 주세요");
    },
  });

  return (
    <>
      <button onClick={onChangeToggle}>삭제</button>
      {toggle && (
        <Box>
          내용:
          <Input
            type="password"
            value={pw}
            onChange={onChangePw}
            placeholder="입력하신 패스워드를 입력하세요"
          />
          <button onClick={mutate}>삭제 완료하기</button>
        </Box>
      )}
    </>
  );
};

const Input = styled.input`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  border: 1px solid #e5e5e5;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ReviewDeleteForm;
