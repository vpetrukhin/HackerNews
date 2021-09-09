import { HACKER_NEWS_API_BASE_URL } from "../../utils/constance";
import { FETCH_NEWS, SHOW_LOADER, HIDE_LOADER, FETCH_ROOT_COMMENTS, FETCH_CHILD_COMMENTS } from "./types";

const getResponce = res => (res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))

export const fetchNews = () => {
  return (dispatch) => {
    const newsPayload = [];
    fetch(`${HACKER_NEWS_API_BASE_URL}/newstories.json?print=pretty`)
      .then((res) => getResponce(res))
      .then((newsIdList) => {
        dispatch(showLoader());
        for (let i = 0; i < 100; i++) {
          const newsId = newsIdList[i];
          fetch(`${HACKER_NEWS_API_BASE_URL}/item/${newsId}.json?print=pretty`)
            .then((res) => getResponce(res))
            .then((newsItem) => {
              newsPayload.push(newsItem);
              dispatch({
                type: FETCH_NEWS,
                payload: newsPayload,
              });
              if (i === 99) dispatch(hideLoader());
            })
            .catch((err) => console.error(err));
        }
      })
      .catch((err) => console.error(err));
  };
};

export const fetchRootComments = (commentsIdsList) => {
  return (dispatch) => {
    const rootCommentsArray = [];
    dispatch(showLoader());
    commentsIdsList.forEach((commentId, index) => {
      fetch(`${HACKER_NEWS_API_BASE_URL}/item/${commentId}.json?print=pretty`)
        .then(res => (getResponce(res)))
        .then(rootCommentData => {
          if (rootCommentData) {
            rootCommentsArray.push(rootCommentData);
            const rootCommentsPayload = {
              [rootCommentData.parent]: rootCommentsArray,
            };
            if (index === commentsIdsList.length - 1) {
              dispatch(hideLoader());
              dispatch({
                type: FETCH_ROOT_COMMENTS,
                payload: rootCommentsPayload,
              });
            };
          };
        })
        .catch(err => console.error(err));
    });
    
  }
}

export const fetchChildComments = commentsIdsList => {
  return (dispatch) => {
    const childCommentPayload = [];
    commentsIdsList.forEach((childCommentId, index) => {
      fetch(`${HACKER_NEWS_API_BASE_URL}/item/${childCommentId}.json?print=pretty`)
        .then(res => getResponce(res))
        .then(childCommentData => {
          if (childCommentData) {
            childCommentPayload.push(childCommentData);
            if (index === commentsIdsList.length -1) {
              dispatch({
                type: FETCH_CHILD_COMMENTS,
                payload: childCommentPayload,
              })
            }
          }
        })
        .catch(err => console.error(err));
    })
  
    
  }
}

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
