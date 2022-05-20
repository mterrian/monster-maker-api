function monsterController(Monster) {
    function post(req, res) {
        const monster = new Monster(req.body);
        if (!req.body.name) {
            req.status(400);
            return res.send('Name your monster!')
        }
        monster.save()
        res.status(201)
        return res.json(monster)
    }
    function get(req, res) {
        let query = {}
        if(req.query) {
            query = req.query
        }
        Monster.find(query, (err, monsters) => {
            if(err) {
                return res.send(err)
            }
            return res.send(monsters)
        })
    }
    return {post, get}
}

module.exports = monsterController;