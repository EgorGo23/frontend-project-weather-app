function getWeekDay(date, mode = 'short') {
  const daysShort = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const daysLong = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return mode === 'short' ? daysShort[date.getDay()] : daysLong[date.getDay()];
}

export default getWeekDay;
