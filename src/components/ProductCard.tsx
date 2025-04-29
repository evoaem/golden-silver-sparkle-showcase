
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ image, name, price, originalPrice, isNew, isSale }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 product-card-shadow hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className={`absolute inset-0 bg-black/5 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-gold-light text-gold-dark border-gold-dark">New</Badge>
        )}
        
        {isSale && (
          <Badge className="absolute top-3 right-3 bg-red-50 text-red-600 border-red-200">Sale</Badge>
        )}
        
        <div className={`absolute right-3 bottom-3 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Button variant="outline" size="icon" className="rounded-full bg-white h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-sm mb-1">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-base">{price}</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-400">{originalPrice}</span>
          )}
        </div>
        
        <Button className="w-full mt-3 bg-primary hover:bg-gold-light hover:text-gold-dark transition-colors">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
