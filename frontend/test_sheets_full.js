import https from 'https';

const payload = {
  bookingId: "BKG-STRING-TEST-" + Math.floor(Math.random() * 10000),
  customerName: "String Test Customer",
  customerPhone: "9876543210",
  customerAddress: "Test Address, Hyderabad",
  serviceName: "CCTV Installation",
  selectedItems: "Camera 2MP, DVR 4 Channel", // Sending as a string to test if it crashes the Apps Script
  bookingDate: "2026-06-25",
  bookingTime: "11:00 AM",
  notes: "Testing if string selectedItems causes 500 error",
  amount: "₹1,500",
  numericAmount: 1500,
  status: "Pending",
  createdAt: new Date().toISOString()
};

function postToSheets(urlStr, payloadData) {
  const url = new URL(urlStr);
  const data = JSON.stringify(payloadData);

  const options = {
    hostname: url.hostname,
    port: 443,
    path: url.pathname + url.search,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  console.log("Sending payload...");

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
          console.log('Final Response Body:', body);
        });
      });
      return;
    }

    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      console.log('Response Body:', body);
    });
  });

  req.on('error', (e) => {
    console.error('Request error:', e);
  });

  req.write(data);
  req.end();
}

postToSheets(
  "https://script.google.com/macros/s/AKfycbylfcX1xeYmnGfMR9j6d-VL-9iUCiTolApZ_YURJfpHb3KquLNULAP-mk8K-r6gfVbO/exec",
  payload
);
