// error handling
class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
    super(message); // Call parent Error class

    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack; // Use custom stack if passed
    } else {
      Error.captureStackTrace(this, this.constructor); // Capture stack with current context
    }
  }
}

export default ApiError;
