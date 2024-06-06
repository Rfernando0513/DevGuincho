import React from 'react';
import { Card as BootstrapCard, CardGroup } from 'react-bootstrap';
import './CardComponent.css';

const CardComponent = ({ comment }) => {
  if (!comment) return <div>Loading...</div>;

  return (
    <div className="col-sm-4 .cardComment">
      <CardGroup className="cardComponent">
        <BootstrapCard>
          <BootstrapCard.Body className="text-center">
            <img src={comment.photo} alt={comment.name} className=" logoCard" height={137} width={137} />
            <BootstrapCard.Title className="card-title">{comment.name}</BootstrapCard.Title>
            <BootstrapCard.Text className="card-text">{comment.text}</BootstrapCard.Text>
            <div className="rating">
              <span style={{ fontSize: '30px' }}>{'⭐'.repeat(comment.rating)}</span>
            </div>
          </BootstrapCard.Body>
        </BootstrapCard>
      </CardGroup>
    </div>
  );
};

export default CardComponent;