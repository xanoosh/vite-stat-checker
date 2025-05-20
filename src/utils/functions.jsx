import { naturesMap } from '../natures-data';

export const getNatureModifier = (statName, nature) => {
  if (statName === 'hp') return 1;
  if (nature === 'Neutral') return 1;

  const [increased, decreased] = naturesMap.get(nature);
  if (increased.name === statName) return increased.value;
  if (decreased.name === statName) return decreased.value;
  return 1;
};

export const calculateStatFormula = (
  statName,
  base,
  level,
  ivVal = 31,
  evVal = 0,
  nature
) => {
  const iv = Number(ivVal);
  const ev = Number(evVal);
  const natureModifier = getNatureModifier(statName, nature);
  const isHp = statName === 'hp';
  nature;
  const semiResult = Math.floor(
    ((2 * base + iv + Math.floor(ev / 4)) * level) / 100
  );
  return isHp
    ? semiResult + Number(level) + 10
    : Math.floor((semiResult + 5) * natureModifier);
};

export const getStatAndEvData = (response) => {
  const effortValuesData = [];
  const statsData = [];
  response.stats.forEach(({ base_stat, effort, stat: { name } }) => {
    if (effort > 0) effortValuesData.push({ name, effort });
    statsData.push({ name, base_stat });
  });
  return { effortValuesData, statsData };
};

export const scrollIntoResult = () => {
  // mobile only
  const element = document.querySelector('.response-column');
  if (window.innerWidth <= 992 && element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const formatStatName = (statName) => {
  if (statName === 'special-attack') return 'spAttack';
  if (statName === 'special-defense') return 'spDefense';
  return statName;
};

export const getTypeColor = (typeName) => {
  switch (typeName) {
    case 'normal':
      return '#A8A77A';
    case 'fire':
      return '#EE8130';
    case 'water':
      return '#6390F0';
    case 'electric':
      return '#F7D02C';
    case 'grass':
      return '#7AC74C';
    case 'ice':
      return '#96D9D6';
    case 'fighting':
      return '#C22E28';
    case 'poison':
      return '#A33EA1';
    case 'ground':
      return '#E2BF65';
    case 'flying':
      return '#A98FF3';
    case 'psychic':
      return '#F95587';
    case 'bug':
      return '#A6B91A';
    case 'rock':
      return '#B6A136';
    case 'ghost':
      return '#735797';
    case 'dragon':
      return '#6F35FC';
    case 'dark':
      return '#705746';
    case 'steel':
      return '#B7B7CE';
    case 'fairy':
      return '#D685AD';
    default:
      return null;
  }
};

export const getEquationArray = (leftStats, rightStats) => {
  if (!leftStats || !rightStats) return [];
  const equationArray = [];
  for (let i = 0; i < 6; i++) {
    if (leftStats.stats[i].base_stat > rightStats.stats[i].base_stat) {
      equationArray.push('left');
    } else if (leftStats.stats[i].base_stat < rightStats.stats[i].base_stat) {
      equationArray.push('right');
    } else {
      equationArray.push('=');
    }
  }
  return equationArray;
};
