// test.js - Log function ka test

// agar aap Node.js use kar rahe hain (bina npm ke bhi chalega)
// or ise browser console mein bhi copy-paste kar sakte hain

// Browser mein direct run karein:
// Is file ko HTML mein link karein ya browser console mein paste karein

// ---------------------------------------------
// USAGE EXAMPLES - Aap API se data ye format mein
// receive kar rahe hain jaisa aapne bataya:

const apiPayloads = [
  { stack: 'backend', level: 'info', package: 'controller', message: 'User API called successfully' },
  { stack: 'frontend', level: 'debug', package: 'cache', message: 'Cache hit for product list' },
  { stack: 'backend', level: 'error', package: 'db', message: 'Database connection timeout' },
  { stack: 'frontend', level: 'warn', package: 'domain', message: 'Deprecated API method used' },
  { stack: 'backend', level: 'fatal', package: 'controller', message: 'System crash - Out of Memory' },
  { stack: 'frontend', level: 'info', package: 'cache', message: 'Cache miss - fetching from server' },
];

// Test all API responses
console.log('📋 ====== LOG FUNCTION TESTS ======\n');

apiPayloads.forEach((payload, index) => {
  console.log(`Test #${index + 1}:`);
  log(payload.stack, payload.level, payload.package, payload.message);
  console.log('---');
});

// Additional edge case tests
console.log('\n⚠️ ====== EDGE CASE TESTS ======\n');

log('invalid', 'info', 'cache', 'Invalid stack test');
log('backend', 'unknown', 'cache', 'Invalid level test');
log('backend', 'info', 'invalid', 'Invalid package test');
log('backend', 'info', 'cache', '');  // Empty message
log(
    "backend",
    "error",
    "handler",
    "received string, expected bool"
);