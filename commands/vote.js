const Discord =require('discord.js')

module.exports = {
    
       run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('VOTEZ!!' )
        .setDescription(`Vous pouvez votez pour le serveur chaque 2 heures ! \n  [-Clickez ici ](liens) pour votez et recupérer les recompenses`)
        .setColor('RANDOM'))
 
 
        },
     name: 'vote'
     
     }






