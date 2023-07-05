# ESGI_CTF_2023_discord_bot

## Description
This bot is replying to every message sent by the ID set in the `index.js` file at `<your_discord_id>`.

## Setup
Clone this repository
```
git clone https://github.com/AntWANLAN/ESGI_CTF_2023_discord_bot
```

Go to the cloned folder and init the NodeJS application
```
npm init
```

Install the dependencies
```
npm install discord.js
```

Create an application and a bot => https://discord.com/developers/docs/getting-started

Configure your bot like that:
![image](https://github.com/AntWANLAN/ESGI_CTF_2023_discord_bot/assets/59975732/9b29b400-ba14-42b2-882b-79c852fe663f)

Invite your bot to your Discord server
```
https://discord.com/oauth2/authorize?client_id=<your_discord_bot_id>&permissions=8&scope=bot
```

Update the `index.js` file by replacing `<your_discord_id>` and `<your_bot_token>`.
Update the `package.json` file by adding `"type" : "module",`.

Run the bot
```
node index.js
```
