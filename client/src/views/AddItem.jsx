import { useState } from 'react';
import { useNavigate } from 'react-router';

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export default function AddItem({ onAddItem }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      artist: artist.trim(),
      genre: genre.trim(),
      category: category.trim(),
      images: [image.trim()],
      description: escapeHtml(description.trim()),
      favorite: false,
    };

    onAddItem((currentItems) => [...currentItems, newItem]);
    navigate('/');
  }

  return (
    <main className="page-shell">
      <form className="add-item-form" onSubmit={handleSubmit}>
        <h2>Add Music to the Collection</h2>

        <label htmlFor="item-name">Song / Album Name</label>
        <input
          id="item-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="item-artist">Artist</label>
        <input
          id="item-artist"
          type="text"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
          required
        />

        <label htmlFor="item-genre">Genre</label>
        <input
          id="item-genre"
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          required
        />

        <label htmlFor="item-category">Category</label>
        <input
          id="item-category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        />

        <label htmlFor="item-image">Image path or URL</label>
        <input
          id="item-image"
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          placeholder="/images/example.jpg"
          required
        />

        <label htmlFor="item-description">Description</label>
        <textarea
          id="item-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows="5"
          required
        />

        <button type="submit">Add Music</button>
      </form>
    </main>
  );
}
