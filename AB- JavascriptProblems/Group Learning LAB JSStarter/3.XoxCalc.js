function myXOR(x, y) {
    // Calculate XOR without using the XOR operator
    // The formula (x & ~y) | (~x & y) returns XOR by only using AND, OR, and NOT
    return (x & (~y)) | ((~x) & y);
}

console.log(myXOR(1,2));