const is = {}
is.num = (value) => typeof value === 'number';

// Check if the value is NaN (Not a Number)
is.nan = (value) => Number.isNaN(value);

// Check if the value is a string
is.str = (value) => typeof value === 'string';

// Check if the value is a boolean
is.bool = (value) => typeof value === 'boolean';

// Check if the value is undefined
is.undef = (value) => typeof value === 'undefined';

// Check if the value is defined (not undefined)
is.def = (value) => typeof value !== 'undefined';

// Check if the value is an array
is.arr = (value) => Array.isArray(value);

// Check if the value is a simple object or null
is.obj = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

// Check if the value is a function
is.fun = (value) => typeof value === 'function';

// Check if the value is truthy
is.truthy = (value) => !!value;

// Check if the value is falsy
is.falsy = (value) => !value;
