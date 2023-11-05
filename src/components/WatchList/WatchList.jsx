import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

const WatchList = ({showWatchList, onClickWatchList}) => {
  return (
    <aside>
      <Offcanvas
        show={showWatchList}
        onHide={onClickWatchList}
        name='Enable body scrolling'
        scroll={true}
        backdrop={false}
        placement='end'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Watch list</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/*  */}
        </Offcanvas.Body>
      </Offcanvas>
    </aside>
  )
}

export default WatchList;
