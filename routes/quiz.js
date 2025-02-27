import express from 'express';
import QuizSchema from '../models/Quiz.js';
const router = express.Router();

router.get('/', async (req, res, next) => { 

    try {
        const quiz = await QuizSchema.find();
        res.json(quiz);
    } catch (err) {
        next(err)
    }
})

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
        const found = await QuizSchema.findOne({ userId: req.body.userId });
        
        if (found && found.topic === req.body.topic) {
            found.score = req.body.score;
            await found.save();
            res.send('Quiz updated to database')
        } else {
            const { topic, userId, username, score } = req.body;
            const quiz = new QuizSchema({ topic, userId, username, score });
            await quiz.save();
            res.send('Quiz saved to database');  
        }
    } catch (err) {
        next(err)
    }
})

export default router;
