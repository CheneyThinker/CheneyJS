function postAndGet(type, url, data, success, error) {
	$.ajax({
		url: url,
		type: type,
		data : data,
		dataType : "json",
		async: false,
		crossDomain: true,
		success: success,
		error: error
	});
}

function post(url, data, success, error) {
	postAndGet('POST', url, data, success, error)
}

function postJson(url, data, success, error) {
	post(url, {data: JSON.stringify(data)}, success, error)
}

function get(url, data, success, error) {
	postAndGet('GET', url, data, success, error)
}

function getJson(url, data, success, error) {
	get(url, {data: JSON.stringify(data)}, success, error)
}
