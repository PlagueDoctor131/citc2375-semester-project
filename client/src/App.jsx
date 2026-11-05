import { useState } from 'react';
import Header from './components/Header.jsx';
import ItemList from './components/ItemList.jsx';
import { items } from './data.js';
import './App.css';

const categoryStorageKey = 'music-collection-category';
const genreStorageKey = 'music-collection-genre';
const bookmarkStorageKey = 'music-collection-bookmarks';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const saved = localStorage.getItem(categoryStorageKey);
    return saved || 'All';
  });

  const [selectedGenre, setSelectedGenre] = useState(() => {
    const saved = localStorage.getItem(genreStorageKey);
    return saved || 'All';
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarksOnly, setBookmarksOnly] = useState(false);

  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const saved = localStorage.getItem(bookmarkStorageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  function handleCategoryChange(event) {
    const category = event.target.value;
    setSelectedCategory(category);
    localStorage.setItem(categoryStorageKey, category);
  }

  function handleGenreChange(event) {
    const genre = event.target.value;
    setSelectedGenre(genre);
    localStorage.setItem(genreStorageKey, genre);
  }


  function handleToggleFavorite(itemId) {
    setFavoriteIds((current) => {
      const updated = current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId];

      localStorage.setItem(bookmarkStorageKey, JSON.stringify(updated));
      return updated;
    });
  }

  const categories = ['All', ...new Set(items.map((item) => item.category))];
  const genres = ['All', ...new Set(items.map((item) => item.genre))];

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;

    const matchesGenre = selectedGenre === 'All' || item.genre === selectedGenre;

    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchesSearch =
      normalizedSearch === '' ||
      item.name.toLowerCase().includes(normalizedSearch) ||
      item.artist.toLowerCase().includes(normalizedSearch);

    const matchesBookmarks = !bookmarksOnly || favoriteIds.includes(item.id);

    return (
      matchesCategory &&
      matchesGenre &&
      matchesSearch &&
      matchesBookmarks
    );
  });

  return (
    <>
      <Header />

      <main className="page-shell">
        <section className="controls-panel" aria-label="Item filters">
          <div className="filter-row">
            <label htmlFor="artist-filter">Name / Artist</label>
            <input
              id="artist-filter"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name or artist"
            />
          </div>

          <div className="filter-row">
            <label htmlFor="genre-filter">Genre</label>
            <select
              id="genre-filter"
              value={selectedGenre}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre === 'All' ? 'All genres' : genre}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-row">
            <label htmlFor="category-filter">Category</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All categories' : category}
                </option>
              ))}
            </select>
          </div>

          <label className="bookmark-toggle" htmlFor="bookmarks-only">
            <input
              id="bookmarks-only"
              type="checkbox"
              checked={bookmarksOnly}
              onChange={(event) => setBookmarksOnly(event.target.checked)}
            />
            Bookmarks only
          </label>
        </section>

        <ItemList
          items={filteredItems}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
    </>
  );
}
