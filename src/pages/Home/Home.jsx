import React from 'react'
import Slider from '../../components/Slider/Slider'
import Wrapper from './../../components/Wrapper/Wrapper';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import Loading from '../../components/Loading/Loading';
import { Row } from 'react-bootstrap';
import { fetchData } from './../../utility/http'
import { json, useNavigation, useLoaderData } from 'react-router-dom';

const Home = () => {

	const navigation = useNavigation();
	const data = useLoaderData();

	return (
		<>
			<Slider />
			<Wrapper>
				<h3>Latest Movies</h3>
				{
					navigation.state === 'loading' ?
					<Loading /> :
					(
						<Wrapper>
							<Row>
								{
									data.length > 0 ?
									(
										data.map(item => (
											<div
												className='col-12 col-sm-6 col-md-4 col-lg-4 col-3 col-xl-2'
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
									) : 'No data'
								}
							</Row>
						</Wrapper>
					)
				}
			</Wrapper>
		</>
	)
}

export default Home;

export const loader = async () => {
	let data = [];
	const thisYear = new Date().getFullYear();
	const url = `/plays?type=movie&_sort=release&release=${thisYear.toString()}&_order=desc&_limit=10`;
	try {
		let response = 	await fetchData(url, {});
		if (response) {
			data = response;
		}
	} catch (error) {
		throw json({
			message: 'Could not fetch items',
			status: 500
		});
	}
	return data;
}
