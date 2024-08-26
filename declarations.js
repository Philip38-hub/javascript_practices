const escapeStr = "`, \, /, \" ' ";
const arr = object.freeze([4, '2']);
const obj = object.freeze({
    str: 'a string',
    num: 67,
    bool: false,
    undef: undefined
})
const nested = object.freeze({
    arr: object.freeze([4, undefined, '2']),
    obj: object.freeze({
        str:'string',
        num: 89,
        bool: true
    })
})