import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";
export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = await apiRequest("/posts?" + query);
  // const res = await apiRequest("/posts/" + params.id);
  return defer({
    postResponse: postPromise,
  });
};
