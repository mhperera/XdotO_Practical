import React from 'react'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import classes from './WatchListIcon.module.scss';

const WatchListIcon = () => {
  return (
    <div className={classes['icon-wrapper']}>
      <BookmarkAddOutlinedIcon style={{fontSize:'2.5rem'}}/>
    </div>
  )
}

export default WatchListIcon
