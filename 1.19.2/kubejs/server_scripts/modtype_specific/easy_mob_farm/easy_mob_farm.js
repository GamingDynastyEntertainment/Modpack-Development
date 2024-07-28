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

  ☻/ Recipe Easy Mob Farm Handler
  /▌
  /\﻿

*/
ServerEvents.recipes(event => {

    //======= Mob Farm Template =======
    const TemplateMaterial = ['copper', 'iron', 'gold', 'netherite']

    TemplateMaterial.forEach((material) => {
        event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: { tag: `forge:storage_blocks/${material}`},
            B: { tag: `forge:ingots/${material}` },
            C: { item: "mekanism:structural_glass" },
            D: { item: "minecraft:hopper" },
            E: { tag: `forge:plates/${material}` },
            F: { item: "create:smart_chute" }
        },
        pattern: [
            "ABBBBBA",
            "BEEEEEB",
            "BECCCEB",
            "BECCCEB",
            "BECCCEB",
            "BEEDEEB",
            "ABBFBBA"
        ],
        result: { item: `easy_mob_farm:${material}_mob_farm_template` }
        }).id(`kubejs:easy_mob_farm/${material}_mob_farm_template`)

        removeRecipeByID(event, [
            `easy_mob_farm:${material}_mob_farm_template_from_${material}_glass_and_hopper`
        ])
    })

})
