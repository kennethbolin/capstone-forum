const knex = require('../knex')

exports.showComments = async (thread_id) => {
//retrieve the title, subject, and created timestamp from the thread table
    const commentData = await knex('comment')
        .select('user_id', 'thread_id', 'content', 'created')
        .where('thread_id', thread_id)

    console.log(commentData)
    return commentData

}