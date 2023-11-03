import React from 'react'
import { Container } from 'react-bootstrap'

const Wrapper = ({ children }) => {
	return (
		<>
			<Container className='py-4'>{children}</Container>
		</>
	)
}

export default Wrapper
