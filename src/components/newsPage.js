import React, { useEffect } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchRootComments } from '../redux/actions/actionCreators';
import { getDateFromUnixTime } from '../utils/utils';
import Comment from './Comment';

const NewsPаge = ({ match, newsList }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const card = newsList.find(item => {
    if (item) {
    return item.id === Number(id)
    }
  });

  useEffect(() => {
    if (card) {
      if ("kids" in card) dispatch(fetchRootComments(card.kids));
    }
  }, []);

  const rootCommentsList = useSelector(
        (state) => card
          ? state.newsReducer.rootComments[card.id]
          : []
      )

  if (card) {
    return (
      <Container className="bg-light p-2" fluid>
          <Row>
            <h1 className="text-center mb-3 text-dark">{card.title}</h1>
          </Row>
          <Row className="">
            <Col>
              <p className="text-center text-secondary">Автор: "{card.by}"</p>
            </Col>
            <Col>
              <p className="text-center text-secondary">{getDateFromUnixTime(card.time)}</p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <a href={card.url} className="d-block text-center text-info">
                Cсылка на статью
              </a>
            </Col>
            <Col>
              <Link to="/" className="d-block text-center text-info">
                К списку новостей
              </Link>
            </Col>
          </Row>

          <p>Колличество комментариев: {card.kids?.length}</p>
          <ListGroup>
            <Row>
              {rootCommentsList &&
                rootCommentsList.map((comment) => (
                  <Comment comment={comment} key={comment.id} />
                ))}
            </Row>
          </ListGroup>
        </Container>
    )
  } else { return (<Redirect to="/" exact />) }
}
export default NewsPаge;