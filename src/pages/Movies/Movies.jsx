import React, { useCallback, useEffect, useState, useRef } from 'react'
import Wrapper from '../../components/Wrapper/Wrapper';
import Filters from '../../components/Filters/Filters';
import ErrorAlert from '../../components/Alert/ErrorAlert';
import { fetchData } from './../../utility/http';
import Thumbnail from './../../components/Thumbnail/Thumbnail';
import Row from 'react-bootstrap/Row';
import Loading from '../../components/Loading/Loading';

const ITEMS_PER_PAGE = 10;

const Movies = () => {

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [pageNum, setPageNum] = useState(1);
	const [data, setData] = useState([]);
	const [filterKey, setFilterKey] = useState('all');
	const [sortKey, setSortKey] = useState('latest');
	const [searchKey, setSearchKey] = useState('');
	const [lastElement, setLastElement] = useState(null);

	// set sort, filter, search keys
	const setKeys = (filterKey_, sortKey_, searchKey_) => {
		setFilterKey(filterKey_);
		setSortKey(sortKey_);
		setSearchKey(searchKey_);
		setPageNum(1);
	}

	// generate api url
	const handleFilter = useCallback((filterKey = 'all', sortKey = 'latest', searchKey = '') => {

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
				url += `_sort=rating.rate&_order=desc&`
			}
			if (sortKey === 'lower ratings') {
				url += `_sort=rating.rate&_order=asc&`
			}
		}

		if (filterKey !== 'all') {
			url += `type=${filterKey}&`
		}

		url += `_page=${pageNum}&_limit=${ITEMS_PER_PAGE}&`;

		fetchPlays(url);

	}, [filterKey, sortKey, searchKey, pageNum]);

	// fetch data
	const fetchPlays = (url) => {
		setLoading(true);
		fetchData(`${url}`, {}).then((datas) => {
			if (datas) {
				let all = new Set([...data, ...datas]);
				setData([...all]);
			} else {
				setError('Could not fetch data')
			}
		}).catch((error) => {
			setError(error.message)
			console.error('Request failed:', error);
		});
		setLoading(false);
	}

	// set observer
	const observer = useRef(
		new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (first.isIntersecting) {
					setPageNum((no) => {
						return no + 1
					});
				}
			}
		)
	);

	useEffect(() => {
		const currentElement = lastElement;
		const currentObserver = observer.current;

		if (currentElement) {
			currentObserver.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [lastElement]);

	// debounced filter
	useEffect(() => {

		const timer = setTimeout(() => {
			handleFilter(filterKey, sortKey, searchKey);
		}, 500);

		return () => {
			clearTimeout(timer)
		}

	}, [filterKey, sortKey, searchKey, handleFilter, pageNum]);

	return (
		<>
			{
				error && <ErrorAlert message={error} />
			}
			
			<Filters className='pb-0'
				onFilter={setKeys}
				filterKey={filterKey}
				sortKey={sortKey}
				searchKey={searchKey}
			/>
			<Wrapper>
				<Row>
					{
						loading ?
						<Loading /> :
						(
							data.length > 0 ?
							(
								data.map(item => (
									<div
										className='col-sm-6 col-md-4 col-lg-4 col-3 col-xl-2'
										ref={setLastElement}
										key={item.imdbID}
									>
										<Thumbnail
											imdbID={item.imdbID}
											title={item.title}
											release={item.release}
											type={item.type}
											poster={item.poster}
											desc={item.desc}
											rating={item.rating}
										/>
									</div>
								))
							) : <div className='full-height'>No data</div>
						)
					}
				</Row>
			</Wrapper>
		</>
	)
}

export default Movies;
