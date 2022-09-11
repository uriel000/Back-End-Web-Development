const fs = require('fs');

const folderName = process.argv[2] || 'Project';

fs.mkdirSync(folderName);

const plate = "<!DOCTYPE html><html><head><title>Document</title></head><body></body></html>";



try {
    fs.writeFileSync(`${folderName}/index.html`, plate);
    fs.writeFileSync(`${folderName}/style.css`, "");
    fs.writeFileSync(`${folderName}/app.js`, "");
} catch(e) {
    console.log("Error: ", e);
}


