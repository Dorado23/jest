function add (x,y) {
    if (typeof x !== 'number'){
        return NaN
    }
    return x + y
}
export { add }