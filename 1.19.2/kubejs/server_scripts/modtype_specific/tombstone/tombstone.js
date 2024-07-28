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

  ☻/ Recipe Corail Tombstone Event Handler
  /▌
  /\﻿

*/
ServerEvents.recipes(event => {
  
  //======= Ankh of Pray =======
  event.shaped('tombstone:ankh_of_pray', ['CBC', 'BAB', 'CBC'], {
    A: '#forge:ingots/gold',
    B: '#forge:rods/wooden',
    C: 'nourished_nether:soul_quartz'
  }).id(`kubejs:tombstone/ankh_of_pray`)

  //======= Grave Dust =======
  event.shapeless('tombstone:grave_dust', ['#forge:all_hammers', 'mysticalagriculture:soulium_gemstone']).id(`kubejs:tombstone/grave_dust`)

  removeRecipeByID(event, [
    'tombstone:ankh_of_pray'
  ])
  
})
