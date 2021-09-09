import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDateFromUnixTime } from '../utils/utils';

const NewsCard = ({ card }) => {
  const { title, score, by, time, id} = card;

  
  return (
    <Card className="w-100 h-100">
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/news/${id}`}>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Рейтинг: {score}</Card.Subtitle>
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