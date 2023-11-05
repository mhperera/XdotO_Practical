import React, { useCallback, useEffect, useState } from 'react'
import Wrapper from '../../components/Wrapper/Wrapper';
import PlayList from './../../components/PlayList/PlayList';
import Filters from '../../components/Filters/Filters';
import { json } from 'react-router-dom';

const Movies = () => {

  const [data, setData] = useState([]);
  const [filterKey, setFilterKey] = useState('all');
  const [sortKey, setSortKey] = useState('latest');
  const [searchKey, setSearchKey] = useState('');

  const setKeys = (filterKey_, sortKey_, searchKey_) => {
    setFilterKey(filterKey_);
    setSortKey(sortKey_);
    setSearchKey(searchKey_);
  }

  const handleFilter = useCallback(async (filterKey = 'all', sortKey = 'latest', searchKey = '') => {

    console.log(filterKey, sortKey, searchKey);

    let url = '/plays?'
    if (searchKey !== "") {
      url += `q=${searchKey}&`
    }

    if (sortKey !== 'none') {
      if (sortKey === 'latest') {
        url += `_sort=release&_order=desc&`
      }
      if (sortKey === 'oldest') {
        url += `_sort=release&_order=asc&`
      }
      if (sortKey === 'higher ratings') {
        url += `_sort=rating.rate&_order=desc`
      }
      if (sortKey === 'lower ratings') {
        url += `_sort=rating.rate&_order=asc`
      }
    }

    if (filterKey !== 'all') {
      url += `type=${filterKey}&`
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL + url}`);
    if (!response.ok) {
      throw json({
        message: 'Could not fetch items',
        status: 500
      });
    } else {
      setData(await response.json())
    }

  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      handleFilter(filterKey, sortKey, searchKey);
    }, 500);

    return ()=>{
      clearTimeout(timer)
    }
    
  }, [filterKey, sortKey, searchKey, handleFilter]);

  return (
    <>
      <Filters className='pb-0'
        onFilter={setKeys}
        filterKey={filterKey}
        sortKey={sortKey}
        searchKey={searchKey}
      />
      <Wrapper>
        <PlayList data={data} />
      </Wrapper>
    </>
  )
}

export default Movies;
