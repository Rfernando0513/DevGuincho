import React from 'react';
import './ChangeCommentButton.css';



const ChangeCommentButton = ({ onClick, icon }) => (
  <button className="changeCommentButton" onClick={onClick}>
    {icon}
  </button>
);

export default ChangeCommentButton;
