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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const fetchData = async () => {
      const data = await busca('comments');
      setComments(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
      if (window.innerWidth > 450) {
        setCurrentIndices([0, 1]);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeComment = (dir) => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndices((prevIndices) => {
        if (isMobile) {
          const newIndex = (prevIndices[0] + dir + comments.length) % comments.length;
          return [newIndex];
        } else {
          const newIndex1 = (prevIndices[0] + dir + comments.length) % comments.length;
          const newIndex2 = (prevIndices[1] + dir + comments.length) % comments.length;
          return [newIndex1, newIndex2];
        }
      });
      setDirection(null);
    }, 500);
  };

  if (comments.length === 0) return <div>Loading...</div>;

  const currentComments = isMobile ? [comments[currentIndices[0]]] : [comments[currentIndices[0]], comments[currentIndices[1]]];

  return (
    <div className="carousel-container">
      <ChangeCommentButton onClick={() => changeComment(-1)} icon={<Icon.ChevronLeft size={50} />} />
      <div className={`carousel ${direction ? `carousel-${direction === 1 ? 'right' : 'left'}` : ''}`}>
        {currentComments.map((comment, index) => (
          <CardComponent key={index} comment={comment} />
        ))}
      </div>
      <ChangeCommentButton onClick={() => changeComment(1)} icon={<Icon.ChevronRight size={50} style={{ marginLeft: '30px' }} />} />
    </div>
  );
};

export default MainComponent;
