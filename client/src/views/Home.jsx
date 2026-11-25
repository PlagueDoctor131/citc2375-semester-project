import { useState } from 'react';
import ItemList from '../components/ItemList.jsx';

export default function Home({
  items,
  categories,
  genres,
  selectedCategory,
  selectedGenre,
  onCategoryChange,
  onGenreChange,
  favoriteIds,
  onToggleFavorite,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarksOnly, setBookmarksOnly] = useState(false);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesGenre = selectedGenre === 'All' || item.genre === selectedGenre;
    const matchesSearch =
      normalizedSearch === '' ||
      item.name.toLowerCase().includes(normalizedSearch) ||
      item.artist.toLowerCase().includes(normalizedSearch);
    const matchesBookmarks = !bookmarksOnly || favoriteIds.includes(item.id);

    return matchesCategory && matchesGenre && matchesSearch && matchesBookmarks;
  });

  return (
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
            onChange={onGenreChange}
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
            onChange={onCategoryChange}
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
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}
