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

  ☻/ Recipe Sophisticated Storage Event Handler
  /▌
  /\﻿

*/
ServerEvents.recipes(event => {

  //======= Storage Controller =======
  event.shaped('sophisticatedstorage:controller', ['ABA', 'DCD', 'AEA'], {
    A: '#forge:plates/tin',
    B: 'advgenerators:controller',
    C: 'create:andesite_casing',
    D: 'sophisticatedstorage:upgrade_base',
    E: 'minecraft:comparator'
  }).id(`kubejs:sophisticatedstorage/controller`)

  removeRecipeByID(event, [
    'sophisticatedstorage:controller'
  ])

})
