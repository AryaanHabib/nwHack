function scrollToProfiles() {
    document.getElementById('profiles-section').scrollIntoView({ behavior: 'smooth' });
}

function viewFullProfile(centerName) {
    // Redirect to the full profile page with the specific center's information
    window.location.href = `full-profile.html?center=${encodeURIComponent(centerName)}`;
}
