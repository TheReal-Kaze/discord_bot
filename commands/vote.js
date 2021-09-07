const Discord =require('discord.js')

module.exports = {
    
       run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('VOTEZ!!' )
        .setDescription(`**Vous pouvez votez pour le serveur chaque 2 heures !** \n  -[Clickez ici ](https://top-serveurs.net/unturned/vote/frnuclear-dayz-survival) pour votez et nous donner plus de visibilité`)
        .setColor('RANDOM'))
 
 
        },
     name: 'vote'
     
     }






