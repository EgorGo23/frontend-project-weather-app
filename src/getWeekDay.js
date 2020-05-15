function getWeekDay(date, mode = short) {
    let daysShort = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    let daysLong = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    return mode === 'short' ? daysShort[date.getDay()] : daysLong[date.getDay()];
}

export default getWeekDay;