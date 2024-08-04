//Priority: 3
/**
  
  █▀▄▀█ █▀█ █▄░█ █░█ █▀▄▀█ █▀▀ █▄░█ ▀█▀ ▄▀█ █░░   █▀▀ ▀▄▀ █▀█ █▀▀ █▀█ █ █▀▀ █▄░█ █▀▀ █▀▀
  █░▀░█ █▄█ █░▀█ █▄█ █░▀░█ ██▄ █░▀█ ░█░ █▀█ █▄▄   ██▄ █░█ █▀▀ ██▄ █▀▄ █ ██▄ █░▀█ █▄▄ ██▄

  ☻/  * @file Starting Kit script for give Player starting items on first login
  /▌  * @copyright KnightDexx's Modded Minecraft World & ModernGamingWorld
  /\

*/
PlayerEvents.loggedIn(event => {

	//=== Check if player doesn't have "Starting Items" & "Game Stage" yet ===
	if (!event.player.stages.has('starting_items')) {
		//=== Add the Game Stage ===
		event.player.stages.add('starting_items')
		//=== Give the player "Starting Kit" ===
		event.player.setOffHandItem('minecraft:shield')
		event.player.setHeadArmorItem('minecraft:leather_helmet')
		event.player.setChestArmorItem('minecraft:leather_chestplate')
		event.player.setLegsArmorItem('minecraft:leather_leggings')
		event.player.setFeetArmorItem('minecraft:leather_boots')
		event.player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{advancedperipherals:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}}},ae2:{0:{Count:1.0d,id:"ae2:guide"}},apotheosis:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},ars_nouveau:{0:{Count:1.0d,id:"ars_nouveau:worn_notebook"}},botania:{0:{Count:1.0d,id:"botania:lexicon"}},caupona:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"caupona:book"}}},croptopia:{0:{Count:1.0d,id:"croptopia:guide"}},cyclic:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"cyclic:cyclic_guide_book"}}},engineersdecor:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"engineersdecor:engineersdecor_manual"}}},enigmaticlegacy:{0:{Count:1.0d,id:"enigmaticlegacy:the_acknowledgment"}},essentials:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"essentials:manual"}}},extendedcrafting:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"extendedcrafting:guide"}}},ftbquests:{0:{Count:1.0d,id:"ftbquests:book"}},immersiveengineering:{0:{Count:1.0d,id:"immersiveengineering:manual"}},industrialforegoing:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}}},littlelogistics:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"littlelogistics:guide"}}},modonomicon:{0:{Count:1.0d,id:"modonomicon:modonomicon",tag:{"modonomicon:book_id":"modonomicon:demo"}}},modularrouters:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}}},mysticalagriculture:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"mysticalagriculture:guide"}}},naturesaura:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}}},occultism:{0:{Count:1.0d,id:"occultism:dictionary_of_spirits",tag:{"modonomicon:book_id":"occultism:dictionary_of_spirits"}}},pneumaticcraft:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}}},productivebees:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"productivebees:guide"}}},rftoolsbase:{0:{Count:1.0d,id:"rftoolsbase:manual"}},sebastrnlib:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"sebastrnlib:sebastrn_mods_guide_book"}}},securitycraft:{0:{Count:1.0d,id:"securitycraft:sc_manual"}},solcarrot:{0:{Count:1.0d,id:"solcarrot:food_book"}},sushigocrafting:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"sushigocrafting:sushigocrafting"}}},thermal:{0:{Count:1.0d,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}}},"eccentrictome:version":1.0d}'))
		event.player.give('4x minecraft:oak_sapling')
		event.player.give('minecraft:iron_sword')
		event.player.give('minecraft:iron_pickaxe')
		event.player.give('minecraft:iron_shovel')
		event.player.give('minecraft:iron_axe')
		event.player.give('constructionwand:iron_wand')
		event.player.give('naturescompass:naturescompass')
		event.player.give('sophisticatedbackpacks:backpack')
		event.player.give('4x minecraft:cookie')
		event.player.give('comforts:sleeping_bag_light_blue')
		event.player.give('minecraft:crafting_table')
		event.player.give('sawmill:sawmill')
	}

})
