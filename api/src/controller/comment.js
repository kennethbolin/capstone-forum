const { showComments } = require('../service/comment')

exports.getComments = async (req, res) => {
   console.log("in the get comments")
  //return the thread data to be called by the fetch
  try {
    const comments = await showComments(req.params.thread_id); // <-- Pass thread_id to showComments
    console.log('comments:', comments)
    res.json(comments)

  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}