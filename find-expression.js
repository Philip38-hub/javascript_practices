const findExpression = (target, current = 1, path = '1') => {
    if (target === current) {
        return path
    }
    if (target < current) {
        return undefined
    }
    return findExpression(target, current + 4, path + ' ' + add4) || findExpression(target, current *2, path + ' '+ mul2)

}

// console.log(findexpression(63))