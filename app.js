const logger = require('./logger');

function addNumbers(a, b) {
   
    logger.debug(`Function addNumbers start - Input: a=${a}, b=${b}`);
    
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inputs must be numbers');
        }
        
        const result = a + b;
        
       
        logger.info(`Addition successful: ${a} + ${b} = ${result}`);
        
        return result;
    } catch (error) {
        
        logger.error(`Error in addNumbers: ${error.message}`);
        throw error;
    }
}


function runTests() {
    console.log('=== Logging Middleware Test ===\n');
    
   
    try {
        const result1 = addNumbers(10, 5);
        console.log(`Test 1 Result: ${result1}`);
    } catch (e) {
        console.log(`Test 1 Error: ${e.message}`);
    }
    
    
    try {
        addNumbers('hello', 5);
    } catch (e) {
        console.log(`Test 2: Error caught - ${e.message}`);
    }
    
    console.log('\nLog file check karein: logs/app.log');
}

runTests();