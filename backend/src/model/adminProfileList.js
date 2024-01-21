class AdminProfileList {
    constructor() {
        this.profileList = [];
    }

    addProfile(adminProfile) {
        if (!(adminProfile instanceof AdminProfile)) {
            throw new Error('Invalid argument. Must be an instance of AdminProfile.');
        }

        this.profileList.push(adminProfile);
    }

    removeProfile(adminProfile) {
        if (!(adminProfile instanceof AdminProfile)) {
            throw new Error('Invalid argument. Must be an instance of AdminProfile.');
        }

        const index = this.profileList.indexOf(adminProfile);
        if (index !== -1) {
            this.profileList.splice(index, 1);
        }
    }

    listProfiles() {
        this.profileList.forEach((profile, index) => {
            console.log(`Profile ${index + 1}:`, profile);
        });
    }

    getNumberOfProfiles() {
        return this.profileList.length;
    }
}

// Example usage
try {
    const adminProfileList = new AdminProfileList();

    const profile1 = new AdminProfile('Title 1', 'Category 1', 'Description 1', 10, 5, 'image1.jpg');
    const profile2 = new AdminProfile('Title 2', 'Category 2', 'Description 2', 15, 8, 'image2.jpg');

    adminProfileList.addProfile(profile1);
    adminProfileList.addProfile(profile2);

    console.log('Number of profiles:', adminProfileList.getNumberOfProfiles());
    adminProfileList.listProfiles();

    adminProfileList.removeProfile(profile1);

    console.log('Number of profiles after removal:', adminProfileList.getNumberOfProfiles());
    adminProfileList.listProfiles();
} catch (error) {
    console.error(error.message);
}
