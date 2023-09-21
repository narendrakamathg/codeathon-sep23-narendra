function validateIPAddress(ipAddress) {
    // Split the IP address into its components
    const ipComponents = ipAddress.split('.');

    // Check if there are exactly 4 components
    if (ipComponents.length !== 4) {
        return false;
    }

    // Check if each component is a number between 0 and 255
    for (let i = 0; i < ipComponents.length; i++) {
        const component = ipComponents[i];
        if (isNaN(component) || component < 0 || component > 255) {
            return false;
        }
    }

    // If all checks pass, the IP address is valid
    return true;
}

// Example usage:
console.log(validateIPAddress('255.255.0.0'));
console.log(validateIPAddress('555.555.555.555'));
console.log(validateIPAddress('256.255.0.0'));
