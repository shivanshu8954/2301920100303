// logger.js - Custom Log Function
// Level: debug, info, warn, error, fatal
// Package: cache, controller, db, domain
// Stack: backend, frontend

const log = (stack, level, package, message) => {
  
  // Valid stacks
  const validStacks = ['backend', 'frontend'];
  
  // Valid levels
  const validLevels = ['debug', 'info', 'warn', 'error', 'fatal'];
  
  // Valid packages
  const validPackages = ['cache', 'controller', 'db', 'domain'];
  
  // Validation checks
  if (!validStacks.includes(stack)) {
    console.error(`❌ Invalid stack: "${stack}". Must be one of: ${validStacks.join(', ')}`);
    return;
  }
  
  if (!validLevels.includes(level)) {
    console.error(`❌ Invalid level: "${level}". Must be one of: ${validLevels.join(', ')}`);
    return;
  }
  
  if (!validPackages.includes(package)) {
    console.error(`❌ Invalid package: "${package}". Must be one of: ${validPackages.join(', ')}`);
    return;
  }
  
  if (!message) {
    console.error('❌ Message is required');
    return;
  }
  
  // Get current timestamp
  const timestamp = new Date().toISOString();
  
  // Level emoji mapping
  const levelEmojis = {
    debug: '🔍',
    info: 'ℹ️',
    warn: '⚠️',
    error: '❌',
    fatal: '💀'
  };
  
  // Console colors
  const colors = {
    debug: '\x1b[36m',    // Cyan
    info: '\x1b[32m',     // Green
    warn: '\x1b[33m',     // Yellow
    error: '\x1b[31m',    // Red
    fatal: '\x1b[35m',    // Magenta
    reset: '\x1b[0m'      // Reset
  };
  
  // Format: [TIMESTAMP] [STACK] [LEVEL] [PACKAGE] MESSAGE
  const formattedMessage = [
    `[${timestamp}]`,
    `[${stack.toUpperCase()}]`,
    `[${level.toUpperCase()}]`,
    `[${package.toUpperCase()}]`,
    message
  ].join(' ');
  
  // Apply color and emoji
  const coloredMessage = `${levelEmojis[level]} ${colors[level]}${formattedMessage}${colors.reset}`;
  
  // Log with appropriate method
  switch(level) {
    case 'error':
    case 'fatal':
      console.error(coloredMessage);
      break;
    case 'warn':
      console.warn(coloredMessage);
      break;
    default:
      console.log(coloredMessage);
  }
  
  // Optional: Return the formatted message
  return formattedMessage;
};

// Export the function
if (typeof module !== 'undefined' && module.exports) {
  module.exports = log;
}
function log(stack, level, pkg, message) {
    console.log(`[${stack}] [${level}] [${pkg}] ${message}`);
}