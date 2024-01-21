const fs = require('fs');

function writeToJSONFile(filePath, data) {
    try {
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        jsonData.push(data);

        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
        return { success: true, message: 'Organization data added to JSON file.' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error adding organization data to JSON file.' };
    }
}

module.exports = { writeToJSONFile };
