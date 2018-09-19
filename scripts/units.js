var units = {
	Academy: {
		name: "Academy",
		img: "Academy64.png",
		stats: {
			costWood: 200,
			health: 2250,
			armorPierce: 0.80,
			vision: 20,
			timeBuilding: 30
		},
		gear: ["reinforcedConstruction", "constructionAddition"],
		upgrades: ["ashlarMasonry"]
	},
	ArcheryRange: {
		name: "ArcheryRange",
		img: "ArcheryRange64.png",
		stats: {
			costWood: 200,
			health: 2250,
			armorPierce: 0.80,
			vision: 20,
			timeBuilding: 50
		}
	},
	Ballista: {
		name: "Ballista",
		img: "Ballista64.png",
		stats: {
			costWood: 300,
			costGold: 160,
			health: 280,
			damage: 28,
			multiplierBuildings: 4,
			range: 37,
			splash: 3,
			armorPierce: 0.85,
			vision: 39,
			speed: 4.5,
			timeTrain: 30,
			population: 5
		},
		champion: {
			name: "Ballista Champion",
			img: "img/Upgrades/BallistaChampion.png",
			effects: [
				{amount: 20.0, positive: true, type: "speed"}
			],
			cost: {
				gold: 1000
			}
		},
		gear: ["armorPlating"]
	},
	Barracks: {
		name: "Barracks",
		img: "Barracks64.png",
		stats: {
			costWood: 200,
			health: 2250,
			armorPierce: 0.80,
			vision: 20,
			timeBuilding: 50
		}
	},
	BBireme: {
		name: "BBireme",
		img: "BBireme64.png",
		stats: {
			costWood: 110,
			costGold: 110,
			health: 600,
			damage: 45,
			range: 26,
			splash: 1,
			armorPierce: 0.50,
			vision: 31,
			speed: 10,
			timeTrain: 20,
			population: 2
		}
	},
	BBowman: {
		name: "BBowman",
		img: "BBowman64.png",
		stats: {
			costWood: 40,
			costGold: 10,
			health: 110,
			damage: 8,
			multiplierInfantry: 2.5,
			range: 15,
			vision: 20,
			speed: 6,
			timeTrain: 10,
			population: 1
		},
		gear: ["bow", "arrow"]
	},
	BCaravan: {
		name: "BCaravan",
		img: "BCaravan64.png",
		stats: {
			costFood: 50,
			costWood: 50,
			health: 300,
			vision: 15,
			speed: 6,
			timeTrain: 15,
			population: 1
		}
	},
	BChariotArcher: {
		name: "BChariotArcher",
		img: "BChariotArcher64.png",
		stats: {
			costWood: 80,
			costGold: 60,
			health: 340,
			damage: 25,
			range: 22,
			vision: 22,
			speed: 7,
			timeTrain: 18,
			population: 3
		}
	},
	BFishingBoat: {
		name: "BFishingBoat",
		img: "BFishingBoat64.png",
		stats: {
			costWood: 100,
			health: 300,
			gatherFish: 1.6,
			damage: 8,
			range: 18,
			armorPierce: 0.50,
			vision: 20,
			speed: 6,
			timeTrain: 30,
			population: 1
		}
	},
	Bireme: {
		name: "Tireme",
		img: "Bireme64.png"
	},
	BLancer: {
		name: "BLancer",
		img: "BLancer64.png",
		stats: {
			costFood: 60,
			costGold: 50,
			health: 430,
			damage: 14,
			multiplierInfantry: 2,
			armorCrush: 0.50,
			armorInfantry: 0.30,
			armorPierce: 0.30,
			vision: 20,
			speed: 9,
			timeTrain: 16,
			population: 2
		}
	},
	BMerchantTransport: {
		name: "BMerchantTransport",
		img: "BMerchantTransport64.png",
		stats: {
			costWood: 150,
			health: 600,
			damage: 20,
			range: 18,
			armorPierce: 0.50,
			vision: 20,
			speed: 6,
			timeTrain: 30,
			population: 2
		}
	},
	BMountedArcher: {
		name: "BMountedArcher",
		img: "BMountedArcher64.png",
		stats: {
			costWood: 50,
			costGold: 60,
			health: 320,
			damage: 13,
			multiplierCavalry: 2.5,
			range: 15,
			vision: 20,
			speed: 9,
			timeTrain: 18,
			population: 2
		}
	},
	BOxCart: {
		name: "BOxCart",
		img: "BOxCart64.png",
		stats: {
			costFood: 50,
			costWood: 50,
			health: 400,
			armorPierce: 0.50,
			vision: 26,
			speed: 6,
			timeTrain: 10,
			population: 1
		}
	},
	BPalintonon: {
		name: "BPalintonon",
		img: "BPalintonon64.png",
		stats: {
			costWood: 350,
			costGold: 250,
			health: 350,
			damage: 92,
			multiplierBuildings: 3,
			range: 55,
			splash: 1,
			armorPierce: 0.85,
			vision: 48,
			speed: 4.5,
			timeTrain: 30,
			population: 5
		}
	},
	BPriest: {
		name: "BPriest",
		img: "BPriest64.png",
		stats: {
			costGold: 100,
			health: 140,
			healOOC: 25,
			healRange: 16,
			conversionRate: 10,
			conversionRange: 32,
			vision: 34,
			speed: 6,
			timeTrain: 20,
			population: 1
		}
	},
	BRamShip: {
		name: "BRamShip",
		img: "BRamShip64.png",
		stats: {
			costWood: 150,
			costGold: 100,
			health: 900,
			damage: 30,
			multiplierShips: 2.5,
			multiplierBuildings: 2.5,
			armorPierce: 0.50,
			vision: 30,
			speed: 8,
			timeTrain: 20,
			population: 3
		}
	},
	BRoyalGuard: {
		name: "BRoyalGuard",
		img: "BRoyalGuard64.png",
		stats: {
			costFood: 55,
			costGold: 55,
			health: 320,
			damage: 14,
			multiplierInfantry: 2,
			armorInfantry: 0.30,
			armorCrush: 0.30,
			vision: 20,
			speed: 6,
			timeTrain: 15,
			population: 1
		}
	},
	BSapper: {
		name: "BSapper",
		img: "BSapper64.png",
		stats: {
			costFood: 35,
			costGold: 25,
			health: 260,
			damage: 12,
			multiplierBuildings: 2.5,
			armorInfantry: 0.30,
			armorCrush: 0.30,
			vision: 20,
			speed: 6,
			timeTrain: 10,
			population: 1
		}
	},
	BScout: {
		name: "BScout",
		img: "BScout64.png",
		stats: {
			health: 600,
			damage: 4,
			multiplierHuntable: 3,
			multiplierVillager: 0.1,
			vision: 26,
			speed: 10,
			population: 1
		}
	},
	BShieldBearer: {
		name: "BShieldBearer",
		img: "BShieldBearer64.png",
		stats: {
			costFood: 50,
			health: 200,
			damage: 7,
			multiplierRanged: 1.5,
			armorPierce: 0.70,
			armorCrush: 0.30,
			vision: 20,
			speed: 6,
			timeTrain: 12,
			population: 1
		}
	},
	BSiegeTower: {
		name: "BSiegeTower",
		img: "BSiegeTower64.png",
		stats: {
			costWood: 300,
			costGold: 100,
			health: 800,
			damage: 32,
			multiplierBuildings: 4,
			damage: 5,
			range: 22,
			splash: 1,
			armorPierce: 0.85,
			armorInfantry: 0.30,
			armorCavalry: 0.30,
			vision: 27,
			speed: 4.5,
			timeTrain: 35,
			population: 5
		}
	},
	BSlinger: {
		name: "BSlinger",
		img: "BSlinger64.png",
		stats: {
			costWood: 20,
			costGold: 25,
			health: 90,
			damage: 6,
			multiplierRanged: 3,
			range: 18,
			armorPierce: 0.30,
			vision: 20,
			speed: 6,
			timeTrain: 10,
			population: 1
		}
	},
	BSpearman: {
		name: "BSpearman",
		img: "BSpearman64.png",
		stats: {
			costFood: 25,
			costGold: 35,
			health: 250,
			damage: 11,
			multiplierCavalry: 2.5,
			snare: 0.65,
			armorInfantry: 0.30,
			armorCavalry: 0.30,
			armorCrush: 0.30,
			vision: 20,
			speed: 6,
			timeTrain: 10,
			population: 1
		}
	},
	BVillager: {
		name: "BVillager",
		img: "BVillager64.png",
		stats: {
			costFood: 50,
			health: 150,
			gatherBerry: 0.9,
			gatherHunt: 1.3,
			gatherHerd: 1.0,
			gatherFarm: 0.9,
			gatherWood: 1.0,
			gatherGold: 1.0,
			gatherStone: 1.0,
			gatherFish: 1.0,
			damage: 5,
			armorPierce: 0.30,
			vision: 12,
			speed: 6,
			timeTrain: 15,
			population: 1
		}
	},
	BWarChariot: {
		name: "BWarChariot",
		img: "BWarChariot64.png",
		stats: {
			costWood: 150,
			costGold: 120,
			health: 800,
			damage: 20,
			multiplierRanged: 4,
			range: 18,
			vision: 20,
			speed: 6,
			timeTrain: 28,
			population: 4
		}
	},
	Caravan: {
		name: "Caravan",
		img: "Caravan64.png",
		stats: {
			costFood: 50,
			costWood: 50,
			health: 300,
			vision: 15,
			speed: 6,
			timeTrain: 15,
			population: 1
		}
	},
	CatapultTrireme: {
		name: "CatapultTrireme",
		img: "CatapultTrireme64.png",
		stats: {
			costWood: 200,
			costGold: 150,
			health: 610,
			damage: 23,
			multiplierBuildings: 4,
			range: 48,
			splash: 3,
			armorPierce: 0.30,
			vision: 53,
			speed: 8,
			timeTrain: 35,
			population: 4
		}
	},
	CAuger: {
		name: "CAuger",
		img: "CAuger64.png",
		stats: {
			costGold: 150,
			health: 140,
			healOOC: 25,
			healRange: 16,
			conversionRate: 10,
			conversionRange: 32,
			vision: 34,
			speed: 6,
			timeTrain: 20,
			population: 1
		}
	},
	CBardHall: {
		name: "CBardHall",
		img: "CBardHall64.png",
		stats: {
			costWood: 200,
			health: 2250,
			armorPierce: 0.80,
			vision: 20,
			timeBuilding: 50
		}
	},
	CBowman: {
		name: "CBowman",
		img: "CBowman64.png",
		stats: {
			costWood: 40,
			costGold: 15,
			health: 130,
			damage: 12,
			range: 18,
			vision: 20,
			speed: 6,
			timeTrain: 12,
			population: 1
		}
	},
	CCaravan: {
		name: "CCaravan",
		img: "CCaravan64.png",
		stats: {
			costFood: 50,
			costWood: 50,
			health: 300,
			vision: 15,
			speed: 6,
			timeTrain: 15,
			carryCapacity: 150,
			population: 1
		}
	},		
	CCarpentom: {
		name: "CCarpentom",
		img: "CCarpentom64.png",
		stats: {
			costWood: 110,
			costGold: 70,
			health: 350,
			damage: 28,
			range: 18,
			vision: 20,
			speed: 9,
			armorPierce: 0.5,
			multiplierRanged: 3,
			timeTrain: 25,
			population: 3
		}
	},
	CChampion: {
		name: "CChampion",
		img: "CChampion64.png",
		stats: {
			costFood: 60,
			costGold: 40,
			health: 370,
			damage: 20,
			vision: 20,
			speed: 5,
			armorInfantry: 0.5,
			armorPierce: 0.3,
			armorCrush: 0.3,
			timeTrain: 15,
			population: 2
		}
	},
	CComontorios: {name: "CComontorios", img: "CComontorios64.png"},
	CDruid: {name: "CDruid", img: "CDruid64.png"},
	CFishingBoat: {name: "CFishingBoat", img: "CFishingBoat64.png"},
	CGaesatae: {name: "CGaesatae", img: "CGaesatae64.png"},
	CGoldmine: {name: "CGoldmine", img: "CGoldmine64.png"},
	CHeadHunter: {name: "CHeadHunter", img: "CHeadHunter64.png"},
	CHorseman: {name: "CHorseman", img: "CHorseman64.png"},
	ClayWall: {name: "ClayWall", img: "ClayWall64.png"},
	CLongbowman: {name: "CLongbowman", img: "CLongbowman64.png"},
	CLongswordsman: {name: "CLongswordsman", img: "CLongswordsman64.png"},
	Clubman: {name: "Clubman", img: "Clubman64.png"},
	CMerchantTransport: {name: "CMerchantTransport", img: "CMerchantTransport64.png"},
	Cow: {name: "Cow", img: "Cow64.png"},
	Craftopolis: {name: "Craftopolis", img: "Craftopolis64.png"},
	CRam: {name: "CRam", img: "CRam64.png"},
	CRockThrower: {name: "CRockThrower", img: "CRockThrower64.png"},
	Crocodile: {name: "Crocodile", img: "Crocodile64.png"},
	CScout: {name: "CScout", img: "CScout64.png"},
	CSkirmisher: {name: "CSkirmisher", img: "CSkirmisher64.png"},
	CSpearman: {name: "CSpearman", img: "CSpearman64.png"},
	CVillagers: {name: "CVillagers", img: "CVillagers64.png"},
	CWarChariot: {name: "CWarChariot", img: "CWarChariot64.png"},
	CWarship: {name: "CWarship", img: "CWarship64.png"},
	CWoadRaider: {name: "CWoadRaider", img: "CWoadRaider64.png"},
	Decoration: {name: "Decoration", img: "Decoration64.png"},
	Deer: {name: "Deer", img: "Deer64.png"},
	Dock: {name: "Dock", img: "Dock64.png"},
	EAxeman: {
		name: "EAxeman",
		img: "EAxeman64.png",
		stats: {
			costFood: 25,
			costGold: 15,
			health: 160,
			damage: 8,
			speed: 6,
		},
		gear: ["greatAxe", "mediumArmor", 'soldiersGear']
	},
	ECamelRiders: {
		name: "ECamelRiders",
		img: "ECamelRiders64.png",
		stats: {
			costFood: 60,
			costGold: 45,
			health: 430,
			damage: 15,
			vision: 20,
			speed: 10,
			timeTrain: 14,
			armorCrush: 0.5,
			multiplierCavalry: 2.5,
			population: 2
		},
		gear: ["heavySpear", "lightArmor", 'soldiersGear'],
		upgrades: ["stablesEgypt", "armoryMelee", "armoryArmorEgyptian"]
	},
	ECaravan: {name: "ECaravan", img: "ECaravan64.png"},
	ECatapult: {name: "ECatapult", img: "ECatapult64.png"},
	ECatapultTrireme: {name: "ECatapultTrireme", img: "ECatapultTrireme64.png"},
	EChariotArchers: {name: "EChariotArchers", img: "EChariotArchers64.png"},
	EDesertNomadArcher: {name: "EDesertNomadArcher", img: "EDesertNomadArcher64.png"},
	EDesertNomadCavalry: {name: "EDesertNomadCavalry", img: "EDesertNomadCavalry64.png"},
	EDesertNomadSwordsmen: {name: "EDesertNomadSwordsmen", img: "EDesertNomadSwordsmen64.png"},
	EElephantArcher: {name: "EElephantArcher", img: "EElephantArcher64.png"},
	EEliteElephant: {name: "EEliteElephant", img: "EEliteElephant64.png"},
	EFemale: {name: "EFemale", img: "EFemale64.png"},
	EFireship: {name: "EFireship", img: "EFireship64.png"},
	EFishingBoat: {name: "EFishingBoat", img: "EFishingBoat64.png"},
	EGeneral: {name: "EGeneral", img: "EGeneral64.png"},
	EGWonder: {name: "EGWonder", img: "EGWonder64.png"},
	EKhopeshEliteSwordsmen: {name: "EKhopeshEliteSwordsmen", img: "EKhopeshEliteSwordsmen64.png"},
	ElephantGatherer: {name: "ElephantGatherer", img: "ElephantGatherer64.png"},
	EMale: {name: "EMale", img: "EMale64.png"},
	EPalintonon: {name: "EPalintonon", img: "EPalintonon64.png"},
	EPriestAmen: {name: "EPriestAmen", img: "EPriestAmen64.png"},
	EPriestPtah: {name: "EPriestPtah", img: "EPriestPtah64.png"},
	EPriestRa: {name: "EPriestRa", img: "EPriestRa64.png"},
	EPriestSet: {name: "EPriestSet", img: "EPriestSet64.png"},
	EScoutCavalry: {name: "EScoutCavalry", img: "EScoutCavalry64.png"},
	ESiegeTower: {name: "ESiegeTower", img: "ESiegeTower64.png"},
	ESlinger: {name: "ESlinger", img: "ESlinger64.png"},
	ESpearman: {name: "ESpearman", img: "ESpearman64.png"},
	ETransportShip: {name: "ETransportShip", img: "ETransportShip64.png"},
	ETriremeShip: {name: "ETriremeShip", img: "ETriremeShip64.png"},
	EVillager: {name: "EVillager", img: "EVillager64.png"},
	EWarElephant: {name: "EWarElephant", img: "EWarElephant64.png"},
	Factory: {name: "Factory", img: "Factory64.png"},
	Falcon: {name: "Falcon", img: "Falcon64.png"},
	Farm: {name: "Farm", img: "Farm64.png"},
	FemaleChild: {name: "FemaleChild", img: "FemaleChild64.png"},
	fireship: {name: "fireship", img: "fireship64.png"},
	Fish: {name: "Fish", img: "Fish64.png"},
	FishingShip: {name: "FishingShip", img: "FishingShip64.png"},
	Fortress: {name: "Fortress", img: "Fortress64.png"},
	GaiaRhino: {name: "GaiaRhino", img: "GaiaRhino64.png"},
	Garden: {
		name: "Garden",
		img: "Garden64.png",
		stats: {
			costWood: 50,
			costGold: 50,
			empowerTrain: 3,
			empowerResearch: 3,
			health: 500,
			armorPierce: 0.80,
			vision: 20,
			timeBuilding: 30
		}
	},
	gastraphetes: {name: "gastraphetes", img: "gastraphetes64.png"},
	Gate: {name: "Gate", img: "Gate64.png"},
	GCatapult: {name: "GCatapult", img: "GCatapult64.png"},
	GGoldenHippikon: {name: "GGoldenHippikon", img: "GGoldenHippikon64.png"},
	Goats: {name: "Goats", img: "Goats64.png"},
	GoldPile: {name: "GoldPile", img: "GoldPile64.png"},
	GreatHall: {name: "GreatHall", img: "GreatHall64.png"},
	Hannibal: {name: "Hannibal", img: "Hannibal64.png"},
	Heleopolis: {name: "Heleopolis", img: "Heleopolis64.png"},
	Hetairoi: {name: "Hetairoi", img: "Hetairoi64.png"},
	Hippikon: {
		name: "Hippikon",
		img: "Hippikon64.png",
		stats: {
			costFood: 110,
			costGold: 70,
			health: 780,
			damage: 24,
			speed: 8,
			vision: 20,
			timeTrain: 25,
			population: 3,
			armorPierce: 0.3,
			armorCrush: 0.3
		},
		champion: {
			name: "Hippikon Champion",
			img: "img/Upgrades/HippikonChampion.png",
			effects: [
				{amount: -33.3, positive: true, type: "population"}
			],
			cost: {
				gold: 1200
			}
		},
		gear: ["sword", "shield", "lightArmor", 'soldiersGear'],
		upgrades: ["agogeDiscipline", "stables", "armoryMelee", "armoryArmor", "armoryShield"]
	},
	Hippopotamus: {name: "Hippopotamus", img: "Hippopotamus64.png"},
	Hoplite: {name: "Hoplite", img: "Hoplite64.png"},
	House: {name: "House", img: "House64.png"},
	Hypaspist: {name: "Hypaspist", img: "Hypaspist64.png"},
	Imhotep: {name: "Imhotep", img: "Imhotep64.png"},
	Learicorn: {name: "Learicorn", img: "Learicorn64.png"},
	Lion: {name: "Lion", img: "Lion64.png"},
	Longhouse: {name: "Longhouse", img: "Longhouse64.png"},
	Lynx: {name: "Lynx", img: "Lynx64.png"},
	MaleChild: {name: "MaleChild", img: "MaleChild64.png"},
	Market: {name: "Market", img: "Market64.png"},
	MercenaryHealer: {name: "MercenaryHealer", img: "MercenaryHealer64.png"},
	MycenaeanArcher: {name: "MycenaeanArcher", img: "MycenaeanArcher64.png"},
	MycenaeanHoplite: {name: "MycenaeanHoplite", img: "MycenaeanHoplite64.png"},
	MycenaeanSwordsman: {name: "MycenaeanSwordsman", img: "MycenaeanSwordsman64.png"},
	NAxeman: {name: "NAxeman", img: "NAxeman64.png"},
	NBadGuy: {name: "NBadGuy", img: "NBadGuy64.png"},
	NBard: {name: "NBard", img: "NBard64.png"},
	NBerserker: {name: "NBerserker", img: "NBerserker64.png"},
	NBowman: {name: "NBowman", img: "NBowman64.png"},
	NCaravan: {name: "NCaravan", img: "NCaravan64.png"},
	NChief: {name: "NChief", img: "NChief64.png"},
	NFireShip: {name: "NFireShip", img: "NFireShip64.png"},
	NFishingBoat: {name: "NFishingBoat", img: "NFishingBoat64.png"},
	NGoodGuy: {name: "NGoodGuy", img: "NGoodGuy64.png"},
	NHorseman: {name: "NHorseman", img: "NHorseman64.png"},
	NLogThrower: {name: "NLogThrower", img: "NLogThrower64.png"},
	NLongShip: {name: "NLongShip", img: "NLongShip64.png"},
	NMerchantTransport: {name: "NMerchantTransport", img: "NMerchantTransport64.png"},
	NRaider: {name: "NRaider", img: "NRaider64.png"},
	NRam: {name: "NRam", img: "NRam64.png"},
	NRaven: {name: "NRaven", img: "NRaven64.png"},
	NScout2: {name: "NScout2", img: "NScout264.png"},
	NScoutA: {name: "NScoutA", img: "NScoutA64.png"},
	NSeer: {name: "NSeer", img: "NSeer64.png"},
	NSkirmisher: {name: "NSkirmisher", img: "NSkirmisher64.png"},
	NSpearman: {name: "NSpearman", img: "NSpearman64.png"},
	NThrowingAxeMan: {name: "NThrowingAxeMan", img: "NThrowingAxeMan64.png"},
	NubianArcher: {name: "NubianArcher", img: "NubianArcher64.png"},
	NubianChief: {name: "NubianChief", img: "NubianChief64.png"},
	NubianElephantRider: {name: "NubianElephantRider", img: "NubianElephantRider64.png"},
	NubianSpearman: {name: "NubianSpearman", img: "NubianSpearman64.png"},
	NUlfhednar: {name: "NUlfhednar", img: "NUlfhednar64.png"},
	NVillager: {name: "NVillager", img: "NVillager64.png"},
	NWarDogs: {name: "NWarDogs", img: "NWarDogs64.png"},
	Oracle: {name: "Oracle", img: "Oracle64.png"},
	Outpost: {name: "Outpost", img: "Outpost64.png"},
	Palintonon: {name: "Palintonon", img: "Palintonon64.png"},
	PBatteringRam: {name: "PBatteringRam", img: "PBatteringRam64.png"},
	PBowman: {name: "PBowman", img: "PBowman64.png"},
	PCaravan: {name: "PCaravan", img: "PCaravan64.png"},
	PCataphract: {name: "PCataphract", img: "PCataphract64.png"},
	PeePaw: {name: "PeePaw", img: "PeePaw64.png"},
	Peltast: {name: "Peltast", img: "Peltast64.png"},
	PerchFish: {name: "PerchFish", img: "PerchFish64.png"},
	Pexhetairoi: {name: "Pexhetairoi", img: "Pexhetairoi64.png"},
	PFishingBoat: {name: "PFishingBoat", img: "PFishingBoat64.png"},
	PGalley: {name: "PGalley", img: "PGalley64.png"},
	Phalanx: {name: "Phalanx", img: "Phalanx64.png"},
	PHorsemen: {name: "PHorsemen", img: "PHorsemen64.png"},
	Pig: {name: "Pig", img: "Pig64.png"},
	PImmortal: {name: "PImmortal", img: "PImmortal64.png"},
	PKardaka: {name: "PKardaka", img: "PKardaka64.png"},
	PMagus: {name: "PMagus", img: "PMagus64.png"},
	PMangonelGalley: {name: "PMangonelGalley", img: "PMangonelGalley64.png"},
	PMerchantTransport: {name: "PMerchantTransport", img: "PMerchantTransport64.png"},
	PMountedArcher: {name: "PMountedArcher", img: "PMountedArcher64.png"},
	PPalintoon: {name: "PPalintoon", img: "PPalintoon64.png"},
	PRamShip: {name: "PRamShip", img: "PRamShip64.png"},
	Priest: {name: "Priest", img: "Priest64.png"},
	PrinceSestoris: {name: "PrinceSestoris", img: "PrinceSestoris64.png"},
	Prodromos: {name: "Prodromos", img: "Prodromos64.png"},
	PRoyalArcher: {name: "PRoyalArcher", img: "PRoyalArcher64.png"},
	PRoyalGuard: {name: "PRoyalGuard", img: "PRoyalGuard64.png"},
	PScout: {name: "PScout", img: "PScout64.png"},
	PScythedChariot: {name: "PScythedChariot", img: "PScythedChariot64.png"},
	PScythianMountedArcher: {name: "PScythianMountedArcher", img: "PScythianMountedArcher64.png"},
	PSparabara: {name: "PSparabara", img: "PSparabara64.png"},
	PSpearman: {name: "PSpearman", img: "PSpearman64.png"},
	PTakabara: {name: "PTakabara", img: "PTakabara64.png"},
	PVillager: {name: "PVillager", img: "PVillager64.png"},
	PWarWagon: {name: "PWarWagon", img: "PWarWagon64.png"},
	QuestGiver: {name: "QuestGiver", img: "QuestGiver64.png"},
	REngineer: {name: "REngineer", img: "REngineer64.png"},
	RTrireme: {name: "RTrireme", img: "RTrireme64.png"},
	SacredDeer: {name: "SacredDeer", img: "SacredDeer64.png"},
	SacredGrove: {name: "SacredGrove", img: "SacredGrove64.png"},
	Scout: {name: "Scout", img: "Scout64.png"},
	SeaEagle: {name: "SeaEagle", img: "SeaEagle64.png"},
	SeaGull: {name: "SeaGull", img: "SeaGull64.png"},
	Sheep: {name: "Sheep", img: "Sheep64.png"},
	SiegeWorkshop: {name: "SiegeWorkshop", img: "SiegeWorkshop64.png"},
	SilverMine: {name: "SilverMine", img: "SilverMine64.png"},
	Somatophylax: {name: "Somatophylax", img: "Somatophylax64.png"},
	SPArcher: {name: "SPArcher", img: "SPArcher64.png"},
	SPChieftain: {name: "SPChieftain", img: "SPChieftain64.png"},
	Spearman: {name: "Spearman", img: "Spearman64.png"},
	SPFishingBoat: {name: "SPFishingBoat", img: "SPFishingBoat64.png"},
	SPFlagship: {name: "SPFlagship", img: "SPFlagship64.png"},
	SPInfantry: {name: "SPInfantry", img: "SPInfantry64.png"},
	SPTransportShip: {name: "SPTransportShip", img: "SPTransportShip64.png"},
	SPWarship: {name: "SPWarship", img: "SPWarship64.png"},
	Stable: {name: "Stable", img: "Stable64.png"},
	StonePile: {name: "StonePile", img: "StonePile64.png"},
	StorageHouse: {name: "StorageHouse", img: "StorageHouse64.png"},
	Temple: {name: "Temple", img: "Temple64.png"},
	Tower: {name: "Tower", img: "Tower64.png"},
	TownCenter: {name: "TownCenter", img: "TownCenter64.png"},
	Toxotai: {name: "Toxotai", img: "Toxotai64.png"},
	TravelPort: {name: "TravelPort", img: "TravelPort64.png"},
	TravelShip: {name: "TravelShip", img: "TravelShip64.png"},
	Treasury: {name: "Treasury", img: "Treasury64.png"},
	Tree: {name: "Tree", img: "Tree64.png"},
	Villager: {name: "Villager", img: "Villager64.png"},
	VillagerFemale: {name: "VillagerFemale", img: "VillagerFemale64.png"},
	VillagerMale: {name: "VillagerMale", img: "VillagerMale64.png"},
	Vulture: {name: "Vulture", img: "Vulture64.png"},
	Wall: {name: "Wall", img: "Wall64.png"},
	WarAcademy: {name: "WarAcademy", img: "WarAcademy64.png"},
	Warehouse: {name: "Warehouse", img: "Warehouse64.png"},
	WatchPost: {name: "WatchPost", img: "WatchPost64.png"},
	WaterBuffalo: {name: "WaterBuffalo", img: "WaterBuffalo64.png"},
	WildCamel: {name: "WildCamel", img: "WildCamel64.png"},
	WildElephant: {name: "WildElephant", img: "WildElephant64.png"},
	Wolf: {name: "Wolf", img: "Wolf64.png"},
	Wonder: {name: "Wonder", img: "Wonder64.png"},
	WonderN: {name: "WonderN", img: "WonderN64.png"},
	WorkShop: {name: "WorkShop", img: "WorkShop64.png"},
	Ziggurat: {name: "Ziggurat", img: "Ziggurat64.png"}
}