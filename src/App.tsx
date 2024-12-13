import { newArrivals, featuredProducts, categories } from './data/products';
import { lazy, useState } from 'react';
const StoreLocations = lazy(() => import('./components/StoreLocations'));
const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const ProductCard = lazy(() => import('./components/ProductCard'));
const SectionTitle = lazy(() => import('./components/SectionTitle'));
const ProductPopup = lazy(() => import('./components/ProductPopup'));

function App() {
  const [selectedProduct, setSelectedProduct] = useState<typeof newArrivals[0] | null>(null);
  const handleRoute =  ()=>{
    window.open('https://www.hipalz.com/tibarumal', '_blank');
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      {/* New Arrivals Section */}
      <section id="new-arrivals" className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionTitle
            title="New Arrivals"
            subtitle="Discover our latest collection of exquisite pieces"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {newArrivals.map((product, index) => (
              <ProductCard key={index} {...product} onClick={() => setSelectedProduct(product)}/>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="collections" className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Collections"
            subtitle="Explore our carefully curated collections"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categories.map((category, index) => (
              <div onClick={handleRoute} key={index} className="relative h-64 overflow-hidden rounded-lg cursor group">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Products"
            subtitle="Our most popular and sought-after pieces"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} onClick={() => setSelectedProduct(product)}/>
            ))}
          </div>
        </div>
      </section>
      <StoreLocations />
      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <footer className="py-12 text-white bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">About Us</h3>
              <p className="text-gray-400">Crafting timeless pieces of jewelry since 1990. Every piece tells a unique story.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#new-arrivals" className="text-gray-400 hover:text-white">New Arrivals</a></li>
                <li><a href="#collections" className="text-gray-400 hover:text-white">Collections</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Jewelry Lane</li>
                <li>New York, NY 10001</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@tiraajewels.com</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
              <p className="mb-4 text-gray-400">Subscribe to receive updates about new collections and special offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-gray-900 rounded-l-md"
                />
                <button type="button" className="px-4 py-2 transition-colors duration-300 bg-primary text-secondary rounded-r-md hover:bg-primary-dark">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;