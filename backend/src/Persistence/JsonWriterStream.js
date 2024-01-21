const { Writable } = require('stream');
const fs = require('fs');

class JsonWriterStream extends Writable {
    constructor(destination) {
        super();
        this.destination = destination;
        this.isFirstWrite = true;
        this.fileStream = fs.createWriteStream(destination);
    }

    _write(chunk, encoding, callback) {
        try {
            if (!this.isFirstWrite) {
                this.fileStream.write(',\n');
            } else {
                this.isFirstWrite = false;
            }

            this.fileStream.write(chunk, encoding, callback);
        } catch (error) {
            console.error('Error writing to stream:', error);
            callback(error); // Pass the error to the callback
        }
    }

    _final(callback) {
        try {
            this.fileStream.write('\n]');
            this.fileStream.end();
            callback();
        } catch (error) {
            console.error('Error finalizing stream:', error);
            callback(error); // Pass the error to the callback
        }
    }

    // Optionally, add a destroy method for resource cleanup
    destroy(err) {
        if (err) {
            console.error('Error occurred, cleaning up resources:', err);
        }
        this.fileStream.destroy();
        super.destroy(err);
    }
}

module.exports = JsonWriterStream;
