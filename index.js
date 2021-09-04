const { ifError } = require('assert')

const Discord = require('discord.js'),
    client = new Discord.Client({
        partials : ['MESSAGE', 'REACTION'],
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')
 
client.login(process.env.token)
client.commands = new Discord.Collection()
 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})
 
client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if(command.guildOnly && !message.guild || !message.guild) return message.channel.send("Tu es entrain de me Mp BANANE!")
    
    command.run(message, args, client)
})
//bvn
client.on('guildMemberAdd', member =>{
     member.guild.channels.cache.get(config.greeting.channel).send(`Salut ${member}, Bienvenue sur Nuclear-DayZ Survival , Lis bien les régles fait !info et t'es bon pour survivre ^^    `)
     member.roles.add(config.greeting.role)
})
//bye
client.on('guildMemberRemove', member =>{
    member.guild.channels.cache.get(config.greeting.channel).send(`${member.user.tag} vient de quitter le serveur... `)
    
})

//pong
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }
  })

 


//monBail
client.on('message', message =>{
    if(message.author.id === '352529919252889600' && message.content === "bot" ) { 	message.react('💎');} 
    
  
    if(message.channel.type ==='dm' && !message.author.bot) return message.channel.send("Non,j'envoie pas de nudes!")
    
    })
//idee
client.on('message', message =>{
    if(message.channel.id === '876278121370906684'    ) {
	message.react('👍'); 
    message.react('🤷‍♂️'); 
    message.react('👎'); 
    
    if(message.author.bot) return
    
    
    message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.author.tag , message.author.displayAvatarURL())
    .setDescription(message.content)
    .setColor(message.member.roles.highest.color)
    .setFooter("👍 Pour • 🤷‍♂️ Pas capter • 👎 Contre •")
    .setTimestamp()
    )
    message.delete()


  }})
    

 client.on('ready', () => {

  const statuses = [
    `Nuclear-DayZ Survie`,
    `Dev : $echo Kaze#1069(Karim)`,
    `Qu'est ce que tu regardes?`
    
  ]

    let i = 0
  setInterval(() => {
      client.user.setActivity(statuses[i], {type: 'PLAYING'})
      i = ++i % statuses.length
  }, 1e4)

 }),



 client.on('message', message =>{
    if(message.channel.id === '876278121370906684'    ) {
	message.react('777293226708828220'); 
    message.react('🤷‍♂️'); 
    message.react('👎'); 

    }})


 client.on('messageReactionAdd', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})
 
client.on('messageReactionRemove', (reaction, user) => {
   
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})





client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '!join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });
