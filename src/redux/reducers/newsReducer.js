import { FETCH_CHILD_COMMENTS, FETCH_NEWS, FETCH_ROOT_COMMENTS, HIDE_LOADER, SHOW_LOADER } from "../actions/types";

const initialNewsState = {
  isLoading: false,
  news: [],
  rootComments: {},
  childComments: [],
}

const newsReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {...state, news: action.payload};
    case SHOW_LOADER:
      return {...state, isLoading: true};
    case HIDE_LOADER:
      return {...state, isLoading: false};
    case FETCH_ROOT_COMMENTS:
      return {...state, rootComments: action.payload };
    case FETCH_CHILD_COMMENTS:
      return {...state, childComments: action.payload};
    default:
      return state;
  };
};


export default newsReducer;