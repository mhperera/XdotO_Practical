import React from 'react'
import Slider from '../../components/Slider/Slider'
import Wrapper from './../../components/Wrapper/Wrapper';
import PlayList from '../../components/PlayList/PlayList';

const Home = () => {
  
  return (
    <>
      <Slider />

      <Wrapper>
        <h3>New Movies</h3>
        <PlayList url='?type=movie&_sort=release&_order=desc&_limit=4'/>
      </Wrapper>
      
      {/* Top 10 */}

    </>
  )
}

export default Home
