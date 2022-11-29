const express = require('express');
const Post = require('../models/postModel');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ msg: 'GET all problems' });
});

router.get('/:id', (req, res) => {
	res.json({ msg: 'GET single problem' });
});

router.post('/', async (req, res) => {
	const { title, content } = req.body;

	try {
		const post = await Post.create({ title, content });
		res.status(200).json(post);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.delete('/:id', (req, res) => {
	res.json({ msg: 'DELETE a problem' });
});

router.patch('/:id', (req, res) => {
	res.json({ msg: 'UPDATE a problem' });
});

module.exports = router;
