export interface MapMod {
  value: string
  scary: number
  matchSafe: string
  matchUnsafe: string
  conflictingMaps: string[]
}
 
export const mapModifiers: { [key: string]: MapMod } = {
 "Monsters reflect X% of Elemental Damage": {
   value: "Monsters reflect X% of Elemental Damage",
   scary: 0,
   matchSafe: "\"tal d\"",
   matchUnsafe: "\"f el\"",
   conflictingMaps: [],
 },
 "Monsters reflect X% of Physical Damage": {
   value: "Monsters reflect X% of Physical Damage",
   scary: 1,
   matchSafe: "\"f ph\"",
   matchUnsafe: "\"f p\"",
   conflictingMaps: [],
 },
 "Players cannot Regenerate Life, Mana or Energy Shield": {
   value: "Players cannot Regenerate Life, Mana or Energy Shield",
   scary: 2,
   matchSafe: "ege",
   matchUnsafe: "eg",
   conflictingMaps: [],
 },
 "Cannot Leech from Monsters": {
   value: "Cannot Leech from Monsters",
   scary: 3,
   matchSafe: "eec",
   matchUnsafe: "eec",
   conflictingMaps: [],
 },
 "Players are Cursed with Temporal Chains": {
   value: "Players are Cursed with Temporal Chains",
   scary: 100,
   matchSafe: "\"h t\"",
   matchUnsafe: "emp",
   conflictingMaps: ["The Twilight Temple", "Moon Temple Map", "Temple Map", "Ivory Temple Map", "Crimson Temple Map"],
 },
 "-X% maximum Player Resistances": {
   value: "-X% maximum Player Resistances",
   scary: 101,
   matchSafe: "ces",
   matchUnsafe: "ces",
   conflictingMaps: [],
 },
 "Players have X% less Recovery Rate of Life and Energy Shield": {
   value: "Players have X% less Recovery Rate of Life and Energy Shield",
   scary: 102,
   matchSafe: "\"ss r\"",
   matchUnsafe: "\"f l\"",
   conflictingMaps: [],
 },
 "Monsters are Hexproof": {
   value: "Monsters are Hexproof",
   scary: 200,
   matchSafe: "\"re h\"",
   matchUnsafe: "hex",
   conflictingMaps: [],
 },
 "Unique Bosses are Possessed": {
   value: "Unique Bosses are Possessed",
   scary: 201,
   matchSafe: "poss",
   matchUnsafe: "poss",
   conflictingMaps: [],
 },
 "Players have X% reduced effect of Non-Curse Auras from Skills": {
   value: "Players have X% reduced effect of Non-Curse Auras from Skills",
   scary: 203,
   matchSafe: "non",
   matchUnsafe: "non",
   conflictingMaps: [],
 },
 "Players are Cursed with Enfeeble": {
   value: "Players are Cursed with Enfeeble",
   scary: 204,
   matchSafe: "\"h en\"",
   matchUnsafe: "eb",
   conflictingMaps: ["Iceberg Map"],
 },
 "Monsters have X% increased Critical Strike Chance": {
   value: "Monsters have X% increased Critical Strike Chance",
   scary: 205,
   matchSafe: "\"ike \"",
   matchUnsafe: "\"d cr\"",
   conflictingMaps: [],
 },
 "Unique Boss deals X% increased Damage": {
   value: "Unique Boss deals X% increased Damage",
   scary: 206,
   matchSafe: "eals",
   matchUnsafe: "eals",
   conflictingMaps: [],
 },
 "X% increased Monster Damage": {
   value: "X% increased Monster Damage",
   scary: 207,
   matchSafe: "\"d monster d\"",
   matchUnsafe: "\"d monster d\"",
   conflictingMaps: [],
 },
 "Monsters deal X% extra Physical Damage as Cold": {
   value: "Monsters deal X% extra Physical Damage as Cold",
   scary: 208,
   matchSafe: "\"as c\"",
   matchUnsafe: "col",
   conflictingMaps: [],
 },
 "Monsters deal X% extra Physical Damage as Fire": {
   value: "Monsters deal X% extra Physical Damage as Fire",
   scary: 209,
   matchSafe: "\" as f\"",
   matchUnsafe: "\" as f\"",
   conflictingMaps: [],
 },
 "Monsters deal X% extra Physical Damage as Lightning": {
   value: "Monsters deal X% extra Physical Damage as Lightning",
   scary: 210,
   matchSafe: "\"s l\"",
   matchUnsafe: "ht",
   conflictingMaps: ["The Twilight Temple", "Acton's Nightmare"],
 },
 "Area has patches of Shocked Ground which increase Damage taken by X%": {
   value: "Area has patches of Shocked Ground which increase Damage taken by X%",
   scary: 211,
   matchSafe: "ked",
   matchUnsafe: "wh",
   conflictingMaps: [],
 },
 "All Monster Damage from Hits always Ignites": {
   value: "All Monster Damage from Hits always Ignites",
   scary: 212,
   matchSafe: "lw",
   matchUnsafe: "lw",
   conflictingMaps: [],
 },
 "Monsters cannot be Stunned": {
   value: "Monsters cannot be Stunned",
   scary: 213,
   matchSafe: "tun",
   matchUnsafe: "tu",
   conflictingMaps: ["Estuary Map", "Olmec's Sanctum"],
 },
 "X% increased Monster Movement Speed": {
   value: "X% increased Monster Movement Speed",
   scary: 214,
   matchSafe: "mov",
   matchUnsafe: "mov",
   conflictingMaps: [],
 },
 "Monsters have a X% chance to cause Elemental Ailments on Hit": {
   value: "Monsters have a X% chance to cause Elemental Ailments on Hit",
   scary: 215,
   matchSafe: "cau",
   matchUnsafe: "us",
   conflictingMaps: ["Museum Map", "Mausoleum Map"],
 },
 "Monsters Poison on Hit": {
   value: "Monsters Poison on Hit",
   scary: 216,
   matchSafe: "\"s po\"",
   matchUnsafe: "\"n o\"",
   conflictingMaps: [],
 },
 "Monsters' Action Speed cannot be modified to below base value": {
   value: "Monsters' Action Speed cannot be modified to below base value",
   scary: 217,
   matchSafe: "odi",
   matchUnsafe: "ba",
   conflictingMaps: ["Oba's Cursed Trove"],
 },
 "Monsters have X% chance to Impale with Attacks": {
   value: "Monsters have X% chance to Impale with Attacks",
   scary: 218,
   matchSafe: "\"o i\"",
   matchUnsafe: "\"o i\"",
   conflictingMaps: [],
 },
 "Monsters have X% increased Area of Effect": {
   value: "Monsters have X% increased Area of Effect",
   scary: 219,
   matchSafe: "\"ed a\"",
   matchUnsafe: "\"ed a\"",
   conflictingMaps: [],
 },
 "Areas have patches of Consecrated Ground": {
   value: "Areas have patches of Consecrated Ground",
   scary: 300,
   matchSafe: "areas",
   matchUnsafe: "nse",
   conflictingMaps: ["Conservatory Map"],
 },
 "Monsters gain X% of Maximum Life as Extra Maximum Energy Shield": {
   value: "Monsters gain X% of Maximum Life as Extra Maximum Energy Shield",
   scary: 301,
   matchSafe: "\"m l\"",
   matchUnsafe: "\"f m\"",
   conflictingMaps: [],
 },
 "Unique Boss has X% increased Life": {
   value: "Unique Boss has X% increased Life",
   scary: 302,
   matchSafe: "\"ss h\"",
   matchUnsafe: "\"d l\"",
   conflictingMaps: [],
 },
 "X% more Monster Life": {
   value: "X% more Monster Life",
   scary: 303,
   matchSafe: "more",
   matchUnsafe: "mor",
   conflictingMaps: ["Primordial Pool Map"],
 },
 "Players cannot inflict Exposure": {
   value: "Players cannot inflict Exposure",
   scary: 304,
   matchSafe: "fli",
   matchUnsafe: "inf",
   conflictingMaps: [],
 },
 "+X% Monster Physical Damage Reduction": {
   value: "+X% Monster Physical Damage Reduction",
   scary: 305,
   matchSafe: "uct",
   matchUnsafe: "uct",
   conflictingMaps: [],
 },
 "+X% Monster Chaos Resistance": {
   value: "+X% Monster Chaos Resistance",
   scary: 306,
   matchSafe: "\"os r\"",
   matchUnsafe: "ao",
   conflictingMaps: ["Mao Kun", "Maelström of Chaos"],
 },
 "X% less effect of Curses on Monsters": {
   value: "X% less effect of Curses on Monsters",
   scary: 307,
   matchSafe: "rses",
   matchUnsafe: "rses",
   conflictingMaps: [],
 },
 "Monsters have +X% chance to Suppress Spell Damage": {
   value: "Monsters have +X% chance to Suppress Spell Damage",
   scary: 308,
   matchSafe: "\"o s\"",
   matchUnsafe: "\"o s\"",
   conflictingMaps: [],
 },
 "Players have X% reduced Chance to Block": {
   value: "Players have X% reduced Chance to Block",
   scary: 309,
   matchSafe: "loc",
   matchUnsafe: "loc",
   conflictingMaps: [],
 },
 "Players have -X% to amount of Suppressed Spell Damage Prevented": {
   value: "Players have -X% to amount of Suppressed Spell Damage Prevented",
   scary: 310,
   matchSafe: "ev",
   matchUnsafe: "ev",
   conflictingMaps: [],
 },
 "Monsters have X% chance to Avoid Elemental Ailments": {
   value: "Monsters have X% chance to Avoid Elemental Ailments",
   scary: 311,
   matchSafe: "\"id e\"",
   matchUnsafe: "\"id e\"",
   conflictingMaps: [],
 },
 "Monsters take X% reduced Extra Damage from Critical Strikes": {
   value: "Monsters take X% reduced Extra Damage from Critical Strikes",
   scary: 312,
   matchSafe: "kes",
   matchUnsafe: "kes",
   conflictingMaps: [],
 },
 "Buffs on Players expire X% faster": {
   value: "Buffs on Players expire X% faster",
   scary: 400,
   matchSafe: "fs",
   matchUnsafe: "uf",
   conflictingMaps: [],
 },
 "Players gain X% reduced Flask Charges": {
   value: "Players gain X% reduced Flask Charges",
   scary: 401,
   matchSafe: "las",
   matchUnsafe: "fla",
   conflictingMaps: [],
 },
 "Players have X% less Area of Effect": {
   value: "Players have X% less Area of Effect",
   scary: 402,
   matchSafe: "\"ss ar\"",
   matchUnsafe: "\"ss ar\"",
   conflictingMaps: [],
 },
 "Players have X% less Cooldown Recovery Rate": {
   value: "Players have X% less Cooldown Recovery Rate",
   scary: 403,
   matchSafe: "coo",
   matchUnsafe: "do",
   conflictingMaps: [],
 },
 "Players have X% less Accuracy Rating": {
   value: "Players have X% less Accuracy Rating",
   scary: 404,
   matchSafe: "cc",
   matchUnsafe: "cc",
   conflictingMaps: [],
 },
 "Players are Cursed with Vulnerability": {
   value: "Players are Cursed with Vulnerability",
   scary: 405,
   matchSafe: "\"h v\"",
   matchUnsafe: "vu",
   conflictingMaps: [],
 },
 "Players are Cursed with Elemental Weakness": {
   value: "Players are Cursed with Elemental Weakness",
   scary: 406,
   matchSafe: "\"h el\"",
   matchUnsafe: "kn",
   conflictingMaps: [],
 },
 "Monsters' skills Chain 2 additional times": {
   value: "Monsters' skills Chain 2 additional times",
   scary: 407,
   matchSafe: "tim",
   matchUnsafe: "tim",
   conflictingMaps: [],
 },
 "Monsters fire 2 additional Projectiles": {
   value: "Monsters fire 2 additional Projectiles",
   scary: 408,
   matchSafe: "oj",
   matchUnsafe: "j",
   conflictingMaps: ["Poorjoy's Asylum"],
 },
 "Monsters have a X% chance to avoid Poison, Impale, and Bleeding": {
   value: "Monsters have a X% chance to avoid Poison, Impale, and Bleeding",
   scary: 409,
   matchSafe: "n,",
   matchUnsafe: "n,",
   conflictingMaps: [],
 },
 "Monsters gain an Endurance Charge on Hit": {
   value: "Monsters gain an Endurance Charge on Hit",
   scary: 410,
   matchSafe: "\"n e\"",
   matchUnsafe: "\"an \"",
   conflictingMaps: [],
 },
 "Monsters gain a Frenzy Charge on Hit": {
   value: "Monsters gain a Frenzy Charge on Hit",
   scary: 411,
   matchSafe: "\"a f\"",
   matchUnsafe: "\"a f\"",
   conflictingMaps: [],
 },
 "Monsters gain a Power Charge on Hit": {
   value: "Monsters gain a Power Charge on Hit",
   scary: 412,
   matchSafe: "\" a p\"",
   matchUnsafe: "\" a p\"",
   conflictingMaps: [],
 },
 "Monsters Blind on Hit": {
   value: "Monsters Blind on Hit",
   scary: 413,
   matchSafe: "\"rs b\"",
   matchUnsafe: "bli",
   conflictingMaps: [],
 },
 "Monsters Maim on Hit with Attacks": {
   value: "Monsters Maim on Hit with Attacks",
   scary: 414,
   matchSafe: "aim",
   matchUnsafe: "mai",
   conflictingMaps: [],
 },
 "Monsters Hinder on Hit with Spells": {
   value: "Monsters Hinder on Hit with Spells",
   scary: 415,
   matchSafe: "hind",
   matchUnsafe: "hin",
   conflictingMaps: ["Doryani's Machinarium"],
 },
 "Monsters steal Power, Frenzy and Endurance charges on Hit": {
   value: "Monsters steal Power, Frenzy and Endurance charges on Hit",
   scary: 416,
   matchSafe: "r,",
   matchUnsafe: "r,",
   conflictingMaps: [],
 },
 "Area has patches of Burning Ground": {
   value: "Area has patches of Burning Ground",
   scary: 417,
   matchSafe: "\"g g\"",
   matchUnsafe: "rn",
   conflictingMaps: ["Acid Caverns Map"],
 },
 "Area has patches of Chilled Ground": {
   value: "Area has patches of Chilled Ground",
   scary: 418,
   matchSafe: "hil",
   matchUnsafe: "chi",
   conflictingMaps: [],
 },
 "Area has patches of desecrated ground": {
   value: "Area has patches of desecrated ground",
   scary: 419,
   matchSafe: "esecrate",
   matchUnsafe: "des",
   conflictingMaps: [],
 },
 "Area is inhabited by 2 additional Rogue Exiles": {
   value: "Area is inhabited by 2 additional Rogue Exiles",
   scary: 500,
   matchSafe: "rog",
   matchUnsafe: "gu",
   conflictingMaps: [],
 },
 "Area contains many Totems": {
   value: "Area contains many Totems",
   scary: 500,
   matchSafe: "tot",
   matchUnsafe: "ny",
   conflictingMaps: ["Canyon Map"],
 },
 "Rare Monsters each have a Nemesis Mod": {
   value: "Rare Monsters each have a Nemesis Mod",
   scary: 600,
   matchSafe: "rar",
   matchUnsafe: "rar",
   conflictingMaps: [],
 },
 "Area contains two Unique Bosses": {
   value: "Area contains two Unique Bosses",
   scary: 600,
   matchSafe: "two",
   matchUnsafe: "tw",
   conflictingMaps: [],
 },
 "Magic Monster Packs each have a Bloodline Mod": {
   value: "Magic Monster Packs each have a Bloodline Mod",
   scary: 600,
   matchSafe: "agi",
   matchUnsafe: "gi",
   conflictingMaps: [],
 },
 "Slaying Enemies close together has a X% chance to attract monsters from Beyond": {
   value: "Slaying Enemies close together has a X% chance to attract monsters from Beyond",
   scary: 900,
   matchSafe: "yi",
   matchUnsafe: "sl",
   conflictingMaps: [],
 },
 "Area is inhabited by Abominations": {
   value: "Area is inhabited by Abominations",
   scary: 1000,
   matchSafe: "bom",
   matchUnsafe: "abo",
   conflictingMaps: [],
 },
 "Area is inhabited by Animals": {
   value: "Area is inhabited by Animals",
   scary: 1000,
   matchSafe: "nim",
   matchUnsafe: "ani",
   conflictingMaps: [],
 },
 "Area is inhabited by Demons": {
   value: "Area is inhabited by Demons",
   scary: 1000,
   matchSafe: "emons",
   matchUnsafe: "dem",
   conflictingMaps: [],
 },
 "Area is inhabited by Ghosts": {
   value: "Area is inhabited by Ghosts",
   scary: 1000,
   matchSafe: "hos",
   matchUnsafe: "gho",
   conflictingMaps: [],
 },
 "Area is inhabited by Goatmen": {
   value: "Area is inhabited by Goatmen",
   scary: 1000,
   matchSafe: "goa",
   matchUnsafe: "go",
   conflictingMaps: ["Phantasmagoria Map"],
 },
 "Area is inhabited by Humanoids": {
   value: "Area is inhabited by Humanoids",
   scary: 1000,
   matchSafe: "hum",
   matchUnsafe: "hu",
   conflictingMaps: ["Whakawairua Tuahu"],
 },
 "Area is inhabited by Cultists of Kitava": {
   value: "Area is inhabited by Cultists of Kitava",
   scary: 1000,
   matchSafe: "cul",
   matchUnsafe: "lt",
   conflictingMaps: ["Vault Map", "Vaults of Atziri"],
 },
 "Area is inhabited by Lunaris fanatics": {
   value: "Area is inhabited by Lunaris fanatics",
   scary: 1000,
   matchSafe: "unari",
   matchUnsafe: "lun",
   conflictingMaps: [],
 },
 "Area is inhabited by ranged monsters": {
   value: "Area is inhabited by ranged monsters",
   scary: 1000,
   matchSafe: "ang",
   matchUnsafe: "ang",
   conflictingMaps: [],
 },
 "Area is inhabited by Skeletons": {
   value: "Area is inhabited by Skeletons",
   scary: 1000,
   matchSafe: "eto",
   matchUnsafe: "ske",
   conflictingMaps: [],
 },
 "Area is inhabited by Solaris fanatics": {
   value: "Area is inhabited by Solaris fanatics",
   scary: 1000,
   matchSafe: "lari",
   matchUnsafe: "sol",
   conflictingMaps: ["Mausoleum Map"],
 },
 "Area is inhabited by Sea Witches and their Spawn": {
   value: "Area is inhabited by Sea Witches and their Spawn",
   scary: 1000,
   matchSafe: "ei",
   matchUnsafe: "ei",
   conflictingMaps: [],
 },
 "Area is inhabited by Undead": {
   value: "Area is inhabited by Undead",
   scary: 1000,
   matchSafe: "\"y u\"",
   matchUnsafe: "ead",
   conflictingMaps: [],
 },
 "Area has increased monster variety": {
   value: "Area has increased monster variety",
   scary: 1000,
   matchSafe: "var",
   matchUnsafe: "var",
   conflictingMaps: [],
 },
};