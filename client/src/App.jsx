import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header.jsx';
import About from './views/About.jsx';
import AddItem from './views/AddItem.jsx';
import Home from './views/Home.jsx';
import { items as initialItems } from './data.js';
import './App.css';

const categoryStorageKey = 'music-collection-category';
const genreStorageKey = 'music-collection-genre';
const bookmarkStorageKey = 'music-collection-bookmarks';
const collectionStorageKey = 'music-collection-items';

export default function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem(collectionStorageKey);
    if (!saved) return initialItems;

    try {
      const savedItems = JSON.parse(saved);
      return Array.isArray(savedItems) ? savedItems : initialItems;
    } catch (error) {
      console.error('Could not restore the saved music collection.', error);
      return initialItems;
    }
  });
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const saved = localStorage.getItem(categoryStorageKey);
    return saved || 'All';
  });

  const [selectedGenre, setSelectedGenre] = useState(() => {
    const saved = localStorage.getItem(genreStorageKey);
    return saved || 'All';
  });

  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const saved = localStorage.getItem(bookmarkStorageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(bookmarkStorageKey, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    localStorage.setItem(collectionStorageKey, JSON.stringify(items));
  }, [items]);

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
      return current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId];
    });
  }

  const categories = ['All', ...new Set(items.map((item) => item.category))];
  const genres = ['All', ...new Set(items.map((item) => item.genre))];

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              categories={categories}
              genres={genres}
              selectedCategory={selectedCategory}
              selectedGenre={selectedGenre}
              onCategoryChange={handleCategoryChange}
              onGenreChange={handleGenreChange}
              favoriteIds={favoriteIds}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<AddItem onAddItem={setItems} />} />
      </Routes>
    </>
  );
}
