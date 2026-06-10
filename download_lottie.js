const https = require('https');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/LottieFiles/lottie-react/master/example/src/lotties/loading.json';
const dest = 'src/assets/loading.json';

https.get(url, (res) => {
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download completed.');
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error downloading:', err.message);
});
