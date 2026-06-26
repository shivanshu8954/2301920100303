// api-handler.js
// Jab aap API se POST response receive karein

// Example API response handler
function handleApiLogResponse(apiResponse) {
  
  // API response structure jaisa aapne bataya
  const { stack, level, package: pkg, message } = apiResponse;
  
  // Directly log function call
  log(stack, level, pkg, message);
  
  // Ya batch processing ke liye
  if (Array.isArray(apiResponse)) {
    apiResponse.forEach(item => {
      log(item.stack, item.level, item.package, item.message);
    });
  }
}

// Example API call simulation (bina fetch ke)
function simulateApiCall() {
  // Ye aapki actual API response jaisa hai
  const apiResponse = {
    stack: "backend",
    level: "error",
    package: "db",
    message: "MongoDB connection failed after 5 retries"
  };
  
  handleApiLogResponse(apiResponse);
}

// Test karein
simulateApiCall();