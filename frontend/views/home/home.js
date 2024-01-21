// C:/Users/Aryaan Habib/Desktop/nwHacks/nwHack/frontend/views/home/home.js

// Include jsonReader.js and call the readJsonFiles function with the callback
const script = document.createElement('script');
script.src = '../../backend/src/Persistence/jsonReader.js';
script.type = 'module'; // Use module type for ES6 import/export
document.body.appendChild(script);

// Callback function to be called when the organization array is ready
function onOrganizationReady(organization) {
    // Access the organization array from jsonReader.js
    console.log('2D Array (organization):', organization);

    // Function to update the "Organizations" tab with details
    function updateOrganizationsTab() {
        const organizationsTab = document.getElementById('tab2');

        organization.forEach((org, index) => {
            // Create a div to hold organization details
            const organizationDiv = document.createElement('div');
            organizationDiv.className = 'organization-details';

            // Create and append HTML elements for each organization detail
            const details = ["Title", "Category", "Description", "Volunteers Needed", "Current Volunteers"];
            details.forEach((detail, i) => {
                const detailDiv = document.createElement('div');
                detailDiv.textContent = `${detail}: ${org[i]}`;
                organizationDiv.appendChild(detailDiv);
            });

            // Add the organization details div to the tab
            organizationsTab.appendChild(organizationDiv);
        });
    }

    // Run the updateOrganizationsTab function when the page loads
    updateOrganizationsTab();
}

// Define the callback function to be executed when the organization array is ready
script.onload = function () {
    readJsonFiles(onOrganizationReady);
};

// Your existing home.js code...
function scrollToProfiles() {
    document.getElementById('profiles-section').scrollIntoView({ behavior: 'smooth' });
}

function viewFullProfile(centerName) {
    // Redirect to the full profile page with the specific center's information
    // You can also pass the centerName to the profile page if needed
    window.location.href = `../adminProfilePage/adminProfilePage.html`;
}

// Function to open a specific tab
function openTab(tabName) {
    // Hide all tab content sections
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function (tabContent) {
        tabContent.style.display = 'none';
    });

    // Show the selected tab content
    document.getElementById(tabName).style.display = 'block';
}

// Open the default tab (you can specify which tab you want to be open initially)
openTab('tab1');
