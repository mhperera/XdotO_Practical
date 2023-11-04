import React, { useState , useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import classes from './Thumbnail.module.scss';
import WatchListIcon from '../WatchListIcon/WatchListIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchList, removeFromWatchList } from './../../redux/WatchListSlice';

const Thumbnail = ({ title, imdbID, poster, release, type }) => {
  
  const [isInWatchList, setIsInWatchList] = useState(false);

  const watchList = useSelector(state=>state.watchList.shows)

  const dispatch = useDispatch();

  useEffect(()=>{
    setIsInWatchList( watchList.includes(imdbID) ? true : false);
  }, [])

  const handleWatchList = () => {
    dispatch(isInWatchList ? removeFromWatchList(imdbID) : addToWatchList(imdbID));
  }

  return (
    <>
      <Card className={`col-sm-6 col-md-4 col-lg-4 col-xl-3 ${classes['movie-card']}`}>
        <div className={`${classes['card-img-wrapper']}`} onClick={handleWatchList}>
          <WatchListIcon />
          <Card.Img variant="top" src={poster} />
          <div className={`${classes['overlay']}`}></div>
        </div>
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
