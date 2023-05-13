// this file is the entry point to our server

const express = require ('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalControllers')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Commented code below written prior to adding fucntions
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Get goals' })
// })

// router.post('/', (req, res) => {
//     res.status(200).json({ message: 'Set goal' })
// })

// router.put('/:id', (req, res) => {
//     res.status(200).json({ message: `Update goal ${req.params.id}` })
// })

// router.delete('/:id', (req, res) => {
//     res.status(200).json({ message: `Delete goal ${req.params.id}` })
// })

//Since we have two routes are the same, we can replace the code below with cleaner routes 
// router.get('/', getGoals)

// router.post('/', setGoals)

// router.put('/:id', updateGoals)

// router.delete('/:id', deleteGoals)

//Here we have replaced the above with the following: 

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)



module.exports = router

//could include more funcitonality here, but better practice to include it in the controller folder