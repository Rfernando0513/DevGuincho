// import React, { useState } from 'react';
// import { Card as BootstrapCard, CardGroup, Button } from 'react-bootstrap';
// // import comments from './comments.json'; // Importe o JSON com os comentários

// const CardComponent = () => {
//   const [currentComment, setCurrentComment] = useState(comments[0]);

//   const changeComment = () => {
//     const randomIndex = Math.floor(Math.random() * comments.length);
//     setCurrentComment(comments[randomIndex]);
//   };

//   return (
//     <div className="col-sm-4">
//       <CardGroup className="cardGroup">
//         <BootstrapCard className="custom-card">
//           <BootstrapCard.Body className="text-center">
//             <img src={currentComment.photo} alt={currentComment.name} className="img-fluid mb-3" />
//             <BootstrapCard.Title>{currentComment.name}</BootstrapCard.Title>
//             <BootstrapCard.Text>{currentComment.text}</BootstrapCard.Text>
//             <div className="rating">
//               {'⭐'.repeat(currentComment.rating)}
//             </div>
//             <Button variant="primary" onClick={changeComment} className="mt-3">Trocar Comentário</Button>
//           </BootstrapCard.Body>
//         </BootstrapCard>
//       </CardGroup>
//     </div>
//   );
// };

// export default CardComponent;


// //  const App = () =>{
// //      const [currentComments, setComment] = useState(comments[0])

// //      const changeComment = () => {
// //          const randomIndex = Math.floor(Math.random() * comments.length);
// //          setCurrentComment(comments[randomIndex]);
// //      };

// //      return (
// //          <div className="app d-flex flex-column align-items-center mt-5">
// //              <Card comment={currentComments} handleFlip={changeComment} />

// //          </div>
// //      )

// //  }

// //  export default {App, CardComponent};