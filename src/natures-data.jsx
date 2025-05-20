const naturesMap = new Map([
  [
    'Lonely',
    [
      { name: 'attack', value: 1.1 },
      { name: 'defense', value: 0.9 },
    ],
  ],
  [
    'Adamant',
    [
      { name: 'attack', value: 1.1 },
      { name: 'special-attack', value: 0.9 },
    ],
  ],
  [
    'Naughty',
    [
      { name: 'attack', value: 1.1 },
      { name: 'special-defense', value: 0.9 },
    ],
  ],
  [
    'Brave',
    [
      { name: 'attack', value: 1.1 },
      { name: 'speed', value: 0.9 },
    ],
  ],
  [
    'Bold',
    [
      { name: 'defense', value: 1.1 },
      { name: 'attack', value: 0.9 },
    ],
  ],
  [
    'Impish',
    [
      { name: 'defense', value: 1.1 },
      { name: 'special-attack', value: 0.9 },
    ],
  ],
  [
    'Lax',
    [
      { name: 'defense', value: 1.1 },
      { name: 'special-defense', value: 0.9 },
    ],
  ],
  [
    'Relaxed',
    [
      { name: 'defense', value: 1.1 },
      { name: 'speed', value: 0.9 },
    ],
  ],
  [
    'Modest',
    [
      { name: 'special-attack', value: 1.1 },
      { name: 'attack', value: 0.9 },
    ],
  ],
  [
    'Mild',
    [
      { name: 'special-attack', value: 1.1 },
      { name: 'defense', value: 0.9 },
    ],
  ],
  [
    'Rash',
    [
      { name: 'special-attack', value: 1.1 },
      { name: 'special-defense', value: 0.9 },
    ],
  ],
  [
    'Quiet',
    [
      { name: 'special-attack', value: 1.1 },
      { name: 'speed', value: 0.9 },
    ],
  ],
  [
    'Calm',
    [
      { name: 'special-defense', value: 1.1 },
      { name: 'attack', value: 0.9 },
    ],
  ],
  [
    'Gentle',
    [
      { name: 'special-defense', value: 1.1 },
      { name: 'defense', value: 0.9 },
    ],
  ],
  [
    'Careful',
    [
      { name: 'special-defense', value: 1.1 },
      { name: 'special-attack', value: 0.9 },
    ],
  ],
  [
    'Sassy',
    [
      { name: 'special-defense', value: 1.1 },
      { name: 'speed', value: 0.9 },
    ],
  ],
  [
    'Timid',
    [
      { name: 'speed', value: 1.1 },
      { name: 'attack', value: 0.9 },
    ],
  ],
  [
    'Hasty',
    [
      { name: 'speed', value: 1.1 },
      { name: 'defense', value: 0.9 },
    ],
  ],
  [
    'Jolly',
    [
      { name: 'speed', value: 1.1 },
      { name: 'special-attack', value: 0.9 },
    ],
  ],
  [
    'Naive',
    [
      { name: 'speed', value: 1.1 },
      { name: 'special-defense', value: 0.9 },
    ],
  ],
]);

const naturesList = [
  'Neutral',
  'Adamant',
  'Bold',
  'Brave',
  'Calm',
  'Careful',
  'Gentle',
  'Hasty',
  'Impish',
  'Jolly',
  'Lax',
  'Lonely',
  'Mild',
  'Modest',
  'Naive',
  'Naughty',
  'Quiet',
  'Rash',
  'Relaxed',
  'Sassy',
  'Timid',
];

export { naturesMap, naturesList };
