var sharp = require('sharp');

var request = require('request').defaults({
	encoding: null
});
var sizeOf = require('image-size');

module.exports = {

	process: (req, res) => {

		var url = req.query.url;
		var width = Number(req.query.width);
		var height = Number(req.query.height);
		if(!url) return res.end();
		request.get(url, (error, response, body) => {
			if (!error && response.statusCode == 200) {

				var defaultSize = {
					height: sizeOf(body).height,
					width: sizeOf(body).width
				}
				sharp(body)
					.resize(height || defaultSize.height, width || defaultSize.width)
					.toBuffer()
					.then(data => {
						res.writeHead(200, {
							'Content-Type': response.headers['content-type']
						});
						res.end(data);
					})
					.catch(err => {
						return new Error(err);
					})
			}else{
				return res.end();
			}

		});

	}

}