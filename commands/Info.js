const Discord =require('discord.js')

module.exports = {
    
       run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Hey!')
        .setDescription(`Tu dois tout d'abord lire le lore pour comprendre l'histoire et apres cela en lisant les règles tu comprendra petit à petit les bases du serveur etc... le reste se fait en jouant ^^
 Bonne survie :p`)
        .setColor('RANDOM'))
 
 
        },
     name: 'new'
     
     }






