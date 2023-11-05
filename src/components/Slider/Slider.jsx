import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import classes from './Slider.module.scss';

const Slider = () => {
	return (
		<>
			<Carousel fade interval={1000}>
				<Carousel.Item className={classes['slide']}>
					<img src="https://wallpapers.com/images/hd/deadpool-digital-movie-cover-s5l2oyuqd8nngufh.webp" alt="" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={classes['slide']}>
					<img src="https://w0.peakpx.com/wallpaper/795/1023/HD-wallpaper-the-nun-movie-8k-the-nun-movies-2018-movies-poster.jpg" alt="" />
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={classes['slide']}>
					<img src="https://wallpapers.com/images/hd/justice-league-movie-cover-g4tjyamh3uudkx17.webp" alt="" />
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={classes['slide']}>
					<img src="https://wallpapers.com/images/high/last-witch-hunter-movie-ds05c5asgy4ii2eh.webp" alt="" />
					<Carousel.Caption>
						<h3>Forth slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={classes['slide']}>
					<img src="https://wallpapers.com/images/high/john-wick-movie-cover-mk8shnspj7invai1.webp" alt="" />
					<Carousel.Caption>
						<h3>Forth slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	)
}

export default Slider
