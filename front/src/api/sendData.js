export default function sendData(texto, callback) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: texto })
    };
    fetch('http://localhost:3000/api/search', requestOptions).then(response => response.json())
    .then(data => callback(data));
}