const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/addOrganization', (req, res) => {
    const organizationData = req.body;

    try {
        const jsonFilePath = 'C:\\Users\\Aryaan Habib\\Desktop\\nwHacks\\nwHack\\backend\\data\\json\\organisation.json';
        const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

        jsonData.push(organizationData);

        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

        res.send({ success: true, message: 'Organization data added to JSON file.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Error adding organization data to JSON file.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
