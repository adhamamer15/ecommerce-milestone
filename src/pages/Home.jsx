import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Welcome to ShopEase
      </h2>

      <p className="text-gray-600 text-lg mb-8">
        Your simple online store for fashion, electronics, and accessories.
      </p>

      <Link
        to="/products"
        className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-yellow-500 hover:text-black"
      >
        Shop Now
      </Link>
    </section>
  );
}

export default Home;