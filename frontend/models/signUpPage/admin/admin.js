// Assuming you have already defined AdminProfile and AdminProfileList classes

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

    try {
        // Create a new AdminProfile instance
        const newProfile = new AdminProfile(title, category, description, volunteersNeeded, currentVolunteers, profileImage);

        // Add the new profile to the AdminProfileList
        adminProfileList.addProfile(newProfile);

        // Perform further actions with the form data, e.g., send to a server
        console.log('Form submitted successfully!');
        console.log('New AdminProfile instance:', newProfile);
    } catch (error) {
        console.error(error.message);
        return;
    }

    // Reset the form
    document.getElementById('signup-form').reset();
}

// Example usage
const adminProfileList = new AdminProfileList();
// You can use the adminProfileList instance to store the created profiles.
