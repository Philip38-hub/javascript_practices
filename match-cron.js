const matchCron = (pattern, date) => {
   let cron = {};
   pattern.split(" ").forEach((cr, index) => {
        if (cr == "*") return;
        if (index === 0) {
            cron.minute = cr
        } else if (index === 1) {
            cron.hour = cr
        } else if (index === 2) {
            cron.date = cr
        } else if (index === 3) {
            cron.month = cr
        } else if (index === 4) {
            cron.day = cr
        }
   });
   date = {
    minute: date.getMinutes(),
    hour: date.getHours(),
    date: date.getDate(),
    month: date.getMonth() + 1,
    day: date.getDay(),
   }
   for (let key in cron) {
    if (cron[key] !== date[key].toString()) return false
   }
   return true
};

// // Example test with ctx
// t(({ ctx }) => matchCron('* 7 * * *', new Date(`201${ctx}-01-01 07:00:00`)));


// Example Usage:
//console.log(matchCron('* * * * 1', new Date('* 7 * * *', new Date(`201${ctx}-01-01 07:00:00`)))); // true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); // true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))); // false
