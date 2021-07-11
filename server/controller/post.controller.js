class PostController {
async createPost(req, res) {
    const {heading, content, userId} = req.body
    const newPost = await db.query('INSERT INTO post {heading, content, user_id} values ($1, $2, $3) RETURNING *',
     [heading, content, userId])
     res.json(newPost.rows[0])
}

async getPostsByUser(req, res) {
    const id = req.query.id
    const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [id])
    res.json(posts.rows)
}

async getOnePost(req, res) {
    const id = req.query.id
    const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [id])
    res.json(posts.rows[0])
}

async updatePost(req, res){
    const {heading, content, userId} = req.body
    const post = await db.query('UPDATE post SET heading = $1, content = $2 WHERE user_id = $3 RETURNING *',
     [heading, content, userId])
     res.json(post.rows[0])
}
 async deletePost(req, res){
    const id = req.params.id
    const post = await db.query('DELETE FROM post WHERE id = $1', [id])
    res.json(post.rows[0])
}
}

module.exports = new PostController()