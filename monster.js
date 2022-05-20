db.monsters.insert([
    {
    moves:["Fly"],
    monsterTags:
        [{description:"Cautious",
        modifier: {
            operation:"text",
            value:"It prizes survival over aggression."
        }
    }],
    weaponTags:[],
    name:"Beetle",
    description:"A beetle is a bug what does what it wants.",
    instinct:"To crawl around",
    groupSize:{
        key:"large_groups",
        description:"Large Groups",
        tags:[]
    },
    size: {
        key:"tiny",
        description:"Tiny", 
        tags:[]
    },
    defenses: {
        key:"cloth_flesh",
        description:"Cloth or Flesh",
        tags:[]
    },
    attackName:"Pinch",
    specialQuality:"Gross"
},
{
    moves:["honk off"],
    monsterTags:
        [{description:"bird brained",
        modifier: {
            operation:"text",
            value:"It values chilling above all else."
        }
    }],
    weaponTags:[],
    name:"Dogman",
    description:"A dogman is as a dogman eats.",
    instinct:"To awooga proudly",
    groupSize:{
        key:"large_groups",
        description:"Large Groups",
        tags:[]
    },
    size: {
        key:"furry",
        description:"furry", 
        tags:[]
    },
    defenses: {
        key:"cloth_flesh",
        description:"Cloth or Flesh",
        tags:[]
    },
    attackName:"Boof",
    specialQuality:"friendly"
}
])
    
