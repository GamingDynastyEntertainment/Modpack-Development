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

  ☻/ Recipe Simple Storage Network Event Handler
  /▌
  /\﻿

*/
ServerEvents.recipes(event => {

    //======= Storage Network Root =======
    event.shaped('storagenetwork:master', ['ABA', 'BCB', 'ABA'], {
      A: '#forge:gems/quartz',
      B: 'storagenetwork:kabel',
      C: 'sophisticatedstorage:storage_link'
    }).id(`kubejs:storagenetwork/master`)

    //======= Storage Inventory =======
    event.shaped('storagenetwork:inventory', ['ABA', 'BCB', 'ABA'], {
        A: '#functionalstorage:drawer',
        B: 'storagenetwork:kabel',
        C: 'minecraft:dropper'
    }).id(`kubejs:storagenetwork/inventory`)

    //======= Storage Request Table =======
    event.shaped('storagenetwork:request', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:plates/steel',
        B: 'create:mechanical_crafter',
        C: 'storagenetwork:inventory'
    }).id(`kubejs:storagenetwork/request`)
  
    removeRecipeByID(event, [
      'storagenetwork:master',
      'storagenetwork:inventory',
      'storagenetwork:request'
    ])
  
})
