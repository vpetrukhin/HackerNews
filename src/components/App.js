import { useEffect } from "react";
import { Container, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
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

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Container className="" fluid>
            <Header />
            <Main newsList={newsList || []} />
          </Container>
        </Route>
        <Route
          path="/news/:id"
          render={({ match }) => <NewsPаge match={match} newsList={newsList} />}
        />
      </Switch>
    </div>
  );
}

export default App;
