export default function sendData(texto) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: texto })
    };
    fetch('/api/search', requestOptions).then(response => response.json())
    .then(data => console.log({ postId: data.id }));
}