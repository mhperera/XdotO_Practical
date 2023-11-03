import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import classes from './Slider.module.scss';

const Slider = () => {
    return (
        <>
            <Carousel fade interval={1000}>
                <Carousel.Item className={classes['slide']}>
                    <img src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={classes['slide']}>
                    <img src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg" alt="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider
