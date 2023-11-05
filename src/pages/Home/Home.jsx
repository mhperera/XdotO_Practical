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
				<h3>New Movies</h3>
				{
					navigation.state === 'loading' ?
						<Loading /> :
						(
							<Wrapper>

								<Row>
									{/* PlayList data={data} /> */}

									{

										data.length > 0 ?
										(
											data.map(item => (
												<div
													className='col-sm-6 col-md-4 col-lg-4 col-3 col-xl-2'
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

			{/* Top 10 */}

		</>
	)
}

export default Home;

export const loader = async () => {

	const thisYear = new Date().getFullYear();

	const url = `/plays?type=movie&_sort=release&release=${thisYear.toString()}&_order=desc&_limit=10`;
	
	let data = await fetchData(url, {}).then((data) => {
					if (data) {
						return data;
					}
				}).catch((error) => {
					throw json({
						message: 'Could not fetch items',
						status: 500
					});
				});

	return data;

}
