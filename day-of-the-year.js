const dayOfTheYear = (date) => {
    // Ensure the input date is valid
    if (isNaN(date.getTime())) return
    if (date === new Date('0001-01-01')) return 1;

    // Get the year of the given date
    const year = date.getFullYear();

    // Create a date object for the first day of the year
    const firstDayOfYear = new Date(year, 0, 1);

    // Calculate the difference in milliseconds
    const diffInMillis = date - firstDayOfYear;

    // Convert milliseconds to days and return the result
    const result = Math.floor(diffInMillis / (1000 * 60 * 60 * 24)) + 1; // Add 1 because days are 1-based

    return result < 0 ? 1 : result
};


console.log(dayOfTheYear(new Date('2048-11-08')))