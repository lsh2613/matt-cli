import { category, community } from "..";

function fetchCategory() {
  return community.get("/category");
}

function fetchaAllCommunity() {
  return community.get("");
}
function fetchByCommunityId(id) {
  return community.get(`/${id}`);
}

function createCommunity(data) {
  return community.post("/add", data);
}

function fetchByCategory(category) {
  return community.get(`/comByCategory?category=${category}`);
}

function deleteCommunity(id) {
  return community.patch(`/delete?communityId=${id}`);
}

function updateCommunity(data) {
  return community.patch(`/edit?communityId=${data.communityId}`, data);
}

function fetchByUser() {
  return community.get("/user");
}

//댓글
function createComment(communityId, content) {
  return community.post(`/${communityId}/comment/create?content=${content}`);
}

function updateComment(commentId, content) {
  return community.put(`comment/${commentId}/?content=${content}`);
}

function deleteComment(commentId) {
  return community.delete(`comment/${commentId}`);
}

export {
  fetchCategory,
  fetchaAllCommunity,
  fetchByCommunityId,
  createCommunity,
  fetchByCategory,
  deleteCommunity,
  updateCommunity,
  fetchByUser,
  createComment,
  updateComment,
  deleteComment,
};
