const Task = require('../model/Task')
const asyncWrapper = require('../middle-ware/async')

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const allTasks = await Task.find({})
  res.status(200).json({ tasks: allTasks, message: 'your created tasks list' })
})
const createTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  const allTasks = await Task.find({})
  res.status(201).json(allTasks)
})
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params

  const task = await Task.findOne({ _id: taskID })
  console.log(task)
  if (task == null) {
    return res.status(404).json({ message: `No task exist with id:${id}` })
  }
  res.status(200).json(task)
})
const updateTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    runValidators: true,
    new: true,
  })
  if (!task) {
    return res.status(404).json({
      success: false,
      message: `no such task exist with id : ${taskID}`,
    })
  }
  res.status(200).json(task)
})
const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return res
      .status(404)
      .json({ message: `no task exist with id : ${taskID}` })
  }
  res.status(200).json({
    task: null,
    success: true,
    message: `the task with id : ${taskID} id deleted`,
  })
})

module.exports = { getAllTasks, createTasks, getTask, updateTasks, deleteTasks }
