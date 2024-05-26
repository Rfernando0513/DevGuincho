import React from 'react';
import { Button } from 'react-bootstrap';

const ChangeCommentButton = ({ onClick, icon }) => (
  <Button variant="primary" onClick={onClick}>
    <i className={icon}></i>
  </Button>
);

export default ChangeCommentButton;
