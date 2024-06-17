function findTax(salary) {
    let taxAmount;

    switch (true) {
        case salary > 1500000:
            taxAmount = salary * 0.3; 
            break;
        case salary > 1000000:
            taxAmount = salary * 0.2; 
            break;
        case salary > 500000:
            taxAmount = salary * 0.1; 
            break;
        case salary > 0:
            taxAmount = 0; 
            break;
        default:
            taxAmount = 0; 
            break;
    }

    return taxAmount;
}

// Example usage:
console.log(findTax(400000)); 
console.log(findTax(800000)); 
console.log(findTax(1200000)); 
console.log(findTax(1600000)); 
