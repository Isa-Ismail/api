import Publications from '../models/Publications.js'

export const getAllPubs = async ( req, res, next ) => {
    try {
        const pubs = await Publications.find().populate('userId',['username', 'email'])
        res.json(pubs)
    } catch (err) {
        next(err)
    }
}

export const getPubById = async( req, res, next) => {
    try {
        const pub = await Publications.find({userId: req.params.id})
        res.json(pub)
    } catch (err) {
        next(err)
    }
}

export const postPub = async ( req, res, next ) => {
    try {
        const publication = new Publications(req.body)
        await publication.save()
        res.json({message: "published"})
    } catch (err) {
        next(err)
    }
}