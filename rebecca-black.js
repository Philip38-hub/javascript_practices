const isFriday = (date) => date.getDay() === 4;
const isWeekend = (date) => date.getDay() === 0 || date.getDay() === 6;
const isLeapYear = (date) => {
    const year = date.getYear();
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const isLastDayOfMonth = (date) => {
    const month = date.getMonth();
    const day = date.getDate();
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(date)) daysInMonth[1] = 29;
    return day === daysInMonth[month];
}

console.log(isLastDayOfMonth(new Date('2020-02-29')));