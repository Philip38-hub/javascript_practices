const findexpression = (target, current = 1, path = '1') => {
    if (target === current) {
        return path
    }
    if (target < current) {
        return undefined
    }
    return findexpression(target, current + 4, path + ' +4') || findexpression(target, current *2, path + ' *2')

}

// console.log(findexpression(63))