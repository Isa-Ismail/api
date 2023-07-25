import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    score: {
        type: Number,
        default: 0
    },
});

export default mongoose.model("Quiz", QuizSchema);