const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ msg: 'GET all problems' });
});

router.get('/:id', (res, req) => {
	res.json({ msg: 'GET single problem' });
});

router.post('/', (res, req) => {
	res.json({ msg: 'POST (create) a new problem' });
});

router.delete('/:id', (res, req) => {
	res.json({ msg: 'DELETE a problem' });
});

router.patch('/:id', (res, req) => {
	res.json({ msg: 'UPDATE a problem' });
});

module.exports = router;
