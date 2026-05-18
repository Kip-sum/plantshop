function PlantCard({ plant, onSoldOut }) {
  const {
    id,
    name,
    image,
    price,
    inStock,
  } = plant;

  return (
    <li className="card">
      <img
        src={image}
        alt={name}
      />

      <h4>{name}</h4>

      <p>Price: ${price}</p>

      {inStock ? (
        <button onClick={() => onSoldOut(id)}>
          In Stock
        </button>
      ) : (
        <button disabled>
          Sold Out
        </button>
      )}
    </li>
  );
}

export default PlantCard;