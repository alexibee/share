const express = require('express');

const router = express.Router();

router.get('/problems', (req, res) => {
	res.json({ msg: 'GET all problems' });
});

router.get('/problems/:id', (res, req) => {
	res.json({ msg: 'GET single problem' });
});

router.post('/problems', (res, req) => {
	res.json({ msg: 'POST (create) a new problem' });
});

router.delete('/problems/:id', (res, req) => {
	res.json({ msg: 'DELETE a problem' });
});

router.patch('/problems/:id', (res, req) => {
	res.json({ msg: 'UPDATE a problem' });
});

module.exports = router;
