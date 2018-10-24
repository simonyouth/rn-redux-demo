export function post(url, params = {}) {
	return fetch(url, {
		method: 'POST',
		// body: JSON.stringify(params)
	}).then(response => response.json())
		.then(responseJson => responseJson)
		.catch(err => console.log(err))
}
