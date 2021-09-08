import { HACKER_NEWS_API_BASE_URL } from "../../utils/constance";
import { FETCH_NEWS, SHOW_LOADER, HIDE_LOADER } from "./types";

export const fetchNews = () => {
  return (dispatch) => {
    const newsPayload = [];
    fetch(`${HACKER_NEWS_API_BASE_URL}/newstories.json?print=pretty`)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
      )
      .then((newsIdList) => {
        dispatch(showLoader());
        for (let i = 0; i < 100; i++) {
          const newsId = newsIdList[i];
          fetch(`${HACKER_NEWS_API_BASE_URL}/item/${newsId}.json?print=pretty`)
            .then((res) =>
              res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
            )
            .then((newsItem) => {
              newsPayload.push(newsItem);
              dispatch({
                type: FETCH_NEWS,
                payload: newsPayload
              });
              if (i === 99) dispatch(hideLoader());
            })
            .catch((err) => console.error(err));
        }
      })
      .catch((err) => console.error(err));
  };
};

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
