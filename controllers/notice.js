import Notice from '../models/Notice.js'

export const getAllNotice = async ( req, res, next ) => {
    try {
        const notices = await Notice.find()
        res.json(notices)
    } catch (err) {
        next(err)
    }
}

export const getNoticeById = async( req, res, next) => {
    try {
        const notice = await Notice.findById(req.params.id)
        res.json(notice)
    } catch (err) {
        next(err)
    }
}

export const postNotice = async ( req, res, next ) => {
    try {
        const noticePub = new Notice(req.body)
        await noticePub.save()
        res.json({message: "published"})
    } catch (err) {
        next(err)
    }
}