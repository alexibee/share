require('dotenv').config();
const express = require('express');

const problemRoutes = required('./routes/problems');

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

// listen for requests

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
