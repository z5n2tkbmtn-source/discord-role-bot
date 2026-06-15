import { client } from "./discord";

const roles = [
  "16-17",
  "18-20",
  "21-25",
  "26+",

  "Männlich",
  "Weiblich",
  "Divers",
  "Keine Angabe",

  "PC",
  "PlayStation",
  "Xbox",
  "Mobile",

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
"Thüringen",

"Dead by Daylight",
"Phasmophobia",
"Minecraft",
"Fortnite",
"Call of Duty",
"Counter-Strike 2",
"League of Legends",
"Valorant",
"Rocket League",
"Rainbow Six Siege",
"GTA Online",
"Apex Legends",
"Repo",
"Genshin Impact",
"Overwatch",
"Need for Speed",


];

export async function createRoles() {
  const guild = await client.guilds.fetch(
    process.env.GUILD_ID!
  );

  for (const role of roles) {

    const existing =
      guild.roles.cache.find(
        r => r.name === role
      );

    if (existing) continue;

    await guild.roles.create({
      name: role
    });

    console.log(`Erstellt: ${role}`);
  }
}