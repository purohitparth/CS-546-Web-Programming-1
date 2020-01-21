const express = require('express');
const router = express.Router();
const postData = require('./data/posts');

router.get('/:id', async (req, res) => {
  try {
    const post = await postData.getPostById(req.params.id);
    res.json(post);
    res.sendStatus(200);
  } catch (e) {
    res.status(404).json({ error: 'Post not found' });
  }
});

router.get('/', async (req, res) => {
  try {
    const postList = await postData.getAllPosts();
    res.json(postList);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post('/', async (req, res) => {
  const postInfo = req.body;
  if (!postInfo) {
    res.status(400).json({ error: 'You must provide data for posts' });
    return;
  }

  if (!postInfo.title) {
    res.status(400).json({ error: 'You must provide a title' });
    return;
  }

  if (!postInfo.author) {
    res.status(400).json({ error: 'You must provide author id' });
    return;
  }

  if (!postInfo.content) {
    res.status(400).json({ error: 'You must provide content' });
    return;
  }

  try {
    const { title, author, content } = postInfo;
    const newPost = await postData.addPost(title, author, content);
    res.json(newPost);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: "Post was not added" });
  }
});

router.put('/:id', async (req, res) => {
  const updatedData = req.body;
  if (!updatedData) {
    res.status(400).json({ error: 'You must provide data for posts' });
    return;
  }

  if (!updatedData.newTitle && !updatedData.newContent) {
    res.status(400).json({ error: 'You must provide a title' });
    return;
  }

  try {
    await postData.getPostById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }

  try {
    const updatedPost = await postData.updatePost(req.params.id, updatedData);
    res.json(updatedPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await postData.getPostById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }
  try {
    const deletedPost = await postData.removePost(req.params.id);
    const output = {
      deleted: true,
      data: deletedPost
    };
    res.json(output);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;