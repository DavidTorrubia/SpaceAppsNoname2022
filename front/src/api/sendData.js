export default function sendData(texto, callback) {
    const requestOptions = {
      method: 'GET',
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ key: texto })
    };
    fetch('http://localhost:3000/api/v1/search/' + texto, requestOptions).then(response => response.json())
    .then(data => callback(data));
}