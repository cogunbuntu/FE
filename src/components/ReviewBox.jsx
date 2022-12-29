/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { getPosts } from "../lib/api/post";
import ReviewDeleteForm from "./ReviewDeleteForm";

const ReviewBox = (props) => {
  const { tag } = props;
  const { data: reviews, isLoading } = useQuery(["posts", tag], () => getPosts(tag), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (!reviews || isLoading) {
    return <Container>리뷰가 없습니다</Container>;
  }

  return (
    <Container>
      <Title> 리뷰</Title>
      <h1>
        {reviews.data.map((post) => (
          <ReviewLine key={post.postId}>
            <div>
              <Title>{post.title}</Title>
              <div>{post.content}</div>
            </div>
            <div>
              <ReviewDeleteForm postId={post.postId} />
            </div>
          </ReviewLine>
        ))}
      </h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #e5e5e5;
`;

const ReviewLine = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export default ReviewBox;
