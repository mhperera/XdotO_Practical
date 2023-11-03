import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import Row from 'react-bootstrap/Row';
import useFetch from './../../hooks/useFetch';

const PlayList = ({url}) => {

    const {data, loading, error} = useFetch(url);

    return (
        <>
            <Row>
                { 
                    error ? 
                    <h4>Something went wrong</h4> : 
                    ( 
                        loading ? 
                        'Loading..' : 
                            (data.length>0 ? 
                                (data.map(item=>(
                                        <Thumbnail 
                                            key={item.imdbID}
                                            imdbID={item.imdbID}
                                            title={item.title}
                                            release={item.release}
                                            type={item.type}
                                            poster={item.poster}
                                        />
                                ))) : 'No data'
                            ))
                }
            </Row>
        </>
    )
}

export default PlayList
