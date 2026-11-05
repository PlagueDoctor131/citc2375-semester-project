import ItemCard from './ItemCard.jsx';

export default function ItemList({ items, favoriteIds, onToggleFavorite }) {
  if (items.length === 0) {
    return <p className="no-results">No matching items were found.</p>;
  }

  return (
    <section className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          isFavorite={favoriteIds.includes(item.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </section>
  );
}
