import { FETCH_NEWS, HIDE_LOADER, SHOW_LOADER } from "../actions/types";

const initialNewsState = {
  isLoading: false,
  news: [],
}

const newsReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {...state, news: action.payload};
    case SHOW_LOADER:
      return {...state, isLoading: true};
    case HIDE_LOADER:
      return {...state, isLoading: false};
    case 
    default:
      return state;
  }
}

export default newsReducer;