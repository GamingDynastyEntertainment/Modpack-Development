//Priority: 100
/**
  
  █▀▄▀█ █▀█ █▄░█ █░█ █▀▄▀█ █▀▀ █▄░█ ▀█▀ ▄▀█ █░░   █▀▀ ▀▄▀ █▀█ █▀▀ █▀█ █ █▀▀ █▄░█ █▀▀ █▀▀
  █░▀░█ █▄█ █░▀█ █▄█ █░▀░█ ██▄ █░▀█ ░█░ █▀█ █▄▄   ██▄ █░█ █▀▀ ██▄ █▀▄ █ ██▄ █░▀█ █▄▄ ██▄

  ☻/  * @file The Pressure Plates unify script
  /▌  * @copyright KnightDexx's Modded Minecraft World & ModernGamingWorld
  /\

*/
ServerEvents.recipes(event => {

  let metalMaterial = ['dark_steel', 'soularium']
  let productivetreeMaterial = ['alder', 'allspice', 'almond', 'apricot', 'aquilaria', 'asai_palm', 'ash', 'aspen', 'avocado', 'balsa', 'balsam_fir', 'banana', 'beech', 'beliy_naliv_apple', 'black_cherry', 'black_ember', 'black_locust', 'blackthorn', 'blue_mahoe', 'blue_yonder', 'boxwood', 'brazil_nut', 'brazilwood', 'breadfruit', 'brown_amber', 'coconut', 'coffea', 'copoazu', 'copper_beech', 'cork_oak', 'cultivated_pear', 'date_palm', 'dogwood', 'douglas_fir', 'elderberry', 'elm', 'european_larch', 'finger_lime', 'firecracker', 'flickering_sun', 'flowering_crabapple', 'foggy_blast', 'ginkgo', 'golden_delicious_apple', 'grandidiers_baobab', 'granny_smith_apple', 'grapefruit', 'great_sallow', 'greenheart', 'hawthorn', 'mandarin', 'mango', 'monkey_puzzle', 'moonlight_magic_crepe_myrtle', 'myrtle_ebony', 'nectarine', 'night_fuchsia', 'nutmeg', 'old_fustic', 'olive', 'orange', 'osange_orange', 'padauk', 'pandanus', 'papaya', 'peach', 'pecan', 'persimmon', 'pink_ipe', 'pink_ivory', 'pistachio', 'plantain', 'plum', 'pomegranate', 'pomelo', 'salak', 'sand_pear', 'sandalwood', 'satsuma', 'sequoia', 'silver_fir', 'silver_lime', 'slimy_delight', 'socotra_dragon', 'soul_tree', 'sour_cherry', 'soursop', 'sparkle_cherry', 'star_anise', 'star_fruit', 'sugar_apple', 'sugar_maple', 'swamp_gum', 'sweet_chestnut', 'sweet_crabapple', 'sweetgum', 'sycamore_fig', 'tangerine', 'teak', 'thunder_bolt', 'buddhas_hand', 'bull_pine', 'butternut', 'cacao', 'candlenut', 'carob', 'cashew', 'cave_dweller', 'cedar', 'cempedak', 'ceylon_ebony', 'cherry_plum', 'cinnamon', 'citron', 'clove', 'cocobolo', 'hazel', 'holly', 'hornbeam', 'ipe', 'iroko', 'jackfruit', 'juniper', 'kapok', 'key_lime', 'kumquat', 'lawson_cypress', 'lemon', 'lime', 'loblolly_pine', 'logwood', 'mahogany', 'prairie_crabapple', 'purple_blackthorn', 'purple_crepe_myrtle', 'purple_ipe', 'purple_spiral', 'purpleheart', 'rainbow_gum', 'red_banana', 'red_crepe_myrtle', 'red_delicious_apple', 'red_maple', 'rippling_willow', 'rose_gum', 'rosewood', 'rowan', 'rubber_tree', 'time_traveller', 'tuscarora_crepe_myrtle', 'walnut', 'water_wonder', 'wenge', 'western_hemlock', 'white_ipe', 'white_poplar', 'white_willow', 'whitebeam', 'wild_cherry', 'yellow_meranti', 'yew', 'zebrano']
  let alexsWood = ['pewen', 'thornwood']
  let bloomingNature = ['larch', 'baobab', 'aspen', 'swamp_oak', 'swamp_cypress', 'fan_palm', 'ebony', 'chestnut', 'fir']
  let edolonWood = ['polished', 'illwood']

  //=== Metal Pressure Plates ===
  metalMaterial.forEach((metal) => {
    event.shaped(`enderio:${metal}_pressure_plate`, [' A ', ' A ', ' B '], {
      A: `#forge:ingots/${metal}`,
      B: '#modernrecipes:tools/hammers'
    }).id(`kubejs:enderio/${metal}_pressure_plate`)

    removeRecipeByID(event, [
      'twilightforest:wood/dark_plate',
      `enderio:${metal}_pressure_plate`,
    ])

  })

  //=== Productive Trees Plates ===
  productivetreeMaterial.forEach((wood) => {
    event.shaped(`productivetrees:${wood}_pressure_plate`, [' A ', ' A ', ' B '], {
      A: `productivetrees:${wood}_planks`,
      B: '#modernrecipes:tools/hammers'
    }).id(`kubejs:productivetrees/${wood}_pressure_plate`)

    removeRecipeByID(event, [
      `productivetrees:pressure_plate/${wood}_pressure_plate`,
    ])

  })

  //=== Alex's Caves Plates ===
  alexsWood.forEach((wood) => {
    event.shaped(`alexscaves:${wood}_pressure_plate`, [' A ', ' A ', ' B '], {
      A: `alexscaves:${wood}_planks`,
      B: '#modernrecipes:tools/hammers'
    }).id(`kubejs:alexscaves/${wood}_pressure_plate`)

    removeRecipeByID(event, [
      `alexscaves:${wood}_pressure_plate`,
    ])

  })

  //=== Blooming Nature Plates ===
  bloomingNature.forEach((wood) => {
    event.shaped(`bloomingnature:${wood}_pressure_plate`, [' A ', ' A ', ' B '], {
      A: `bloomingnature:${wood}_planks`,
      B: '#modernrecipes:tools/hammers'
    }).id(`kubejs:bloomingnature/${wood}_pressure_plate`)

    removeRecipeByID(event, [
      `bloomingnature:${wood}_pressure_plate`,
    ])

  })

  //=== Eidolon:Repraised Plates ===
  edolonWood.forEach((wood) => {
    event.shaped(`eidolon:${wood}_pressure_plate`, [' A ', ' A ', ' B '], {
      A: `eidolon:${wood}_planks`,
      B: '#modernrecipes:tools/hammers'
    }).id(`kubejs:eidolon/${wood}_pressure_plate`)

    removeRecipeByID(event, [
      `eidolon:${wood}_planks_pressure_plate`,
    ])

  })

  //=== [Let's Do] Vinery Plates ===
  event.shaped('vinery:dark_cherry_pressure_plate', [' A ', ' A ', ' B '], {
    A: 'vinery:dark_cherry_planks',
    B: '#modernrecipes:tools/hammers'
  }).id(`kubejs:vinery/dark_cherry_pressure_plate`)

  //=== [Let's Do] Beachparty Plates ===
  event.shaped('beachparty:palm_pressure_plate', [' A ', ' A ', ' B '], {
    A: 'beachparty:palm_planks',
    B: '#modernrecipes:tools/hammers'
  }).id(`kubejs:beachparty/palm_pressure_plate`)

  //=== [Let's Do] Meadow Plates ===
  event.shaped('meadow:pine_pressure_plate', [' A ', ' A ', ' B '], {
    A: 'meadow:pine_planks',
    B: '#modernrecipes:tools/hammers'
  }).id(`kubejs:meadow/pine_pressure_plate`)

  //=== Removed recipes ===
  removeRecipeByID(event, [
    'twilightforest:wood/dark_plate',
    'vinery:dark_cherry_pressure_plate',
    'beachparty:palm_pressure_plate',
    'meadow:pine_pressure_plate'
  ])
    
})
