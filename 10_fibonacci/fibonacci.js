const fibonacci = function(n) {
      // Convert input to a number if it's a string
      if (typeof n === 'string') {
        n = parseInt(n, 10);
    }

    // Handle negative numbers
    if (n < 0) {
        return "OOPS";
    }

    // Handle base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
