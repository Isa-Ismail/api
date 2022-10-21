import mongoose from 'mongoose'

const Notice = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    regards: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
})

export default mongoose.model("Notice", Notice)