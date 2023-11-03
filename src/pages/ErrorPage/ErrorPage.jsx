import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../components/Wrapper/Wrapper';
import classes from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={`${classes['error-page']}`}>
      <Wrapper>
        <h1>404 - Page Not Found</h1>
        <p>We're sorry, but the page you're looking for doesn't exist.</p>
        <p>You can go back to the <Link to="/">homepage</Link> or use the navigation menu to explore our website.</p>
      </Wrapper>
    </div>
  )
}

export default ErrorPage
