const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.token

bot.on('message', function (message)    {
    if (message.content === '!bière')    {
        message.channel.send(':beers: **Tiens voilà une bonne bière mon ami(e)** :beers:')
    }
    if (message.content === '!coca')    {
        message.channel.send(':tumbler_glass: **Tiens voilà un bon coca sans bulles** :tumbler_glass: ')
    }
    if (message.content === '!cidre')    {
        message.channel.send('**Et deux jus de pomme qui piquent !**')
    }
    if (message.content === '!space')    {
        message.delete()
        message.channel.send('``` ```')
    }
});
bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'R0 - En Attente');
    member.addRole(role)
})
bot.login(token);
