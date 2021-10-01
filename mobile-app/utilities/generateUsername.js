//TO BE DEPRECATED and instead use a server-side function to verify username doesn't exist yet

const generateUsername = () => {
  let adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
  let noun = nouns[Math.floor(Math.random()*nouns.length)];
  let number = Math.floor(Math.random()*1000);

  return `${adjective}_${noun}_${number}`;
}

export default generateUsername;

const adjectives = [
  'altruistic',
  'beautiful',
  'crisp',
  'delicate',
  'enormous',
  'friendly',
  'green',
  'hidden',
  'introspective',
  'jealous',
  'kindly',
  'little',
  'miniature',
  'nautical',
  'omnipotent',
  'pitiful',
  'quiet',
  'russian',
  'simple',
  'tyranical',
  'uninvited',
  'venomous',
  'whacky',
  'xenophonic',
  'yellow',
  'zealous'
];

const nouns = [
  'apple',
  'bicycle',
  'chocolate',
  'dentist',
  'elephant',
  'flower',
  'graph',
  'harpoon',
  'insect',
  'journal',
  'kitten',
  'lackey',
  'mountain',
  'needle',
  'octopus',
  'parachute',
  'quest',
  'rattlesnake',
  'scarf',
  'turtle',
  'umbrella',
  'valve',
  'whisker',
  'xylophone',
  'yacht',
  'zebra'
];
