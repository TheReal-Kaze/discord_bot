const Discord = require('discord.js')

 
module.exports = {
      run: (message, args ) => {
        
        
        const [titre, descri  ] = args.join(" ").split(" /// ")
       

        if(message.author.bot) return

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor("Nuclear-DayZ" , ` https://cdn.discordapp.com/avatars/876417170555412490/78a085345aa4642963d56c6d475ffc23.png?size=4096 `  )
        .setTitle(titre)
        .setDescription(descri)
        .setColor(message.member.roles.highest.color)
        .setFooter(message.author.username , message.author.displayAvatarURL())
        .setTimestamp())
 
       message.delete()
        },
    
    name: 'annonce',
    guildOnly: true
}
