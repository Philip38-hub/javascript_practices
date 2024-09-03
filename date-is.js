const isValid = (input) => {
    let date;

    // Check if the input is a number (timestamp)
    if (typeof input === 'number') {
        date = new Date(input);
    } 
    // Check if the input is already a Date object
    else if (input instanceof Date) {
        date = input;
    } else {
        return false;
    }

    // Check if the date is valid
    return !isNaN(date.getTime());
};

const isAfter = (date1, date2) => {
    if (date1 > date2) {
        return true
    }
    return false
}

const isBefore = (date1, date2) => {
    if (date1 < date2) {
        return true
    }
    return false
}

const isFuture = (date) => {
    if (isValid(date) && date > new Date()) {
        return true
    }
    return false
}


const isPast = (date) => {
    if (isValid(date) && date < new Date()) {
        return true
    }
    return false
}

console.log(isValid(Date.now()))

const now = Date.now()