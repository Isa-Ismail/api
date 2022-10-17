import express from "express"
import { getAllPubs, getPubById, postPub } from "../controllers/publications.js"

const router = express.Router()

router.get("/", getAllPubs)
router.get("/:id", getPubById)
router.post("/", postPub)

export default router