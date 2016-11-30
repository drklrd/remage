# Remage
Node middleware to get image with resizing options.

# Installation 
	npm install remage

# Usage
	
	In node controller , add a route using this middleware
		app.use('/testimage',require('remage').process);

	In your view , attribute the src as 
		img(src="/testimage?width=200&height=100&url=https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png")

	If you dont pass in the width and height options, the deafult image size will be fetched.


#Dependencies
	sharp 
	request
	image-size


