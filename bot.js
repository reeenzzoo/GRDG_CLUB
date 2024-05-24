const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

// Crea una instancia de la clase Client con los intentos necesarios
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

// Evento que se ejecuta cuando el bot está en línea
client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);

  // Establece el estado del bot para que aparezca "transmitiendo Grand Theft Auto VI"
  client.user.setPresence({
    activities: [{ 
      name: 'Grand Theft Auto VI', 
      type: ActivityType.Streaming, 
      url: 'https://www.twitch.tv/reeenzzoo' 
    }],
    status: 'online'
  });
});

// Inicia sesión en Discord con el token de tu bot
client.login('MTE5ODcyNzkxMjc4NzAyNjA2MQ.GdZRpj.fynXDvQ2smuaaRNc5AZckzl8F0HuH8T6eS16mw');
