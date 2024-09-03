const dayOfTheYear = (date) => {
    // Extract the year from the given date
    const year = date.getFullYear();
    
    // Create a date object for January 1st of the given year
    const firstDayOfYear = new Date(year, 0, 1);
    
    // Calculate the difference in milliseconds
    const diffMs = date - firstDayOfYear;
    
    // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1; // Adding 1 to include the first day
    
    return diffDays;
}