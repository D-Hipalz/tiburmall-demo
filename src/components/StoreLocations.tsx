import { memo, useState } from 'react';
import { MapPin } from 'lucide-react';
import { stores } from '../data/stores';

const MemoStoreLocations: React.FC = () => {
  const [activeStore, setActiveStore] = useState(0);
  const handleStore = (index:number) =>{
    setActiveStore(index)
    window.open('https://www.hipalz.com/tibarumal', '_blank');
  }

  return (
    <section className="py-20 bg-gradient-radial from-primary/10 via-primary/5 to-transparent">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl md:text-5xl text-secondary">Shop Our Collections</h2>
          <p className="max-w-2xl mx-auto text-lg text-textLight">
            Explore our exclusive jewelry collections online or visit our stores
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Store Selector */}
          {stores.map((store, index) => (
            <div
              key={index?.toString()}
              className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 cursor-pointer 
                  ${activeStore === index ? 'ring-2 ring-primary' : 'hover:shadow-xl'}`}
              onClick={()=>handleStore(index)}
              onKeyDown={()=>handleStore(index)}
            >
              <div className="flex items-center p-6">
                <div className="flex-shrink-0">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="object-cover w-24 h-24 rounded-lg"
                  />
                </div>
                <div className="flex-1 ml-6">
                  <h3 className="mb-2 font-serif text-xl text-secondary">{store.name}</h3>
                  <div className="flex items-center mb-2 text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{store.address}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{store.timings}</span>
                    <span className="text-sm text-primary-dark">
                      {store.productsAvailable} products available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StoreLocations = memo(MemoStoreLocations);
export default StoreLocations;