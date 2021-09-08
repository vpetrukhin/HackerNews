import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ card }) => {
  const { title, score, by, time, id} = card;

  const getDateFromUnixTime = time => {
    const date = new Date(time * 1000);
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
  };
  
  return (
    <Card className="w-100 h-100">
      <Link to={`/news/${id}`}>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{score}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>{by}</Card.Text>
          <Card.Text>{getDateFromUnixTime(time)}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
export default NewsCard;