import { category, community } from "..";

function fetchCategory() {
  return community.get("/category");
}

function fetchaAllCommunity() {
  return community.get("");
}
function fetchaByCommunityId(id) {
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

export {
  fetchCategory,
  fetchaAllCommunity,
  fetchaByCommunityId,
  createCommunity,
  fetchByCategory,
  deleteCommunity,
  updateCommunity,
  fetchByUser,
};
