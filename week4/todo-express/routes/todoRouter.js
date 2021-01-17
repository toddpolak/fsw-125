const express = require('express')
const todoRouter = express.Router()
const { v4: uuid } = require('uuid')

const todos = [
    {
        name: 'Sample Todo Item',
        description: '',
        imageUrl: '',
        completed: false,
        _id: uuid()
    }
]

todoRouter.route('/')
    .get((req, res) => {
            res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(`Successfully added ${newTodo.name} to database!`)
    })

todoRouter.route('/:todoId')
    .get((req, res) => {
        const todoId = req.params.todoId
        const foundTodo = todos.find(todo => todo._id === todoId)
        res.send(foundTodo)
    })
    .delete((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)
        res.send('Successfully deleted todo!')
    })
    .put((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(todos[todoIndex], req.body)
        res.send(updatedTodo)
    })

module.exports = todoRouter
