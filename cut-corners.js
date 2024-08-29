const round = (n) => {
    return num < 0 ? ceil(num+0.5) : floor(num+0.5); 
}

const ceil = (n) => {
    if (n===(n | 0)) return n;
    return n > 0 ? (n | 0) + 1 : (n | 0);
}

const floor = (n) => {
    if (n===(n | 0)) return n;
    return n > 0 ? (n | 0) : (n | 0) - 1;
}

const trunc = (n) => n < 0 ? ceil(n) : floor(n);