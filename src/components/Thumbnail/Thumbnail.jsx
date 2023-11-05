import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import classes from './Thumbnail.module.scss';
import WatchListIcon from '../WatchListIcon/WatchListIcon';
import Ratings from '../Ratings/Ratings';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchList, removeFromWatchList } from './../../redux/WatchListSlice';

const Thumbnail = ({ title, imdbID, poster, release, type, desc, rating }) => {

  const thisYear = new Date().getFullYear();

  const [isInWatchList, setIsInWatchList] = useState(false);

  const watchList = useSelector(state => state.watchList.shows)

  const dispatch = useDispatch();

  useEffect(() => {
    setIsInWatchList(watchList.includes(imdbID) ? true : false);
  }, [watchList, imdbID])

  const handleWatchList = () => {
    dispatch(isInWatchList ? removeFromWatchList(imdbID) : addToWatchList(imdbID));
  }

  return (
      <Card className={`col-sm-6 col-md-4 col-lg-4 col-3 col-xl-2 ${classes['movie-card']}`}>

        <WatchListIcon isInWatchList={isInWatchList} onClick={handleWatchList} />

        <Link to='/'>

          <div className={`${classes['card-img-wrapper']}`} >
            
            {
              release === thisYear.toString() && 
              <Badge bg="secondary" className={`${classes['badge']}`}>New</Badge>
            }

            <Card.Img variant="top" src={poster} />

            <div className={`${classes['overlay']}`}></div>

          </div>

          <Card.Body className='px-0 py-2'>

            <Badge bg="secondary" className={`mb-2 ${classes['tag']}`}><small>{release}</small></Badge>

            <Ratings rating={rating}/>

            <Card.Title className={classes['movie-card-title']}>{title}</Card.Title>

            <Card.Text className={classes['movie-card-desc']}>
              { `${desc.slice(0, 30)}...` }
            </Card.Text>

          </Card.Body>

        </Link>

      </Card>
  )
}

export default Thumbnail
