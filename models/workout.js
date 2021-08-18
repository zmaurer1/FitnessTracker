const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    day:{
        type:Date,
        default:()=>new Date(),
    },
    exercises:[
        {
            type: {
                type:String,
                trim:true,
                required:"enter an exercise type"
            },
            name: {
                type:String,
                trim:true,
                required:"enter an exercise name"
            },
            duration: {
                type:Number,
                required:"enter an exercise duration in minutes"
            },
            weight: {
                type:Number
            },
            reps: {
                type:Number
            },
            sets: {
                type:Number
            },
            distance: {
                type:Number
            }
        }

    ]
    
})
const Workout = mongoose.model("Workout", workOutSchema)
module.exports = Workout