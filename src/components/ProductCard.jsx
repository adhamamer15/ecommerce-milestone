function ProductCard({ product, onAddToCart }) {
  function handleAddToCart() {
    onAddToCart(product);
    alert(`${product.name} added to cart!`);
  }

  return (
    <div className="product-card bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600 mt-2">${product.price}</p>

      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-yellow-500 hover:text-black"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
