import React from 'react'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import classes from './WatchListIcon.module.scss';

const WatchListIcon = ({isInWatchList, onClick}) => {
  return (
    <div className={classes['icon-wrapper']} onClick={onClick}>
      {
        isInWatchList ? 
        <BookmarkAddedIcon style={{fontSize:'2.5rem'}}/> :
        <BookmarkAddOutlinedIcon style={{fontSize:'2.5rem'}}/>
      }
    </div>
  )
}

export default WatchListIcon
