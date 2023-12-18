const router = require('express').Router()
const {
  getAllTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks,
} = require('../controller/task')
router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks)

module.exports = router
