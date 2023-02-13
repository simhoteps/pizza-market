import { PizzaItem } from "../../model/model";
import { postTypes } from "../actionTypes/postsTypes";

export interface PostsState {
  pending: boolean;
  posts: PizzaItem;
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: PizzaItem;
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
  param: string;
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure;
