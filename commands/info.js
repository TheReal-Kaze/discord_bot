const Discord =require('discord.js')

module.exports = {
    
       run: message => {
        message.channel.send(new Discord.MessageEmbed()
        
        .setDescription(`**__Nuclear-DayZ Surival__**

        IP du serveur: **__ip__**
        Port du serveur: **__27015__**`)
        
       
        
        .setColor('RANDOM'))

        
         
 
        },
     name: 'ip'
     
     }

