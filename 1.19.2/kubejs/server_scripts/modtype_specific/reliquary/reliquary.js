//Priority: 1000
/*
  ---╔═══╗------------╔═╗--╔═══╗--╔╗-------
  ---║╔═╗║------------║╔╝--║╔══╝-╔╝╚╗------
  ---║║ ║╠══╦══╗--╔══╦╝╚╗--║╚══╦═╩╗╔╬══╗---
  ---║╚═╝║╔╗║║═╣--║╔╗╠╗╔╝--║╔══╣╔╗║║║║═╣---
  ---║╔═╗║╚╝║║═╣--║╚╝║║║---║║--║╔╗║╚╣║═╣---
  ---╚╝ ╚╩═╗╠══╝--╚══╝╚╝---╚╝--╚╝╚╩═╩══╝---
  -------╔═╝║------------------------------
  -------╚══╝------------------------------
*/
/*

  ☻/ Recipe Reliquary Event Handler
  /▌
  /\﻿

*/
ServerEvents.recipes(event => {

  //======= Lilypad of Fertile =======
  event.shaped('reliquary:fertile_lily_pad', ['ABA', 'DCD', 'AEA'], {
    A: 'immersiveengineering:fertilizer',
    B: 'mysticalagriculture:inferium_growth_accelerator',
    C: 'minecraft:lily_pad',
    D: 'create:tree_fertilizer',
    E: 'farmersdelight:organic_compost'
  }).id(`kubejs:xreliquary/fertile_lily_pad`)

  removeRecipeByID(event, [
    'reliquary:fertile_lily_pad'
  ])
  
})
