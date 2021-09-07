const Discord =require('discord.js')

module.exports = {
    
       run: async( message , member ) => {
         message.channel.send(new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Fait !cmd pour voir les commandes du bot ou !new (oublie pas de lire les regles ;) ) ')
            .setColor('RANDOM')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter(  'Nuclear-Dayz',` https://cdn.discordapp.com/avatars/876417170555412490/78a085345aa4642963d56c6d475ffc23.png?size=4096 `)
            .setTimestamp()
         )
 
 
        },
     name: 'help'
     
     }
