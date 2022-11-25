require('dotenv').config();
const express = require('express');

const problemRoutes = required('./routes/problems');

const app = express();

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.use('/api/problems  ', problemRoutes);

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
