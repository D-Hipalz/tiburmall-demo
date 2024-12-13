import React, { memo } from 'react';
import { X, MapPin } from 'lucide-react';

interface Store {
    name: string;
    location: string;
}

interface ProductPopupProps {
    product: {
        title: string;
        image: string;
        description: string;
        name: string;
        price: string;
    };
    onClose: () => void;
}

const stores: Store[] = [
    { name: 'Tibarumal Jewellers - Bangalore', location: 'Commercial Street, Bangalore' },
    { name: 'Tibarumal Jewellers - Hyderabad', location: 'Hyderabad Kompally Main Road' },
];

function MemoProductPopup({ product, onClose }: ProductPopupProps) {
    const [showStores, setShowStores] = React.useState(false);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-white shadow-2xl">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute p-2 text-gray-500 bg-gray-100 rounded-full right-4 top-4 hover:bg-gray-200"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
                    <div className="overflow-hidden rounded-lg aspect-square">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="font-serif text-3xl font-medium text-gray-900">{product.title}</h2>
                            <p className="mt-2 text-2xl font-semibold text-gray-900">{product.price}</p>
                            <p className="mt-4 text-gray-600">{product.description}</p>
                        </div>

                        {!showStores ? (
                            <button
                                type="button"
                                onClick={() => setShowStores(true)}
                                className="flex items-center justify-center gap-2 px-6 py-3 mt-6 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
                            >
                                <MapPin className="w-5 h-5" />
                                Find in Stores
                            </button>
                        ) : (
                            <div className="mt-6 space-y-4">
                                <h3 className="font-medium text-gray-900">Available at:</h3>
                                {stores.map((store) => (
                                    <a
                                        key={store.name}
                                        href="https://www.hipalz.com/tibarumal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 transition-colors border border-gray-200 rounded-lg hover:border-indigo-700"
                                    >
                                        <p className="font-medium text-gray-900">{store.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{store.location}</p>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const ProductPopup = memo(MemoProductPopup);
export default ProductPopup;