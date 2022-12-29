import apiClient from "./client";

export const getPosts = async (tag) => {
  const response = await apiClient.get(`/posts?tag=${tag}`);

  return response.data;
};

export const getPost = async (postId) => {
  const response = await apiClient.post(`/posts/${postId}`);

  return response.data;
};

export const createPost = async (props) => {
  const { accountId, pw, title, content, tag } = props;
  const response = await apiClient.post(`/posts?tag=${tag}`, { accountId, pw, title, content });

  return response.data;
};

export const deletePost = async (props) => {
  const { postId, pw } = props;
  const response = await apiClient.delete(`/posts/${postId}?pw=${pw}`);

  return response.data;
};
