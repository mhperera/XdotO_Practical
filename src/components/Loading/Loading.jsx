import React from 'react';
import { Spinner } from 'react-bootstrap';
import classes from './Loading.module.scss';

const Loading = () => {
	return (
		<div className={classes['loading']}>
			<Spinner animation="border" role="status" variant='primary'>
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	)
}

export default Loading
