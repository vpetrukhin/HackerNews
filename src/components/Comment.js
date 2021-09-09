import React from 'react';
import { useState } from 'react';
import { ListGroup, Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchChildComments } from '../redux/actions/actionCreators';
import { getDateFromUnixTime } from '../utils/utils';

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const childCommentsList = useSelector(
    (state) => state.newsReducer.childComments
  );

  const [isActiveChildCommentList, setIsActiveChildCommentList] = useState(false);
  
  const childCommentHandler = () => {
    if ('kids' in comment) {
      dispatch(fetchChildComments(comment.kids));
      setIsActiveChildCommentList(!isActiveChildCommentList);
    }
  }

  return (
    <ListGroup.Item
      onClick={childCommentHandler}
      aria-controls="childCommentsList"
      aria-expanded={isActiveChildCommentList}
    >
      <h3>{comment.by}</h3>
      <p>{comment.text}</p>
      <p>{getDateFromUnixTime(comment.time)}</p>
      <Collapse in={isActiveChildCommentList}>
        <ListGroup id="childCommentsList">
          {childCommentsList.map((item) => (
            <ListGroup.Item key={item.id}>
              <h3>{item.by}</h3>
              <p>{item.text}</p>
              <p>{getDateFromUnixTime(item.time)}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Collapse>
    </ListGroup.Item>
  );
}
export default Comment;