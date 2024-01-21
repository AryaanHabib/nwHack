class orgProfile {
    constructor(orgName, orgPic, orgDescription, orgCategory, orgRole, numOfVolunteers) {
        this.orgName = orgName;
        this.orgPic = orgPic;
        this.orgDescription = orgDescription;
        this.orgCategory = orgCategory;
        this.orgRole = orgRole;
        this.numOfVolunteers = numOfVolunteers;
    }
}

// Example usage:
const orgProfile = new Profile('John Doe', 'path/to/image.jpg', 'Web Developer');
console.log(orgProfile.orgName);        // Output: John Doe
console.log(orgProfile.orgPic);        // Output: path/to/image.jpg
console.log(orgProfile.orgDescription);  // Output: Web Developer
console.log(orgProfile.orgCategory);
console.log(orgProfile.orgRole);
console.log(orgProfile.numOfVolunteers);
