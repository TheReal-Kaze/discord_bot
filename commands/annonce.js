const Discord = require('discord.js')

 
module.exports = {
      run: (message, args ) => {
        
        
        const [titre, descri  ] = args.join(" ").split(" /// ")
       

        if(message.author.bot) return

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor("Nuclear-DayZ"  )
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
