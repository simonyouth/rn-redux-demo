export function post(url, params = {}) {
	const options = {
		method: 'GET',
	};
	const body = getUrl(params);
	const newUrl = `${url}?${body}`;
	return fetch(newUrl, options)
}

function getUrl(params) {
	let res = '';
	for (key in params) {
		if (params.hasOwnProperty(key)){
			res += `${key}=${params[key]}&`
		}
	}
	return res.substring(0, res.length - 1)
}
