import React from 'react'
import Card from 'react-bootstrap/Card';
import classes from './Thumbnail.module.scss';

const Thumbnail = ({ title, imdbID, poster, release, type }) => {
    return (
        <>
            <Card className={`col-sm-2 col-md-3 col-lg-3 ${classes['movie-card']}`}>
                <Card.Img variant="top" src={poster} />
                <Card.Body>
                    <Card.Title className={classes['movie-card-title']}><small>{release}</small> {title} </Card.Title>
                    <Card.Text className={classes['movie-card-desc']}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Thumbnail
