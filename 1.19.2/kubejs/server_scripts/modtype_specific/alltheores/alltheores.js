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

  ☻/ Recipe ATO Event Handler
  /▌
  /\﻿

*/
ServerEvents.recipes(event => {

  let oreHammers = ['copper', 'iron', 'bronze', 'invar', 'platinum']

  oreHammers.forEach((metal) => {
    modifyShaped(event, `alltheores:${metal}_ore_hammer`, 1, [' AC', ' BA', 'B  '], {
      A: `#forge:storage_blocks/${metal}`,
      B: '#byg:all/sticks',
      C: '#forge:string'
    })

    removeRecipeByID(event, [`alltheores:${metal}_ore_hammer`])
  })

})
