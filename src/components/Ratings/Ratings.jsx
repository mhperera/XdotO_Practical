import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { formatNumber } from './../../utility/numberFormatting';
import classes from './Ratings.module.scss';

const Ratings = ({rating}) => {
  return (
    <div className={classes['ratings']}>
        <div className={classes['rate']}>
            <StarIcon sx={{ color: '#dbdb0e' }}/>
            <span>{`${rating.rate} / 10`}</span>
        </div>
        <span className={classes['users']}>{ formatNumber(parseInt(rating.noOfUsers)) }</span>
    </div>
  )
}

export default Ratings
