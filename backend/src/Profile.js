class Profile {
    constructor(image, title, description) {
        this.image = image;
        this.title = title;
        this.description = description;
    }
}

// Example usage:
const userProfile = new Profile('path/to/image.jpg', 'John Doe', 'Web Developer');
console.log(userProfile.image);        // Output: path/to/image.jpg
console.log(userProfile.title);        // Output: John Doe
console.log(userProfile.description);  // Output: Web Developer
