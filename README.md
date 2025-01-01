# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled promise rejection causes the server to crash. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version with proper error handling.

## Problem

The original code lacks error handling within the asynchronous operation.  If `doSomethingAsync` throws an error, the promise rejects, the server doesn't respond to the client request and crashes, causing a service interruption.

## Solution

The solution adds a `.catch` block to handle potential errors gracefully. If an error occurs, it sends an appropriate error response to the client (e.g., a 500 Internal Server Error) instead of crashing.  This prevents service disruptions and provides a better user experience.