import https from 'https';

function getSheets(urlStr) {
  const url = new URL(urlStr);
  const options = {
    hostname: url.hostname,
    port: 443,
    path: url.pathname + url.search,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  };

  console.log("Fetching Google Sheets data via GET...");

  const req = https.request(options, (res) => {
    console.log('Initial Status:', res.statusCode);
    
    if (res.statusCode === 302 || res.statusCode === 301) {
      const redirectUrl = res.headers.location;
      console.log('Following redirect to:', redirectUrl);
      
      https.get(redirectUrl, (redirectRes) => {
        console.log('Redirect Status:', redirectRes.statusCode);
        let body = '';
        redirectRes.on('data', (chunk) => body += chunk);
        redirectRes.on('end', () => {
          try {
            const data = JSON.parse(body);
            console.log('Success! Keys of returned object:', Object.keys(data));
            console.log('Full response preview:', JSON.stringify(data, null, 2).substring(0, 1500));
            if (Array.isArray(data)) {
              console.log('Total records:', data.length);
            } else if (data.data) {
              console.log('Total records in data.data:', data.data.length);
            }
          } catch (e) {
            console.log('Response was not JSON. Body snippet:', body.substring(0, 500));
          }
        });
      });
      return;
    }

    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      console.log('Response:', body);
    });
  });

  req.on('error', (e) => {
    console.error('Request error:', e);
  });

  req.end();
}

getSheets("https://script.google.com/macros/s/AKfycbylfcX1xeYmnGfMR9j6d-VL-9iUCiTolApZ_YURJfpHb3KquLNULAP-mk8K-r6gfVbO/exec");
