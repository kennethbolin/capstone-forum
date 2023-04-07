const { getComments } = require('../controller/comment')

const comments = (app) => {
//get reguest for the particular thread comments at a dynamic path 
    app.get('/thread/:thread_id/comments', getComments)
}

module.exports = comments