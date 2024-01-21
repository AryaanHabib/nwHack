function submitForm() {
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const volunteersNeeded = document.getElementById('volunteers-needed').value;
    const currentVolunteers = document.getElementById('current-volunteers').value;

    const organizationData = {
        title,
        category,
        description,
        volunteersNeeded: parseInt(volunteersNeeded),
        currentVolunteers: parseInt(currentVolunteers),
    };

    fetch('http://localhost:3000/addOrganization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(organizationData),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('success-message').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('success-message').style.display = 'none';
                }, 5000);
            } else {
                console.error(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
