require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

const CREATE_MENUS = false;
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", async () => {
  console.log(`Bot online: ${client.user.tag}`);

  if (!CREATE_MENUS) return;

  const channel = await client.channels.fetch(
    "1498273261912330320"
  );

  const ageMenu = new StringSelectMenuBuilder()
    .setCustomId("alter")
    .setPlaceholder("🎂 Alter auswählen")
    .addOptions([
      {
        label: "16-17",
        value: "16-17",
      },
      {
        label: "18-20",
        value: "18-20",
      },
      {
        label: "21-25",
        value: "21-25",
      },
      {
        label: "26+",
        value: "26+",
      },
    ]);

  const row = new ActionRowBuilder().addComponents(ageMenu);

  await channel.send({
    content: "🎂 Wähle deine Altersgruppe",
    components: [row],
  });

const genderMenu = new StringSelectMenuBuilder()
  .setCustomId("geschlecht")
  .setPlaceholder("⚧️ Geschlecht auswählen")
  .addOptions([
    {
      label: "Männlich",
      value: "Männlich",
    },
    {
      label: "Weiblich",
      value: "Weiblich",
    },
    {
      label: "Divers",
      value: "Divers",
    },
    {
      label: "Keine Angabe",
      value: "Keine Angabe",
    },
  ]);

const genderRow = new ActionRowBuilder()
  .addComponents(genderMenu);

await channel.send({
  content: "⚧️ Wähle dein Geschlecht",
  components: [genderRow],
})
const bundeslandMenu = new StringSelectMenuBuilder()
  .setCustomId("bundesland")
  .setPlaceholder("📍 Bundesland auswählen")
  .addOptions([
    { label: "Baden-Württemberg", value: "Baden-Württemberg" },
    { label: "Bayern", value: "Bayern" },
    { label: "Berlin", value: "Berlin" },
    { label: "Brandenburg", value: "Brandenburg" },
    { label: "Bremen", value: "Bremen" },
    { label: "Hamburg", value: "Hamburg" },
    { label: "Hessen", value: "Hessen" },
    { label: "Mecklenburg-Vorpommern", value: "Mecklenburg-Vorpommern" },
    { label: "Niedersachsen", value: "Niedersachsen" },
    { label: "Nordrhein-Westfalen", value: "Nordrhein-Westfalen" },
    { label: "Rheinland-Pfalz", value: "Rheinland-Pfalz" },
    { label: "Saarland", value: "Saarland" },
    { label: "Sachsen", value: "Sachsen" },
    { label: "Sachsen-Anhalt", value: "Sachsen-Anhalt" },
    { label: "Schleswig-Holstein", value: "Schleswig-Holstein" },
    { label: "Thüringen", value: "Thüringen" }
  ]);

const bundeslandRow = new ActionRowBuilder()
  .addComponents(bundeslandMenu);

await channel.send({
  content: "📍 Wähle dein Bundesland",
  components: [bundeslandRow],
});
const spieleMenu = new StringSelectMenuBuilder()
  .setCustomId("spiele")
  .setPlaceholder("🎮 Spiele auswählen")
  .setMinValues(1)
  .setMaxValues(16)
  .addOptions([
    { label: "Dead by Daylight", value: "Dead by Daylight" },
    { label: "Phasmophobia", value: "Phasmophobia" },
    { label: "Minecraft", value: "Minecraft" },
    { label: "Fortnite", value: "Fortnite" },
    { label: "Call of Duty", value: "Call of Duty" },
    { label: "Counter-Strike 2", value: "Counter-Strike 2" },
    { label: "League of Legends", value: "League of Legends" },
    { label: "Valorant", value: "Valorant" },
    { label: "Rocket League", value: "Rocket League" },
    { label: "Rainbow Six Siege", value: "Rainbow Six Siege" },
    { label: "GTA Online", value: "GTA Online" },
    { label: "Apex Legends", value: "Apex Legends" },
    { label: "Repo", value: "Repo" },
    { label: "Genshin Impact", value: "Genshin Impact" },
    { label: "Overwatch", value: "Overwatch" },
    { label: "Need for Speed", value: "Need for Speed" }
  ]);

const spieleRow = new ActionRowBuilder()
  .addComponents(spieleMenu);

await channel.send({
  content: "🎮 Wähle deine Spiele",
  components: [spieleRow],
});
const plattformMenu = new StringSelectMenuBuilder()
  .setCustomId("plattform")
  .setPlaceholder("🖥️ Plattform auswählen")
  .setMinValues(1)
  .setMaxValues(4)
  .addOptions([
    {
      label: "PC",
      value: "PC"
    },
    {
      label: "PlayStation",
      value: "PlayStation"
    },
    {
      label: "Xbox",
      value: "Xbox"
    },
    {
      label: "Mobile",
      value: "Mobile"
    }
  ]);

const plattformRow = new ActionRowBuilder()
  .addComponents(plattformMenu);

await channel.send({
  content: "🖥️ Wähle deine Plattform(en)",
  components: [plattformRow],
})
  console.log("Menü erstellt");
});

client.on("interactionCreate", async (interaction) => {

  if (!interaction.isStringSelectMenu()) return;

  await interaction.deferReply({
    ephemeral: true
  });

  const roleName = interaction.values[0];

  const member = interaction.member;

  if (interaction.customId === "alter") {

    const roles = ["16-17", "18-20", "21-25", "26+"];

    for (const roleNameToRemove of roles) {
      const role = interaction.guild.roles.cache.find(
        r => r.name === roleNameToRemove
      );

      if (role) {
        await member.roles.remove(role).catch(() => {});
      }
    }

  } else if (interaction.customId === "geschlecht") {

    const roles = [
      "Männlich",
      "Weiblich",
      "Divers",
      "Keine Angabe"
    ];

    for (const roleNameToRemove of roles) {
      const role = interaction.guild.roles.cache.find(
        r => r.name === roleNameToRemove
      );

      if (role) {
        await member.roles.remove(role).catch(() => {});
      }
    }

  } else if (interaction.customId === "bundesland") {

    const roles = [
      "Baden-Württemberg",
      "Bayern",
      "Berlin",
      "Brandenburg",
      "Bremen",
      "Hamburg",
      "Hessen",
      "Mecklenburg-Vorpommern",
      "Niedersachsen",
      "Nordrhein-Westfalen",
      "Rheinland-Pfalz",
      "Saarland",
      "Sachsen",
      "Sachsen-Anhalt",
      "Schleswig-Holstein",
      "Thüringen"
    ];

    for (const roleNameToRemove of roles) {
      const role = interaction.guild.roles.cache.find(
        r => r.name === roleNameToRemove
      );

      if (role) {
        await member.roles.remove(role).catch(() => {});
      }
    }
  }  else if (interaction.customId === "spiele") {

  const selectedGames = interaction.values;

  for (const gameName of selectedGames) {

    const role = interaction.guild.roles.cache.find(
      r => r.name === gameName
    );

    if (role) {
      await member.roles.add(role).catch(() => {});
    }
  }

  await interaction.editReply({
    content: `✅ ${selectedGames.length} Spielrollen vergeben!`
  });

  return;
}

  const selectedRole = interaction.guild.roles.cache.find(
    r => r.name === roleName
  );

  if (selectedRole) {
    await member.roles.add(selectedRole);
  } 
  
  if (interaction.customId === "plattform") {

  const selectedPlatforms = interaction.values;

  const allPlatforms = [
    "PC",
    "PlayStation",
    "Xbox",
    "Mobile"
  ];

  for (const platformName of allPlatforms) {

    const role = interaction.guild.roles.cache.find(
      r => r.name === platformName
    );

    if (role) {
      await member.roles.remove(role).catch(() => {});
    }
  }

  for (const platformName of selectedPlatforms) {

    const role = interaction.guild.roles.cache.find(
      r => r.name === platformName
    );

    if (role) {
      await member.roles.add(role).catch(() => {});
    }
  }

  await interaction.editReply({
    content: `✅ Plattformen aktualisiert!`
  });

  return;

 }
  await interaction.editReply({
  content: `✅ Rolle gesetzt: ${roleName}`
});

});

client.login(process.env.DISCORD_TOKEN);