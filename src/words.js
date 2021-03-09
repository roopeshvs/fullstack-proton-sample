const ENGLISH_WORDS = [
  {
    word: "abate",
    hints: ["subside or moderate", "From Old French Word Abatre"]
  },
  {
    word: "aberrant",
    hints: [
      "abnormal or deviant",
      "this somewhat ___ behaviour requires an explanation"
    ]
  },
  {
    word: "euphemism",
    hints: [
      "mild expression in place of an unpleasant one",
      " used in place of one that may be found offensive"
    ]
  },
  {
    word: "insipid",
    hints: ["lacking in flavour; dull"]
  },
  {
    word: "plethora",
    hints: [
      "over abundance",
      ' comes from a similar Greek word meaning "fullness."'
    ]
  },
  {
    word: "salubrious",
    hints: [
      "favorable to or promoting health or well-being",
      'its synonyms "healthful" and "wholesome" all mean favorable to the health of mind or body. ___ is similar to the other two, but tends to apply chiefly to the helpful effects of climate or air.'
    ]
  },
  {
    word: "tacit",
    hints: [
      "expressed or carried on without words or speech",
      "While they got a frosty public response, officials say the private message was a _____ green light."
    ]
  },
  {
    word: "stigma",
    hints: [
      "a mark of shame or discredit",
      "comes from Greek stizein, meaning to tattoo."
    ]
  },
  {
    word: 'Striated',
    hints: [
      'marked with parallel bands; grooved',
      'Related with Stretch Marks',
      'Originated with the English term Strike from a Latin word'
    ]
  },
  {
    word: 'subpoena',
    hints: [
      'a writ commanding a person designated in it to appear in court under a penalty for failure',
      '____ arrived in Modern English (via the Middle English suppena) from the Latin'
    ]
  },
  {
    word: 'torpor',
    hints: [
      'a state of mental and motor inactivity with partial or total insensibility',
      'It stems from the Latin verb torpēre, which means "to be sluggish or numb.'
    ]
  },
  {
    word: 'penchant',
    hints: [
      'a strong and continued inclination',
      'implies a strongly marked taste in the person or an irresistible attraction in the object.',
      'Synonyms are  leaning, propensity, and proclivity'
    ]
  },
  {
    word: 'morose',
    hints: [
      'having a sullen and gloomy disposition',
      'SULLEN, GLUM, ____, SURLY, SULKY, CRABBED, SATURNINE, GLOOMY mean showing a forbidding or disagreeable mood.',
      '____ adds to GLUM an element of bitterness or misanthropy.'
    ]
  },
  {
    word: 'onerous',
    hints: [
      'involving, imposing, or constituting a burden',
      'stresses a sense of laboriousness and heaviness, especially because something is distasteful',
      '_____, BURDENSOME, OPPRESSIVE, EXACTING mean imposing hardship.'
    ]
  }
];

const randomIndex = () => {
  return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
};

export { randomIndex };
