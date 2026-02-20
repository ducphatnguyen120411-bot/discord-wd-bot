const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("Bot online!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  if (msg === "w/d") {
    await message.react("🇼");
    await message.react("🔁");
    await message.react("🇩");
  }

  if (msg === "a/d") {
    await message.react("🇦");
    await message.react("🔁");
    await message.react("🇩");
  }

  if (msg === "w/l") {
    await message.react("🇼");
    await message.react("🔁");
    await message.react("🇱");
  }
});

client.login(process.env.TOKEN);
