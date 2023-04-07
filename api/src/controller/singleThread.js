const { deleteThread, updateThreadService } = require('../service/singleThread');

exports.removeThread = async (req, res) => {
  try {
    await deleteThread(req.params.thread_id);
    res.status(200).json({ message: 'Thread deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting thread', error });
  }
};

exports.updateThread = async (req, res) => {
  const { thread_id } = req.params;
  const updatedThreadData = req.body;

  try {
    const updatedThread = await updateThreadService(thread_id, updatedThreadData);
    res.status(200).json(updatedThread);
  } catch (error) {
    res.status(500).json({ message: 'Error updating thread', error });
  }
};