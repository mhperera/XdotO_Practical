import React from 'react';
import MoviePreview from '../MoviePreview/MoviePreview';
import Row from 'react-bootstrap/Row';

const MovieList = () => {
    return (
        <>
            <Row>
                <MoviePreview/>
            </Row>
        </>
    )
}

export default MovieList
