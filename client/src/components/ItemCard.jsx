export default function ItemCard({ item, isFavorite, onToggleFavorite }) {
  const imageSrc = item.images?.[0] || '/images/background_image_blur.png';

  return (
    <article className="item-card">
      <img className="item-image" src={imageSrc} alt={item.name} />

      <div className="item-content">
        <p className="item-meta">{item.artist}</p>
        <h2>{item.name}</h2>
        <p className="item-meta">
          <strong>Genre:</strong> {item.genre}
        </p>
        <p className="item-meta">
          <strong>Category:</strong> {item.category}
        </p>

        <p
          className="item-description"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />

        <button
          type="button"
          className="favorite-button"
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(item.id)}
        >
          {isFavorite ? '★ Favorite' : '☆ Add to favorites'}
        </button>
      </div>
    </article>
  );
}
