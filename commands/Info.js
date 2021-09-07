const Discord =require('discord.js')

module.exports = {
    
       run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Salut voilà une explication du fonctionnement du DayZ:')
        .setDescription(``)
        .setColor('RANDOM'))
 
 
        },
     name: 'info'
     
     }






