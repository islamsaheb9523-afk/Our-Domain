// anime-data.js
const animeDatabase = [
  { id: "sentence-hero", title: "SENTENCED TO BE A HERO", year: "2025", genres: ["Dark Fantasy","Adventure","Action"], rating: "⭐ 4.9/5", synopsis: "The story follows Xylo Forbartz...", page: "index.html" },
  { id: "tokyo-ghoul", title: "TOKYO GHOUL", year: "2014", genres: ["Dark Fantasy","Horror","Action Thriller"], rating: "⭐ 4.6/5", synopsis: "Just click the links below...", page: "index.html" },
  { id: "baki-duo", title: "BAKI-DOU THE INVINCIBLE SAMURAI", year: "2026", genres: ["Action","Shounen","Sports"], rating: "⭐ 8.8/10", synopsis: "Baki and the strongest...", page: "index.html" },
  { id: "terror-resonance", title: "TERROR IN RESONANCE", year: "2014", genres: ["psychological thriller","suspense","mystery"], rating: "⭐ 4.8/5", synopsis: "Tokyo has been decimated...", page: "index.html" },
  { id: "million-lives", title: "I'M STANDING ON A MILLION LIVES", year: "2020", genres: ["dark fantasy","isekai","survival game"], rating: "⭐ 4.3/5", synopsis: "Yuusuke Yotsuya...", page: "index.html" },
  { id: "shield-hero", title: "The Rising of the Shield Hero", year: "2019", genres: ["Dark fantasy","Isekai"], rating: "⭐ 4.7/5", synopsis: "A gamer is magically summoned...", page: "index.html" },
  { id: "tojima-rider", title: "Tojima Wants to Be a Kamen Rider Season 1", year: "2025", genres: ["Action","Comedy","Seinen","Parody"], rating: "⭐ 4.7/5", synopsis: "Tanzaburo Tojima...", page: "index.html" },
  { id: "pop-idol", title: "If My Favourite Pop Idol Make it to The Budokan I'd Die Season 1", year: "2020", genres: ["Comedy","Slice of Life","Seinen","Music"], rating: "⭐ 4.5/5", synopsis: "I don't think anybody...", page: "index.html" },
  { id: "misanthrope", title: "A Misanthrope Teaches a Class For Demi-humans Season 1", year: "2026", genres: ["Fantasy","Comedy","Drama","Slice of Life"], rating: "⭐ 4.1/5", synopsis: "After a traumatic incident...", page: "index.html" },
  { id: "cute-girl-hero", title: "There Was a Cute Girl in The Hero's Party...Bla-Bla Season 1", year: "2026", genres: ["Adventure","Comedy","Fantasy","Romance"], rating: "⭐ 4.3/5", synopsis: "Reincarnated as a mid-tier demon...", page: "index.html" },
// total-cards 10
// page-2
  { id: "devil-may", title: "Devil May Cry", year: "2025", genres: ["action", "dark fantasy", "supernatural", "urban fantasy"], rating: "⭐ 4.6/5", synopsis:"devil may cry is an action anime,While being hunted by the...", page: "page2.html"},
  { id: "mf-ghost", title: "MF Ghost Season 1", year: "2023", genres: ["Racing","Sports","Seinen"], rating: "⭐ 4.4/5", synopsis: "Self-driving cars...", page: "page2.html" },
  { id: "scarlet-movie", title: "Scarlet Movie", year: "2024", genres: ["Action","Adventure","Fantasy"], rating: "⭐ 4.3/5", synopsis: "A sword-wielding princess...", page: "page2.html" },
  { id: "kunon", title: "Kunon The Sorcerer Can See Season 1", year: "2024", genres: ["Fantasy","Magic"], rating: "⭐ 4.5/5", synopsis: "Kunon Gurion is a young man...", page: "page2.html" },
  { id: "roll-over-die", title: "Roll Over And Die Season 1", year: "2024", genres: ["Dark Fantasy","Action","Horror"], rating: "⭐ 4.2/5", synopsis: "After being betrayed...", page: "page2.html" },
  { id: "dark-moon", title: "Dark Moon: The Blood Altar Season 1", year: "2024", genres: ["Vampire","Fantasy","Romance"], rating: "⭐ 4.4/5", synopsis: "Sooha's arrival at Decelis Academy...", page: "page3.html" },
  { id: "dandelion", title: "Dandelion Season 1", year: "2024", genres: ["Supernatural","Action","Drama"], rating: "⭐ 4.3/5", synopsis: "Follows two operatives...", page: "page3.html" },
  { id: "bofuri-s1", title: "BOFURI - I Don't Want to Get Hurt so I'll Max Out My Defense Season 1", year: "2020", genres: ["Comedy","Fantasy","Game"], rating: "⭐ 4.6/5", synopsis: "A player designing a character...", page: "page3.html" },
  { id: "bofuri-s2", title: "BOFURI - I Don't Want to Get Hurt so I'll...Bla Bla Season 2", year: "2023", genres: ["Comedy","Fantasy","Game"], rating: "⭐ 4.5/5", synopsis: "This is a second season...", page: "page3.html" },
  { id: "gintama-p1", title: "Gintama Season 1 Part 1", year: "2003", genres: ["Comedy","Action","Parody"], rating: "⭐ 4.9/5", synopsis: "Gintama is a Japanese manga...", page: "page3.html" },
  { id: "gintama-p2", title: "Gintama Season 1 Part 2", year: "2003", genres: ["Comedy","Action","Parody"], rating: "⭐ 4.9/5", synopsis: "This is the second part...", page: "page3.html" },
  { id: "adventurer-grind", title: "An Adventurer’s Daily Grind at Age 29 Season 1", year: "2025", genres: ["Fantasy","Adventure","Slice of Life"], rating: "⭐ 4.2/5", synopsis: "Born and raised in the slums...", page: "page3.html" },
  { id: "hana-kimi", title: "Hana Kimi Season 1", year: "2007", genres: ["Comedy","Romance","School"], rating: "⭐ 4.4/5", synopsis: "Mizuki Ashiya is on a mission...", page: "page3.html" },
  { id: "cells-at-work", title: "Cells at Work Season 1", year: "2018", genres: ["Comedy","Educational","Action"], rating: "⭐ 4.7/5", synopsis: "One newcomer red blood cell...", page: "page3.html" },
  { id: "reborn-blade", title: "Reborn to Master the Blade Season 1", year: "2023", genres: ["Fantasy","Action","Adventure"], rating: "⭐ 4.4/5", synopsis: "Reborn to Master the Blade...", page: "page3.html" },
  { id: "dr-stone", title: "DR. STONE", year: "2019", genres: ["Sci-Fi","Adventure","Shonen"], rating: "⭐ 4.8/5", synopsis: "Senku Ishigami...", page: "page4.html" },
  { id: "one-piece", title: "ONE PIECE", year: "2023", genres: ["Action","Adventure","Comedy","Drama","Fantasy"], rating: "⭐ 4.8/5", synopsis: "Monkey D. Luffy...", page: "page4.html" },
  { id: "frieren", title: "FRIEREN: BEYOND JOURNEY'S END", year: "2023", genres: ["Fantasy","Adventure","Drama"], rating: "⭐ 4.9/5", synopsis: "Adventurers have defeated...", page: "page4.html" }
];