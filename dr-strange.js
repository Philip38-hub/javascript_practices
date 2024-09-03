const addWeek = (date) => {
    var epoch = new Date('0001-01-01');
    const dayNames = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 
        'secondFriday', 'secondSaturday', 'secondSunday'
    ];
    //calculate difference in days
    const diffInDays = Math.floor(eval((date - epoch) / (1000 * 60 * 60 * 24)));
    //get day in new 14 day week
    return dayNames[diffInDays%14];
}

const timeTravel = (date) => {
    const newDate = new Date(date.date);
    newDate.setHours(date.hour)
    newDate.setMinutes(date.minute)
    newDate.setSeconds(date.second)
    return newDate
}

console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString());
