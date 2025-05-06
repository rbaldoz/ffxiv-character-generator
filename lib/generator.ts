const races = [
    { race: "Miqo'te", clans: ["Seekers of the Sun", "Keepers of the Moon"] },
    { race: "Au Ra", clans: ["Raen", "Xaela"] },
    { race: "Lalafell", clans: ["Dunesfolk", "Plainsfolk"] },
    { race: "Elezen", clans: ["Wildwood", "Duskwight"] },
    { race: "Roegadyn", clans: ["Sea Wolves", "Hellsguard"] },
    { race: "Hyur", clans: ["Midlander", "Highlander"]},
    { race: "Viera", clans: ["Rava", "Veena"]},
    { race: "Hrothgar", clans: ["Helions", "The Lost"]}
  ];
  
  const jobs = ["Dragoon", "White Mage", "Ninja", "Dark Knight", "Scholar", "Red Mage", "Bard", "Samurai", "Black Mage", "Paladin", "Warrior"];
  const homelands = ["Limsa Lominsa", "Gridania", "Ul'dah", "Ishgard", "Sharlayan", "Thavnair", "Tulliyolal"];
  const quirks = [
    "thinks moogles are very cute", "only plays the game when a new update is out", "plays for the glamour and accessories",
    "loves raiding and doing harder content", "only plays the game for the main story quest"
  ];
  
  function getRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  export function generateCharacter(seed?: string) {
    const rng = seed ? parseInt(seed, 36) % 1000 : Math.floor(Math.random() * 1000000);
    const raceEntry = getRandom(races);
    return {
      id: rng.toString(36),
      race: raceEntry.race,
      clan: getRandom(raceEntry.clans),
      job: getRandom(jobs),
      homeland: getRandom(homelands),
      quirk: getRandom(quirks),
    };
  }
  