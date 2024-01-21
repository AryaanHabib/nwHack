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

    // Perform further actions with the form data, e.g., send to a server
    console.log('Form submitted successfully!');
    console.log('Title:', title);
    console.log('Category:', category);
    console.log('Description:', description);
    console.log('Number of Volunteers Needed:', volunteersNeeded);
    console.log('Current Number of Volunteers:', currentVolunteers);
    console.log('Profile Image:', profileImage);

    // Reset the form
    document.getElementById('signup-form').reset();
}
