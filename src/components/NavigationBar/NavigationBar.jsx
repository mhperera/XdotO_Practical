import React, {useState, Suspense} from 'react'
import { NavLink, Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavigationBar.module.scss';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
const WatchList = React.lazy(()=>import('../WatchList/WatchList'));

const NavigationBar = () => {
  const [showWatchList, setShowWatchList] = useState(false);
  const openWatchList = () => {
    setShowWatchList((prevState) => !prevState);
  }
  return (
    <>
      <Navbar expand="md" className={`bg-body-tertiary ${classes['navigation-bar']}`} data-bs-theme="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand className='me-5 fs-4 fw-bold'><Link to="/">Movies</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className='mx-3'>Home</NavLink>
              <NavLink to="/movies" className='mx-3'>Movies</NavLink>
            </Nav>
          </Navbar.Collapse>
          <BookmarksIcon className='text-white' onClick={openWatchList}/>
        </Container>
      </Navbar>
      { showWatchList && 
        <Suspense fallback={<Loading/>}>
          <WatchList 
            onClickWatchList={openWatchList} 
            showWatchList={showWatchList}
          />
        </Suspense>
      }
    </>
  )
}

export default NavigationBar
