const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(logosDir)) {
    fs.mkdirSync(logosDir, { recursive: true });
}

const downloads = [
    { name: 'hikvision.png', url: 'https://www.google.com/s2/favicons?domain=hikvision.com&sz=128' },
    { name: 'dahua.png', url: 'https://www.google.com/s2/favicons?domain=dahuasecurity.com&sz=128' },
    { name: 'cpplus.png', url: 'https://www.google.com/s2/favicons?domain=cppluscorp.com&sz=128' },
    { name: 'secureye.png', url: 'https://www.google.com/s2/favicons?domain=secureye.com&sz=128' },
    { name: 'reboot.png', url: 'https://www.google.com/s2/favicons?domain=reboot-it.com.au&sz=128' }, 
    { name: 'homewell.png', url: 'https://www.google.com/s2/favicons?domain=homewellcares.com&sz=128' }
];

async function downloadAll() {
    for (const file of downloads) {
        const dest = path.join(logosDir, file.name);
        try {
            const response = await fetch(file.url);
            if (!response.ok) throw new Error(`Unexpected response ${response.statusText}`);
            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            fs.writeFileSync(dest, buffer);
            console.log(`Successfully downloaded ${file.name}`);
        } catch (err) {
            console.error(`Error downloading ${file.name}:`, err.message);
        }
    }
}

downloadAll();
