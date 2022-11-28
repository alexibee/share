require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

//routes
app.use('/api/posts', postRoutes);

const port = process.env.PORT;

//connect to db

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(port, () => {
			console.log(`connected to db & listening on port ${port}`);
		});
	})
	.catch((error) => {
		console.error(error);
	});
