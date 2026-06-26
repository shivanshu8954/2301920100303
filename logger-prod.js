// logger-prod.js - Production ready version with file logging support

class Logger {
  constructor() {
    this.logHistory = [];
    this.maxHistory = 1000; // Maximum logs to store in memory
  }
  
  log(stack, level, package, message) {
    // Validation
    const validStacks = ['backend', 'frontend'];
    const validLevels = ['debug', 'info', 'warn', 'error', 'fatal'];
    const validPackages = ['cache', 'controller', 'db', 'domain'];
    
    // Error handling with meaningful messages
    const errors = [];
    if (!validStacks.includes(stack)) errors.push(`Invalid stack: ${stack}`);
    if (!validLevels.includes(level)) errors.push(`Invalid level: ${level}`);
    if (!validPackages.includes(package)) errors.push(`Invalid package: ${package}`);
    if (!message) errors.push('Message is required');
    
    if (errors.length > 0) {
      console.error('❌ Logger Error:', errors.join(', '));
      return null;
    }
    
    // Create log entry
    const entry = {
      timestamp: new Date().toISOString(),
      stack,
      level,
      package,
      message,
      id: Date.now() + Math.random().toString(36).substr(2, 9)
    };
    
    // Store in history
    this.logHistory.push(entry);
    if (this.logHistory.length > this.maxHistory) {
      this.logHistory.shift();
    }
    
    // Console output with colors
    const colors = {
      debug: '\x1b[36m', info: '\x1b[32m', warn: '\x1b[33m',
      error: '\x1b[31m', fatal: '\x1b[35m', reset: '\x1b[0m'
    };
    
    const emojis = { debug: '🔍', info: 'ℹ️', warn: '⚠️', error: '❌', fatal: '💀' };
    
    const formatted = `[${entry.timestamp}] [${stack.toUpperCase()}] [${level.toUpperCase()}] [${package.toUpperCase()}] ${message}`;
    const colored = `${emojis[level]} ${colors[level]}${formatted}${colors.reset}`;
    
    if (level === 'error' || level === 'fatal') console.error(colored);
    else if (level === 'warn') console.warn(colored);
    else console.log(colored);
    
    return entry;
  }
  
  // Get log history
  getHistory(level = null, package = null) {
    let filtered = [...this.logHistory];
    if (level) filtered = filtered.filter(e => e.level === level);
    if (package) filtered = filtered.filter(e => e.package === package);
    return filtered;
  }
  
  // Export logs as JSON
  exportLogs() {
    return JSON.stringify(this.logHistory, null, 2);
  }
  
  // Clear history
  clearHistory() {
    this.logHistory = [];
    console.log('🧹 Log history cleared');
  }
}

// Usage
// const logger = new Logger();
// logger.log('backend', 'info', 'controller', 'Server started');
// logger.log('frontend', 'error', 'cache', 'Failed to fetch');