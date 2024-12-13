import { memo } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  onClick: () => void;
}

const MemoProductCard: React.FC<ProductCardProps> = ({ image, name,onClick }) => {
  return (
    <section onClick={onClick} onKeyDown={onClick}>
      <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 group-hover:shadow-2xl">
        <div className="relative overflow-hidden h-80">
          <img
            src={image}
            alt={name}
            className="object-cover object-center w-full h-full transition-transform duration-500 transform group- hover:scale-110"
          />
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100" />
        </div>
        <div className="p-6 bg-white">
          <h3 className="mb-2 font-serif text-xl text-secondary">{name}</h3>
          <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300 mt-4" />
        </div>
      </div>
    </section>
  );
};

const ProductCard = memo(MemoProductCard);
export default ProductCard;