const API_URL    = 'https://api.projectceleste.com/gamedb'
const IMAGES_URL = 'https://images.projectceleste.com/Art/'

const fs      = require('fs')
const parser  = require('fast-xml-parser')
const helpers = require('./helpers.js')

const techtreeXML  = fs.readFileSync('./gamedata/techtreex.xml').toString()
const options = {
    attributeNamePrefix : "",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : false,
    ignoreNameSpace : false,
    allowBooleanAttributes : true,
    parseNodeValue : true,
    parseAttributeValue : true,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
}
const stringsXML   = fs.readFileSync('./gamedata/stringtablex.xml').toString()
const language  = parser.parse(stringsXML, options).stringtable.language.string
const techtree  = parser.parse(techtreeXML, options).TechTree.Tech

const result = [{}, {}, {}, {}]

for(let key in result) {
    const entry = {
        name: 'None',
        description: '',
        rarity: 0,
        effects: []
    }
    result[key]['None'] = entry
}

helpers.get(API_URL + '/advisors', (data) => {
	const advisors = JSON.parse(data)

	for(let key in advisors) {
		const advisor = advisors[key]
		const icon = advisor.icon.replace(/\\/g, '/') + '.png'

		helpers.downloadImage(IMAGES_URL + icon, './img/Advisors/' + advisor.name  + '.png')

		const tech = helpers.findByAttributeValue(techtree, 'name', advisor.techs.tech)
		const effects = []

		const effect = tech.Effects ? tech.Effects.Effect : undefined
        if(Array.isArray(effect)) {
            for(let keyEffect in effect) {
                const ef = effect[keyEffect]
                const cef = helpers.convertEffect(ef)
                if(cef) effects.push(cef)
            }
        } else {
        	const cef = helpers.convertEffect(effect)
            if(cef) effects.push(cef)
        }

		const entry = {
			name: helpers.findByAttributeValue(language, '_locid', advisor.displaynameid)['#text'],
			description: helpers.findByAttributeValue(language, '_locid', advisor.displaydescriptionid)['#text'],
			rarity: helpers.rarityToInteger(advisor.rarity),
			civ: advisor.civilization,
			effects: effects
		}
		result[advisor.age][advisor.name] = entry
	}

	helpers.save('const advisors=' + JSON.stringify(result) + ';', './scripts/advisors.js')
})