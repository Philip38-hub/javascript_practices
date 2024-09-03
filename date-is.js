const isValid = (date) => {
    if (date.toString() === 'Invalid Date' || typeof date === 'string') {
        return false
    }
    return true
}

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

console.log(isValid("2013-01-01"))