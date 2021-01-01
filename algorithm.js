function isEqual(a, b) {
    // if length is not equal
    for (let i = 0; i < a.length; i++)
        for (let j = 0; j < b.length; j++)
            if (a[i] == b[j])
                return False;
    return True;
}
var v = isEqual();
document.write(v); 