enum APL {
  GOOD,
  MODERATE,
  UNHEALTHY_SENSITIVE_GROUPS,
  UNHEALTHY,
  VERY_UNHEALTHY,
  VERY_UNHEALTHYY,
  HAZARDOUS
}

const APLDescription = {
  GOOD: {
    id: 0,
    label: 'Good',
    icon: 'mdi-emoticon-excited',
    color: '#009966',
    desc: 'Air quality is considered satisfactory, and air pollution poses little or no risk.'
  },
  MODERATE: {
    id: 1,
    label: 'Moderate',
    icon: 'mdi-emoticon-happy',
    color: '#FFDE33',
    desc: 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.'
  },
  UNHEALTHY_SENSITIVE_GROUPS: {
    id: 2,
    label: 'Unhealthy for Sensitive Groups',
    icon: 'mdi-emoticon-neutral',
    color: '#FF9933',
    desc: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.'
  },
  UNHEALTHY: {
    id: 3,
    label: 'Unhealthy',
    icon: 'mdi-emoticon-sad',
    color: '#CC0033',
    desc: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.'
  },
  VERY_UNHEALTHY: {
    id: 4,
    label: 'Very Unhealthy',
    icon: 'mdi-emoticon-angry',
    color: '#CC0033',
    desc: 'Health warnings of emergency conditions. The entire population is more likely to be affected.'
  },
  VERY_UNHEALTHYY: {
    id: 5,
    label: 'Very Unhealthy',
    icon: 'mdi-emoticon-angry',
    color: '#660099',
    desc: 'Health warnings of emergency conditions. The entire population is more likely to be affected.'
  },
  HAZARDOUS: {
    id: 6,
    label: 'Hazardous',
    icon: 'mdi-emoticon-dead',
    color: '#7E0023',
    desc: 'Health alert: everyone may experience more serious health effects.'
  },
  EMPTY: {
    id: 7,
    label: 'EMPTY',
    icon: 'mdi-',
    color: '#',
    desc: ''
  }
}

export {
  APL,
  APLDescription
}