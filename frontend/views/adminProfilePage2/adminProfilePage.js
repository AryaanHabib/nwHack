document.addEventListener('DOMContentLoaded', function () {
    // Sample data, replace with actual data
    const profileData = {
        title: "EcoHarmony Guardians",
        image: "../../img/env.png",
        description: "EcoHarmony Guardians is a dedicated environmental non-profit organization committed to fostering a harmonious coexistence between humanity and the planet. With an unwavering commitment to preserving biodiversity and mitigating the impacts of climate change, we stand as vigilant guardians of our ecosystems. Through innovative conservation initiatives, sustainable practices, and community engagement, we strive to create a world where nature thrives alongside human development. Our projects range from reforestation efforts to advocating for renewable energy solutions, all geared towards achieving ecological balance. Join us in our mission to safeguard the environment for future generations and ensure a world where the delicate symphony of nature is preserved in perfect harmony.",
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
