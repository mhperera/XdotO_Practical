import React from 'react'
import Slider from '../../components/Slider/Slider'
import Wrapper from './../../components/Wrapper/Wrapper';
import PlayList from '../../components/PlayList/PlayList';
import { json, useNavigation, useLoaderData } from 'react-router-dom';

const Home = () => {

  const navigation = useNavigation();

  const data = useLoaderData();

  return (
    <>
      <Slider />

      <Wrapper>
        <h3>New Movies</h3>
        {
          navigation.state === 'loading' ?
            <p>Loading...</p> :
            (
              <PlayList data={data} />
            )
        }
      </Wrapper>

      {/* Top 10 */}

    </>
  )
}

export default Home;

export const loader = async () => {

  const response = await fetch(`${process.env.REACT_APP_API_URL}?type=movie&_sort=release&_order=desc&_limit=4`);
  if (!response.ok) {
    throw json({
      message: 'Could not fetch items',
      status: 500
    });
  } else {
    return response;
  }

}
