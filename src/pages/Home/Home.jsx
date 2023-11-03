import React from 'react'
import Slider from '../../components/Slider/Slider'
import Wrapper from './../../components/Wrapper/Wrapper';
import MovieList from '../../components/MovieList/MovieList';

const Home = () => {
  return (
    <>
      <Slider />

      <Wrapper>
        <h3>Featured Movies</h3>
        <MovieList/>
      </Wrapper>
      {/* Top 10 */}
    </>
  )
}

export default Home
