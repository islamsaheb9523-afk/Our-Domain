// anime-data.js – complete database for global search
const animeDatabase = [
  // ========== INDEX.HTML (Page 1) ==========
  {
    id: "sentence-hero",
    title: "Sentenced to be a Hero",
    year: "2025",
    genres: ["Dark Fantasy", "Adventure", "Action"],
    rating: "⭐ 4.9/5",
    page: "index.html"
  },
  {
    id: "tokyo-ghoul",
    title: "Tokyo Ghoul",
    year: "2014",
    genres: ["Dark Fantasy", "Horror", "Action Thriller"],
    rating: "⭐ 4.6/5",
    page: "index.html"
  },
  {
    id: "baki-duo",
    title: "Baki-Dou The Invincible Samurai",
    year: "2026",
    genres: ["Action", "Shounen", "Sports"],
    rating: "⭐ 8.8/10",
    page: "index.html"
  },
  {
    id: "terror-resonance",
    title: "Terror in Resonance",
    year: "2014",
    genres: ["psychological thriller", "suspense", "mystery"],
    rating: "⭐ 4.8/5",
    page: "index.html"
  },
  {
    id: "million-lives",
    title: "I'm Standing on a Million Lives",
    year: "2020",
    genres: ["dark fantasy", "isekai", "survival game"],
    rating: "⭐ 4.3/5",
    page: "index.html"
  },
  {
    id: "shield-hero",
    title: "The Rising of the Shield Hero",
    year: "2019",
    genres: ["Dark fantasy", "Isekai"],
    rating: "⭐ 4.7/5",
    page: "index.html"
  },
  {
    id: "tojima-rider",
    title: "Tojima Wants to Be a Kamen Rider",
    year: "2025",
    genres: ["Action", "Comedy", "Seinen", "Parody"],
    rating: "⭐ 4.7/5",
    page: "index.html"
  },
  {
    id: "pop-idol",
    title: "If My Favorite Pop Idol Made It to the Budokan I'd Die",
    year: "2020",
    genres: ["Comedy", "Slice of Life", "Seinen", "Music / Idol"],
    rating: "⭐ 4.5/5",
    page: "index.html"
  },
  {
    id: "misanthrope",
    title: "A Misanthrope Teaches a Class for Demi-Humans",
    year: "2026",
    genres: ["fantasy", "Comedy", "drama", "Slice of life"],
    rating: "⭐ 4.1/5",
    page: "index.html"
  },
  {
    id: "cute-girl-hero",
    title: "There Was a Cute Girl in the Hero's Party, so I Tried Confessing to Her",
    year: "2026",
    genres: ["Adventure", "Comedy", "Fantasy", "Romance"],
    rating: "⭐ 4.3/5",
    page: "index.html"
  },

  // ========== PAGE2.HTML ==========
  {
    id: "devil-may",
    title: "Devil May Cry",
    year: "2025",
    genres: ["action", "dark fantasy", "supernatural", "urban fantasy"],
    rating: "⭐ 4.6/5",
    page: "page2.html"
  },
  {
    id: "mf-ghost",
    title: "MF Ghost",
    year: "2023",
    genres: ["sports", "racing"],
    rating: "⭐ 4.8/5",
    page: "page2.html"
  },
  {
    id: "scarlet-movie",
    title: "Scarlet",
    year: "2025",
    genres: ["Action", "Adventure", "Fantasy", "Romance"],
    rating: "⭐ 6.3/10",
    page: "page2.html"
  },
  {
    id: "kunon",
    title: "Kunon the Sorcerer Can See",
    year: "2026",
    genres: ["Fantasy", "Slice of Life", "Comedy", "Adventure"],
    rating: "⭐ 4.4/5",
    page: "page2.html"
  },
  {
    id: "roll-over-die",
    title: "Roll Over and Die",
    year: "2026",
    genres: ["Dark Fantasy", "Yuri", "Action", "Fantasy"],
    rating: "⭐ 4.1/5",
    page: "page2.html"
  },
  {
    id: "bofuri",
    title: "Bofuri: I Don't Want to Get Hurt, so I'll Max Out My Defense",
    year: "2020",
    genres: ["Action", "Comedy", "Fantasy", "Adventure"],
    rating: "⭐ 4.7/5",
    page: "page2.html"
  },
  {
    id: "gintama",
    title: "Gintama",
    year: "2006",
    genres: ["Action", "Comedy", "Parody", "Shounen"],
    rating: "⭐ 4.7/5",
    page: "page2.html"
  },
  {
    id: "dandelion",
    title: "Dandelion",
    synopsis: "Follows two operatives working for the Japan Angel Federation as they scramble to track down Earthbound spirits and gently guide them to pass on.",
    year: "2026",
    genres: ["Supernatural", "Comedy", "Drama", "Fantasy"],
    rating: "⭐ 4.1/5",
    page: "page2.html"
  },
  {
    id: "reborn-master-blade",
    title: "Reborn to Master the Blade",
    year: "2023",
    genres: ["Fantasy", "Isekai", "Action", "Comedy"],
    rating: "⭐ 4.4/5",
    page: "page2.html"
  },
  {
    id: "cells-at-work",
    title: "Cells at Work",
    year: "2018",
    genres: ["educational", "comedy", "action", "sci-fi"],
    rating: "⭐ 4.7/5",
    page: "page2.html"
  },

  // ========== PAGE3.HTML ==========
  {
    id: "dr-stone",
    title: "Dr. Stone",
    year: "2019",
    genres: ["Sci-Fi", "Adventure", "Shonen"],
    rating: "⭐ 4.8/5",
    page: "page3.html"
  },
  {
    id: "one-piece",
    title: "One Piece",
    year: "2023",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy"],
    rating: "⭐ 4.8/5",
    page: "page3.html"
  },
  {
    id: "frieren",
    title: "Frieren: Beyond Journey's End",
    year: "2023",
    genres: ["Fantasy", "Adventure", "Drama"],
    rating: "⭐ 4.9/5",
    page: "page3.html"
  },
  {
    id: "dark-moon",
    title: "Dark Moon: The Blood Altar",
    year: "2026",
    genres: ["Dark fantasy", "Supernatural", "Romance", "Action"],
    rating: "⭐ 4.6/5",
    page: "page3.html"
  },
  {
    id: "adventurer-grind",
    title: "An Adventurer's Daily Grind at Age 29",
    year: "2026",
    genres: ["fantasy", "slice-of-life", "comedy"],
    rating: "⭐ 4.1/5",
    page: "page3.html"
  },
  {
    id: "hana-kimi",
    title: "Hana-Kimi",
    year: "2026",
    genres: ["Shojo", "Rom-Com", "Slice of Life"],
    rating: "⭐ 4.6/5",
    page: "page3.html"
  },
  {
    id: "elite-class",
    title: "ClassRoom Of The Elite",
    year: "2017",
    genres: ["Drama", "Suspense", "Psychological"],
    rating: "⭐ 4.8/5",
    page: "page3.html"
  },
  {
    id: "365-days",
    title: "365 Days to the wedding",
    year: "2024",
    genres: ["slice-of-life", "comedy", "romance"],
    rating: "⭐ 4.6/5",
    page: "page3.html"
  },
  {
    id: "sucide-sq",
    title: "Suicide Squad Isekai",
    year: "2024",
    genres: ["Isekai", "comedy", "dark fantasy"],
    rating: "⭐ 4.3/5",
    page: "page3.html"
  },
  {
    id: "wistoria",
    title: "Wistoria: Wand and Sword",
    year: "2024",
    genres: ["Fantasy", "Action", "Shonen"],
    rating: "⭐ 4.8/5",
    page: "page3.html"
  }
];