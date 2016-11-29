# Remage
Get Image with resizing options.

# Installion 
	`npm install remage`

# Usage
	
	In node controller , add a route to handle the file request
		`var remage = require('./remage');`
		`app.get('/testimage',remage.process);`

	In your view , attribute the src as 
		`img(src="/testimage?width=200&height=100&url=https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png")`


