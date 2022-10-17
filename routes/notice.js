import express from "express"
import { getAllNotice, getNoticeById, postNotice } from "../controllers/notice.js"

const router = express.Router()

router.get('/', getAllNotice)
router.get('/:id', getNoticeById)
router.post('/', postNotice)

export default router