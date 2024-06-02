import React, { useState, useEffect } from 'react';
import { busca } from '../../../api/api.js';
import CardComponent from '../CardComponent/CardComponent.jsx';
import ChangeCommentButton from '../ChangeCommentButton/ChangeCommentButton.jsx';
import './MainComponent.css';
import * as Icon from 'react-bootstrap-icons';

const MainComponent = () => {
  const [comments, setComments] = useState([]);
  const [currentIndices, setCurrentIndices] = useState([0, 1]);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await busca('comments');
      setComments(data);
    };

    fetchData();
  }, []);

  const changeComment = (dir) => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndices((prevIndices) => {
        const newIndex1 = (prevIndices[0] + dir + comments.length) % comments.length;
        const newIndex2 = (prevIndices[1] + dir + comments.length) % comments.length;
        return [newIndex1, newIndex2];
      });
      setDirection(null);
    }, 500); 
  };

  if (comments.length === 0) return <div>Loading...</div>;

  const currentComment1 = comments[currentIndices[0]];
  const currentComment2 = comments[currentIndices[1]];

  return (
    <div className="carousel-container">
      <ChangeCommentButton onClick={() => changeComment(1)} icon={<Icon.ChevronLeft size={50} />} />
      <div className={`carousel ${direction ? `carousel-${direction === 1 ? 'right' : 'left'}` : ''}`}>
        <CardComponent comment={currentComment1} />
        <CardComponent comment={currentComment2} />
      </div>
      <ChangeCommentButton onClick={() => changeComment(-1)} icon={<Icon.ChevronRight size={50} style={{ marginLeft: '30px' }}/>} />
    </div>
  );
};

export default MainComponent;
