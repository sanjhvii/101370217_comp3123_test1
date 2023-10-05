const fs = require('fs');
const path = require('path');

async function writeFile(filename, text) {
    try {
        await fs.promises.writeFile(filename, text);
    } catch (error) {
        console.error(`Got an error trying to write to a file: ${error.message}`);
    }
}

async function deleteFile(filePath) {
    try {
        fs.promises.unlink(filePath);
    } catch (error) {
        console.error(`Got an error trying to delete the file: ${error.message}`);
    }
}

const logsPath = path.join(__dirname, 'Logs');

async function add() {
    if (!fs.existsSync(logsPath)) {
        fs.mkdirSync(logsPath);
    }
    process.chdir(logsPath);
    for (let i = 0; i < 10; i++) {
        filename = `log${i}.txt`
        await writeFile(filename, "Test text.")
        console.log(filename)
    }
}

async function remove() {
    if (fs.existsSync(logsPath)) {
        const files = await fs.promises.readdir(logsPath);
        files.forEach(async (file) => {
            await deleteFile(file);
            console.log(`delete files...${file}`);
        });
    }
}

add().then(()=> remove());