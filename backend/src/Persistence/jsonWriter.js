const fs = require('fs');

class JsonWriter {
    constructor(destination) {
        this.destination = destination;
        this.writer = null;
    }

    // Opens the writer
    open() {
        this.writer = fs.createWriteStream(this.destination);
    }

    // Writes JSON representation of organization to file
    write(organization) {
        const json = organizationToJson(organization);
        this.saveToFile(JSON.stringify(json, null, 4));
    }

    // Closes the writer
    close() {
        this.writer.close();
    }

    // Writes string to file
    saveToFile(json) {
        this.writer.write(json);
    }
}

// Helper function to convert organization details to JSON
function organizationToJson(organization) {
    return {
        organizationName: organization.organizationName,
        category: organization.category,
        description: organization.description,
        numberOfVolunteers: organization.numberOfVolunteers,
        image: organization.image,
    };
}

module.exports = JsonWriter;
