// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to navigation links
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            loadPage(link.getAttribute('href')); // Load the page content
        });
    });
});

function loadPage(page) {
    // Fetch and display the content of the selected page
    fetch(page)
        .then(response => response.text())
        .then(content => {
            document.querySelector('main').innerHTML = content;
        })
        .catch(error => console.log('Error loading page:', error));
}
