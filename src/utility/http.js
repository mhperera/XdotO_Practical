export async function fetchData(url, options = {}) {

	const headers = {
		'Content-Type': 'application/json',
		...options.headers
	};

	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL + url}`, { ...headers });

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const contentType = response.headers.get('content-type');
		if (contentType && contentType.includes('application/json')) {
			const data = await response.json();
			if (data && typeof data === 'object') {
				return data;
			} else {
				throw new Error('Invalid JSON data received');
			}
		} else {
			throw new Error('Response is not in JSON format');
		}

	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}