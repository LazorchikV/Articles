const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller')

router.post('/articles', postController.createPost)
router.get('/articles', postController.getPostsByUser)
router.get('/articles/:id', postController.getOnePost)
router.put('/articles/:id', postController.updatePost)
router.delete('/articles/:id', postController.deletePost)

module.exports = router