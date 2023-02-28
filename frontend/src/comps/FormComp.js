import { useState } from 'react';

function FormComp() {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Song:', song);
    console.log('Artist:', artist);

    // fetch('https://example.com/api/endpoint', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(song, artist)
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Song:
        <input type="text" value={song} onChange={(e) => setSong(e.target.value)} />
      </label>
      <br/>
      <label>
        Artist:
        <input type="artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
      </label>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComp