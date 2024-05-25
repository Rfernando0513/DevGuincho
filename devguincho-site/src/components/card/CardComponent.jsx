import React from "react";
import { Card as BootstrapCard, Button } from 'react-bootstrap'

function Card({ comment, handleFlip }) {
    return (
        <BootstrapCard style={{width: '18rem'}}>
            <BootstrapCard.Img variant="top" src={comment.photo} />
            <BootstrapCard.Body>
                <BootstrapCard.Title>{comment.name}</BootstrapCard.Title>
                <BootstrapCard.Text>{comment.text}</BootstrapCard.Text>
                <div className="rating">
                    {'#'.repeat(comment.rating)}
                </div>
                <Button variant="primary" onClick={handleFlip}> <i className="bi bi-arrow-right-circle-fill"></i> </Button>
            </BootstrapCard.Body>
        </BootstrapCard>
    )
}

export default Card;

const App = () =>{
    const [currentComments, setComment] = useState(comments[0])

    const changeComment = () => {
        const randomIndex = Math.floor(Math.random() * comments.length);
        setCurrentComment(comments[randomIndex]);
    };

    return (
        <div className="app d-flex flex-column align-items-center mt-5">
            <Card comment={currentComments} handleFlip={changeComment} />

        </div>
    )

}

export default App;