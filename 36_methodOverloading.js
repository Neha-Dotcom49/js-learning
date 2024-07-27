//multiple methods in the same class with the same name but different parameter lists,

class Operation {
    constructor() {
        // Empty Constructor
    }

    // Define methods with different signatures
    add(n1, n2) {
        console.log(n1 + n2);
    }

    add(n1, n2, n3) {
        console.log(n1 + n2 + n3);
    }
}

// Create an instance of the Operation class
const opr = new Operation();

// This will call the add method with two arguments
opr.add(10, 20);     // Output: 30

// This will call the add method with three arguments
opr.add(10, 20, 30); // Output: 60
