// Import the JsonWriter module
const JsonWriter = require('../../../backend/src/Persistence/jsonWriter');

// Create an instance of JsonWriter with the correct destination JSON file path
const jsonWriter = new JsonWriter('../../../backend/data/json/organisation.json');

function submitForm(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const volunteersNeeded = parseInt(document.getElementById('volunteers-needed').value, 10);
    const currentVolunteers = parseInt(document.getElementById('current-volunteers').value, 10);
    const profileImage = document.getElementById('profile-image').value;

    // Basic validation for natural numbers
    if (!Number.isInteger(volunteersNeeded) || volunteersNeeded < 0) {
        alert('Number of Volunteers Needed must be a non-negative integer.');
        return;
    }

    if (!Number.isInteger(currentVolunteers) || currentVolunteers < 0) {
        alert('Current Number of Volunteers must be a non-negative integer.');
        return;
    }

    // Create an organization object
    const organization = {
        organizationName: title,
        category: category,
        description: description,
        roleOfVolunteers: 'Specify Role Here', // Add a default role or customize based on your needs
        numberOfVolunteers: volunteersNeeded,
        image: profileImage, // Assuming 'image' is a base64-encoded image string
    };

    // Write the organization data to the JSON file
    jsonWriter.open();
    jsonWriter.write(organization);
    jsonWriter.close();

    // Display success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Hide the success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);

    // Reset the form
    document.getElementById('signup-form').reset();
}
