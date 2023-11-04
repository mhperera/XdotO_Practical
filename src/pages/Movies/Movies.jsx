import React from 'react'
import Wrapper from '../../components/Wrapper/Wrapper';
import PlayList from './../../components/PlayList/PlayList';
import Loading from '../../components/Loading/Loading';
import { json, useNavigation, useLoaderData } from 'react-router-dom';

const Movies = () => {

  const navigation = useNavigation();

  const data = useLoaderData();

  return (
    <>
      {
        navigation.state === 'loading' ?
          <p><Loading /></p> :
          (
            <Wrapper>
              <PlayList data={data} />
            </Wrapper>
          )
      }
    </>
  )
}

export default Movies;

export const loader = async () => {

  const response = await fetch(`${process.env.REACT_APP_API_URL}`);
  if (!response.ok) {
    throw json({
      message: 'Could not fetch items',
      status: 500
    });
  } else {
    // setTimeout(()=>{
      return response;
    // }, 0)
  }

}

