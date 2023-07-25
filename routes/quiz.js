import express from 'express';
import QuizSchema from '../models/Quiz.js';
const router = express.Router();

router.post('/', async (req, res, next) => { 

    try {
        const { topic, userId, score } = req.body;
        const quiz = new QuizSchema({ topic, userId, score });
        await quiz.save();
        res.send('Quiz saved to database');   
    } catch (err) {
        next(err)
    }
})

export default router;