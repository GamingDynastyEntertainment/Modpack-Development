//Priority: 7
/**
  
  █▀▄▀█ █▀█ █▄░█ █░█ █▀▄▀█ █▀▀ █▄░█ ▀█▀ ▄▀█ █░░   █▀▀ ▀▄▀ █▀█ █▀▀ █▀█ █ █▀▀ █▄░█ █▀▀ █▀▀
  █░▀░█ █▄█ █░▀█ █▄█ █░▀░█ ██▄ █░▀█ ░█░ █▀█ █▄▄   ██▄ █░█ █▀▀ ██▄ █▀▄ █ ██▄ █░▀█ █▄▄ ██▄

  ☻/  * @file Global Constants for use in other scripts
  /▌  * @copyright KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
  /\

*/
const colors = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
]

const lootChests = ['lootr:lootr_chest', 'lootr:lootr_barrel', 'lootr:lootr_trapped_chest']

const createStoneTypes = ['scoria', 'limestone', 'weathered_limestone', 'dolomite', 'gabbro', 'dark_scoria', 'natural_scoria']

const quark_crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black']

const botanypotmaterial = [
  'terracotta',
  'white_terracotta',
  'orange_terracotta',
  'magenta_terracotta',
  'light_blue_terracotta',
  'yellow_terracotta',
  'lime_terracotta',
  'pink_terracotta',
  'gray_terracotta',
  'light_gray_terracotta',
  'cyan_terracotta',
  'purple_terracotta',
  'blue_terracotta',
  'brown_terracotta',
  'green_terracotta',
  'red_terracotta',
  'black_terracotta',
  'white_concrete',
  'orange_concrete',
  'magenta_concrete',
  'light_blue_concrete',
  'yellow_concrete',
  'lime_concrete',
  'pink_concrete',
  'gray_concrete',
  'light_gray_concrete',
  'cyan_concrete',
  'purple_concrete',
  'blue_concrete',
  'brown_concrete',
  'green_concrete',
  'red_concrete',
  'black_concrete',
  'white_glazed_terracotta',
  'orange_glazed_terracotta',
  'magenta_glazed_terracotta',
  'light_blue_glazed_terracotta',
  'yellow_glazed_terracotta',
  'lime_glazed_terracotta',
  'pink_glazed_terracotta',
  'gray_glazed_terracotta',
  'light_gray_glazed_terracotta',
  'cyan_glazed_terracotta',
  'purple_glazed_terracotta',
  'blue_glazed_terracotta',
  'brown_glazed_terracotta',
  'green_glazed_terracotta',
  'red_glazed_terracotta',
  'black_glazed_terracotta'
]

const gear = [
  'signalum',
  'constantan',
  'nickel',
  'lead',
  'silver',
  'tin',
  'steel',
  'invar',
  'electrum',
  'bronze',
  'iron',
  'gold',
  'diamond',
  'copper',
  'enderium',
  'lumium'
]

const plates = [
  'brass',
  'aluminum',
  'nickel',
  'platinum',
  'tin',
  'uranium',
  'zinc',
  'steel',
  'invar',
  'bronze',
  'electrum',
  'iron',
  'gold',
  'diamond',
  'enderium',
  'lumium',
  'constantan',
  'signalum'
]

const air = 'minecraft:air'

let modifyShaped = (event, result, count, pattern, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shaped' })
  event.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}

let modifyShapeless = (event, result, count, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  event.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}

let modifySmelt = (event, result, ingredients) => {
  event.remove({ output: result, type: 'minecraft:smelting' })
  event.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}

let removeRecipeByID = (event, recipes) => {
  recipes.forEach(recipe => {
    event.remove({ id: recipe })
  })
}

let maInfusion = (event, output, middle, item1, item2, item3, item4, item5, item6, item7, item8) => {
  event.recipes.mysticalagriculture.infusion({
    input: { item: middle },
    ingredients: [
      { item: item1 },
      { item: item2 },
      { item: item3 },
      { item: item4 },
      { item: item5 },
      { item: item6 },
      { item: item7 },
      { item: item8 }
    ],
    result: { item: output }
  }).id(`kubejs:mainfusion/${output.replace(':', '/')}`)
}