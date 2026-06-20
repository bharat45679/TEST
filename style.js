// A simple, safe JavaScript program

function runDemo(message) {
    try {
        // Input validation
        if (typeof message !== "string") {
            throw new Error("Message must be a string.");
        }

        // Main logic
        console.log("Your message:", message);
    } catch (err) {
        // Error handling
        console.error("An error occurred:", err.message);
    }
}

// Example usage
runDemo("Hello from JavaScript!");
