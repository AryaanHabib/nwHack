class AdminProfile {
    constructor(title, category, description, volunteersNeeded, currentVolunteers, profileImage) {
        // Validate and set string properties
        this.title = this.validateString(title, 'Title');
        this.category = this.validateString(category, 'Category');
        this.description = this.validateString(description, 'Description');

        // Validate and set natural number properties
        this.volunteersNeeded = this.validateNaturalNumber(volunteersNeeded, 'Number of Volunteers Needed');
        this.currentVolunteers = this.validateNaturalNumber(currentVolunteers, 'Current Number of Volunteers');

        // Set profile image
        this.profileImage = profileImage;
    }

    validateString(value, propertyName) {
        if (typeof value !== 'string') {
            throw new Error(`${propertyName} must be a string.`);
        }
        return value;
    }

    validateNaturalNumber(value, propertyName) {
        const intValue = parseInt(value, 10);
        if (!Number.isInteger(intValue) || intValue < 0) {
            throw new Error(`${propertyName} must be a non-negative integer.`);
        }
        return intValue;
    }
}

// Example usage
try {
    const adminProfile = new AdminProfile(
        'Event Organizer',
        'Community Service',
        'Organizing a charity event for the local community.',
        20,
        10,
        'path/to/profile-image.jpg'
    );

    console.log(adminProfile);
} catch (error) {
    console.error(error.message);
}
