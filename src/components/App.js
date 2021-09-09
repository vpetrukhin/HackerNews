import { useEffect, useState } from "react";
import { Container, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import useInterval from "../hooks/useInterval";
import { fetchNews } from "../redux/actions/actionCreators";
import Header from "./Header";
import Main from "./Main";
import NewsPаge from "./newsPage";

function App() {
  const dispatch = useDispatch();
  const newsList = useSelector(state => (
    state.newsReducer.news.length > 99
    ? state.newsReducer.news
    : []
  ));

  const [updateDelay, setUpdateDelay] = useState(60000);

  const updateNewsList = () => dispatch(fetchNews());

  useInterval(updateNewsList, updateDelay);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Container className="" fluid>
            <Header updateHandler={updateNewsList} />
            <Main newsList={newsList || []} />
          </Container>
        </Route>
        <Route
          path="/news/:id"
          render={({ match }) => {
            setUpdateDelay(null);
            return <NewsPаge match={match} newsList={newsList} />;
        }}
        />
      </Switch>
    </div>
  );
}

export default App;
