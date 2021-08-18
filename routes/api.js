const router = require("express").Router()
const Workout = require("../models/workout.js")

router.post("/api/workouts", (req,res) => {
    Workout.create({}).then((dbWorkoutData) =>{
        res.json(dbWorkoutData)
    })
    .catch((err) =>{
        res.json(err)
    })
})

router.put("/api/workouts/:id", ({body,params},res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push:{
            exercises:body
        }},
        {new:true, runValidators:true}).then((dbWorkoutData) =>{
        res.json(dbWorkoutData)
    })
    .catch((err) =>{
        res.json(err)
    })
})

router.get("/api/workouts", (req,res) => {
    Workout.aggregate([
        {
            $addFields:{
                totalDuration:{
                    $sum:"$exercise.duration"
                }
            }
        }
    ]).then((dbWorkoutData) =>{
        res.json(dbWorkoutData)
    })
    .catch((err) =>{
        res.json(err)
    })
})

router.get("/api/workouts/range", (req,res) => {
    Workout.aggregate([
        {
            $addFields:{
                totalDuration:{
                    $sum:"$exercise.duration"
                }
            }
        }
    ]).sort({
        _id:-1
    }).limit(7)
    .then((dbWorkoutData) =>{
        res.json(dbWorkoutData)
        console.log(dbWorkoutData)
    })
    .catch((err) =>{
        res.json(err)
    })
})



module.exports = router