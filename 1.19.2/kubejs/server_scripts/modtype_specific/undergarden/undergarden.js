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

  ☻/ Recipe The Undergarden Event Handler
  /▌
  /\﻿

*/
ServerEvents.recipes(event => {

  //======= Cloggrum Battleaxe =======
  event.shaped('undergarden:cloggrum_battleaxe', ['ADA', 'ABA', ' B '], {
    A: '#forge:ingots/cloggrum',
    B: '#byg:all/sticks',
    D: '#forge:storage_blocks/cloggrum'
  }).id(`kubejs:undergarden/cloggrum_battleaxe`)
  
})
