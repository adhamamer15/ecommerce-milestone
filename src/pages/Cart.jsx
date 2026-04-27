function Cart({ cartItems, onRemoveFromCart, onClearCart }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600">Your cart is currently empty.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-300 pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 rounded-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-2xl font-bold">Total: ${totalPrice}</p>

          <button
            onClick={onClearCart}
            className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-yellow-500 hover:text-black"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
