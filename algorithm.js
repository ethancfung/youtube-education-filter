function isEqual(a, b) {
    // if length is not equal
    return a.some(value => b.includes(value))
}
var v = isEqual();
document.write(v);


//legacy code, O(n^2)
// for (let i = 0; i < a.length; i++)
    //     for (let j = 0; j < b.length; j++)
    //         if (a[i] == b[j])
    //             return False;
    // return True;