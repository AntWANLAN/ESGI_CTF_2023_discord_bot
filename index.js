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

/* --->>> Replace <your_discord_id> with your Discord ID <<<--- */
client.on('messageCreate', message => {
    if (message.author.id == '<your_discord_id>') { 
        client.channels.fetch(message.channelId)
            .then(channel => {
                channel.send(message.content);
            });
    }
});

/* --->>> Replace <your_bot_token> with your bot token available here: https://discord.com/developers/applications/<your_bot_token>/bot <<<--- */
client.login("<your_bot_token>");