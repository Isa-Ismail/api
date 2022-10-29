import mongoose from "mongoose"

const Publications = new mongoose.Schema({ 
    title: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    author: {
        type: String,
        required: true
    },
    journal: {
        type: String 
    },
    published: {
        type: Date
    },
    researchType:{
        type: String
    },
    url: {
        type: String,
        required: true
    }
})

export default mongoose.model("Publications", Publications)