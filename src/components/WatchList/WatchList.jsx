import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import Thumbnail from '../Thumbnail/Thumbnail';

const WatchList = ({showWatchList, onClickWatchList}) => {

  const wishList = useSelector((state)=>state.watchList.shows)

  console.log(wishList);

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
          {
            wishList.length > 0 
            ? wishList.map((item) => (
              <Thumbnail
                key={item.imdbID}
                imdbID={item.imdbID}
                title={item.title}
                release={item.release}
                type={item.type}
                poster={item.poster}
                desc={item.desc}
                rating={item.rating}
              />
            ))
            : <div className='full-height'>No Data</div>
          }
        </Offcanvas.Body>
      </Offcanvas>
    </aside>
  )
}

export default WatchList;
