const express = require('express')
const monsterController = require('../controllers/monsterController')

function routes(Monster) {
    const monsterRouter = express.Router()
    const controller = monsterController(Monster)
    monsterRouter.route('/monsters')
        .post(controller.post)
        .get(controller.get)
    monsterRouter.use('/monsters/:monsterId', (req, res, next) => {
        Monster.findById(req.params.monsterId, (err, monster) => {
            if (err) {
                res.send(err)
            }
            if (monster) {
                req.monster = monster
                return next()
            }
            return res.sendStatus(404)
        })
    })
    monsterRouter.route('/monsters/:monsterId')
        .get((req, res) => res.json(req.monster))
        .put((req, res) => {
            const { monster } = req;
            monster.moves = req.body.moves,
            monster.monsterTags = req.body.monsterTags,
            monster.weaponTags = req.body.weaponTags,
            monster.name = req.body.name,
            monster.description = req.body.description,
            monster.groupSize = req.body.groupSize,
            monster.size = req.body.size,
            monster.defenses = req.body.defenses,
            monster.attackName = req.body.attackName,
            monster.specialQuality = req.body.specialQuality
            req.monster.save((err) => {
                if(err) {
                    res.send(err)
                }
                return res.json(monster)
            })
        })
        .patch((req, res) => {
            const { monster } = req;
            if(req.body._id) {
                delete req.body_id
            }
            Object.entries(req.body).forEach((item) => {
                const key = item[0];
                const value = item[1];
                monster[key] = value
            })
            req.monster.save((err) => {
                if(err){
                    return res.send(err)
                }
                return res.json(monster)
            })
        })
        .delete((req, res) => {
            req.monster.remove((err) => {
                if(err){
                    return res.send(err)
                }
                return res.sendStatus(204)
            })
        })
    return monsterRouter
}

module.exports = routes