import express from 'express';
import QuizSchema from '../models/Quiz.js';
const router = express.Router();

router.get('/', async (req, res, next) => { 

    try {
        const quiz = await QuizSchema.find().populate('userId', ['username']);
        res.json(quiz);
    } catch (err) {
        next(err)
    }
})

// get quiz by userId

router.get('/:userId', async (req, res, next) => { 
    
        try {
            const quiz = await QuizSchema.findOne({ userId: req.params.userId });
            res.json(quiz);
        } catch (err) {
            next(err)
        }
})

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