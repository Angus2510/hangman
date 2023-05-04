let animals = [ // these are the words that will be used through out the game
  "ant",
  "bee",
  "beetle",
  "butterfly",
  "caterpillar",
  "centipede",
  "clam",
  "cockroach",
  "cocoon",
  "coral",
  "crab",
  "cricket",
  "cuttlefish",
  "dragonfly",
  "flea",
  "fly",
  "grasshopper",
  "jellyfish",
  "ladybug",
  "lobster",
  "louse",
  "millipede",
  "mosquito",
  "moth",
  "mussel",
  "octopus",
  "oyster",
  "scorpion",
  "slug",
  "snail",
  "spider",
  "squid",
  "starfish",
  "wasp",
  "worm",
];

function RandomWord() {
  return animals[Math.floor(Math.random() * animals.length)];
}
export { RandomWord };