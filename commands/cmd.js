const Discord =require('discord.js')
module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
    .setTitle('Liste des commandes')
    .setDescription('!help \n\ !ww2 \n\ !new\n\ !liens \n\ !info \n\ !annonce \n\ !clear \n\ !info \n\ !kick \n\ !ban \n\ !mute \n\ !unmute \n\ !ano ' )
    .setColor('RANDOM')
 ),



    name: 'cmd'
}