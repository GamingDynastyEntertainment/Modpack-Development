//Priority: 1
/**
  
  █▀▄▀█ █▀█ █▄░█ █░█ █▀▄▀█ █▀▀ █▄░█ ▀█▀ ▄▀█ █░░   █▀▀ ▀▄▀ █▀█ █▀▀ █▀█ █ █▀▀ █▄░█ █▀▀ █▀▀
  █░▀░█ █▄█ █░▀█ █▄█ █░▀░█ ██▄ █░▀█ ░█░ █▀█ █▄▄   ██▄ █░█ █▀▀ ██▄ █▀▄ █ ██▄ █░▀█ █▄▄ ██▄

  ☻/  * @file The playersSleepingPercentag gamerule script
  /▌  * @copyright KnightDexx's Modded Minecraft World & ModernGamingWorld
  /\

*/
ServerEvents.loaded((event) => {

    let gamerules = [{ rule: 'playersSleepingPercentage', value: '1' }]

    gamerules.forEach((gamerule) => {
        if (!event.server.persistentData[gamerule.rule]) {
            event.server.runCommandSilent(`/gamerule ${gamerule.rule} ${gamerule.value}`)
            console.log(`Default Gamerule Applied: ${gamerule.rule} = ${gamerule.value}`)
            event.server.persistentData[gamerule.rule] = gamerule.value
        }
    })

})
