function scrollToProfiles() {
    document.getElementById('profiles-section').scrollIntoView({ behavior: 'smooth' });
}

function viewFullProfile(centerName) {
    // Redirect to the full profile page with the specific center's information
    window.location.href = `../adminProfilePage/adminProfilePage.html`;
}

// Function to open a specific tab
function openTab(tabName) {
    // Hide all tab content sections
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(tabContent) {
        tabContent.style.display = 'none';
    });

    // Show the selected tab content
    document.getElementById(tabName).style.display = 'block';
}

// Open the default tab (you can specify which tab you want to be open initially)
openTab('tab1');
