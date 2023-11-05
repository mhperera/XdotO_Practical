import React from 'react';
import Alert from 'react-bootstrap/Alert';
import classes from './ErrorAlert.module.scss';

const ErrorAlert = ({message}) => {
  return (
    <Alert key='danger' variant="danger" className={classes['alert']}>
      {message}
    </Alert>
  )
}

export default ErrorAlert
