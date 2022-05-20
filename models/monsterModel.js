const mongoose = require('mongoose')

const { Schema } = mongoose;

const monsterModel = new Schema({
    moves: [ String ],
    monsterTags: [{
        description: String,
        modifier: {
            operation: String,
            value: String
        }
    }],
    weaponTags: [ String ],
    name: String,
    description: String,
    groupSize: {
        key: String,
        decription: String,
        tags: [ String ],
    },
    size: {
        key: String,
        description: String,
        tags: [ String ]
    },
    defenses: {
        key: String,
        description: String,
        tags: [ String ]
    },
    attackName: String,
    specialQuality: String
})

module.exports = mongoose.model('Monster', monsterModel)