const findexpression = (target, current = 1, path = '1') => {
    if (target === current) {
        return path
    }
    if (target < current) {
        return undefined
    }
    return findexpression(target, current + 4, path + ' ' + add4) || findexpression(target, current *2, path + ' '+ mul2)

}

// console.log(findexpression(63))