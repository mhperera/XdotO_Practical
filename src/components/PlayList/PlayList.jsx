import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import Row from 'react-bootstrap/Row';

const PlayList = ({ data }) => {

	return (
		<>
			<Row>
				{

					data.length > 0 ?
						(
							data.map(item => (
								<Thumbnail
									key={item.imdbID}
									imdbID={item.imdbID}
									title={item.title}
									release={item.release}
									type={item.type}
									poster={item.poster}
								/>
							))
						) : 'No data'

				}
			</Row>
		</>
	)
}

export default PlayList;

