const express = require('express');
const models = require('../models');

const PostsController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.create);

    return router;
  },
  index(req, res) {
    // Sorts by id in decreasing order
    // so that the most recent post is displayed at the top
    // models.Posts.findAll({order: [['id', 'DESC']]})

    // Sorts by createdAt in descending order
    models.Posts.findAll({order: [['createdAt', 'DESC']]})
      .then((posts) => {
         res.render('posts', { posts });

        // Display info as JSON so the data can be consumed by React via endpoints
        //res.json(posts);
      });
  },
  create(req, res) {
    models.Posts.create({
      post: req.body.post,
      author: req.body.author
    })
    .then((post) => {
      res.redirect('/posts');
    })
    .catch((err) => {
      console.log('ERROR while creating a new post');
      res.redirect('/error');
    })
  }
};

module.exports = PostsController.registerRouter();
