import Discord from 'discord.js';

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent
    ],
    partials: [
        Discord.Partials.Channel,
        Discord.Partials.Message
    ]
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('messageCreate', message => {
    if (message.author.id == '<your_discord_id>') {
        client.channels.fetch(message.channelId)
            .then(channel => {
                channel.send(message.content);
            }
    );
    }
});

client.login("<your_bot_token>");