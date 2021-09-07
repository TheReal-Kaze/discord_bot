const Discord =require('discord.js')
module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
    .setTitle('Liste des commandes')
    .setDescription('!help  \n\ !info \n\ !liens \n\ !ip \n\ !annonce \n\ !clear  \n\ !kick \n\ !ban \n\ !mute \n\ !unmute \n\ !ano ' )
    .setColor('RANDOM')
 ),



    name: 'cmd'
}
