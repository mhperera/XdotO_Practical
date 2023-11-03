import React from 'react'
import Card from 'react-bootstrap/Card';
import classes from './MoviePreview.module.scss';

const MoviePreview = () => {
    return (
        <>
            <Card className={classes['movie-card']}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title className={classes['movie-card-title']}>Card Title</Card.Title>
                    <Card.Text className={classes['movie-card-desc']}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default MoviePreview
