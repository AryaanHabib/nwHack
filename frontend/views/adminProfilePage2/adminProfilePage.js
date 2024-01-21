document.addEventListener('DOMContentLoaded', function () {
    // Sample data, replace with actual data
    const profileData = {
        title: "Paws for a Cause",
        image: "../../img/puppies.jpg",
        description: "Welcome to our dog shelter, a haven for furry friends seeking love and care. Our shelter is dedicated to providing a safe and nurturing environment for dogs in need, offering them a second chance for a joyful life. With a compassionate team of caregivers and volunteers, we strive to find loving forever homes for each dog, tailoring our approach to their individual needs. Whether rescuing abandoned, abused, or neglected dogs, our mission is to heal, rehabilitate, and advocate for these loyal companions. Join us in creating a brighter future for these canine companions, where wagging tails and unconditional love abound.",
        volunteersSigned: 15,
        volunteersNeeded: 20
    };

    // Update HTML content with profile data
    document.getElementById('profile-title').textContent = profileData.title;
    document.getElementById('profile-image').src = profileData.image;
    document.getElementById('profile-description').textContent = profileData.description;

    // Calculate progress and update progress bar
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    const progress = (profileData.volunteersSigned / profileData.volunteersNeeded) * 100;
    progressBar.style.width = progress + '%';

    if (progress < 100) {
        const remainingVolunteers = profileData.volunteersNeeded - profileData.volunteersSigned;
        progressText.textContent = `${remainingVolunteers} more volunteers needed`;
    } else {
        progressText.textContent = 'We have all the help we need for now';
        // Disable the sign-up button when the bar is full
        document.getElementById('sign-up-button').disabled = true;
    }

    // Add event listener for sign-up button
    document.getElementById('sign-up-button').addEventListener('click', function () {
        // Redirect to the sign-up page or handle sign-up logic
        window.location.href = 'signUpPage.html';
    });
});
