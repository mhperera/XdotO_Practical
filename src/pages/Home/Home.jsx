import React, {useState} from 'react'
import Slider from '../../components/Slider/Slider'
import Wrapper from './../../components/Wrapper/Wrapper';
import PlayList from '../../components/PlayList/PlayList';
import Loading from '../../components/Loading/Loading';
import { fetchData } from './../../utility/http'

const Home = () => {

  const [data, setData] = useState([]);

  const thisYear = new Date().getFullYear();

  const url = `/plays?type=movie&_sort=release&release=${thisYear.toString()}&_order=desc&_limit=10`;

  fetchData(url, {}).then((data) => {
    if (data) {
      setData(data);
    } else {
      // ERROR
    }
  }).catch((error) => {
    console.error('Request failed:', error);
    // Handle the error
  });
  
  return (
    <>
      <Slider />

      <Wrapper>
        <h3>New Movies</h3>
        <PlayList data={data} />
      </Wrapper>
      {/* Top 10 */}

    </>
  )
}

export default Home;

// export const loader = async () => {

//   const thisYear = new Date().getFullYear();
//   const response = await fetch(`${process.env.REACT_APP_API_URL}/plays/?type=movie&_sort=release&release=${thisYear.toString()}&_order=desc&_limit=10`);
//   if (!response.ok) {
//     throw json({
//       message: 'Could not fetch items',
//       status: 500
//     });
//   } else {
//     return response;
//   }

// }
