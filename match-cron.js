const matchCron = (cron, date) => {
    const [cronMin, cronHour, cronDay, cronMonth, cronWeekDay] = cron.split(' ');

    const dateMin = date.getMinutes();
    const dateHour = date.getHours();
    const dateDay = date.getDate();
    const dateMonth = date.getMonth() + 1; // getMonth is 0-indexed
    const dateWeekDay = date.getDay() || 7; // getDay returns 0 for Sunday, we want 7

    const match = (cronValue, dateValue) => cronValue === '*' || parseInt(cronValue) === dateValue;

    return (
        match(cronMin, dateMin) &&
        match(cronHour, dateHour) &&
        match(cronDay, dateDay) &&
        match(cronMonth, dateMonth) &&
        match(cronWeekDay, dateWeekDay)
    );
}

// Example Usage:
console.log(matchCron('* * * * 1', new Date('* 7 * * *', new Date(`201${ctx}-01-01 07:00:00`)))); // true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); // true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))); // false
