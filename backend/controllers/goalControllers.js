const asyncHandler = require('express-async-handler')

// Get goals
// GET /api/goals

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

// Set goals
// POST /api/goals

const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set goal' })
})

// Update goals
// PUT /api/goals/:id

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// Delete goals
// DELETE /api/goals/:id

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})


module.exports = { 
    getGoals,
    setGoals,
    updateGoals, 
    deleteGoals
 }