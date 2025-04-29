
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  content: string;
  product: string;
}

const TestimonialCard = ({ name, image, rating, content, product }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? "text-gold-DEFAULT fill-gold-DEFAULT" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 italic mb-4">"{content}"</p>
      
      <div className="mt-auto">
        <div className="text-xs text-gray-500">Purchased</div>
        <div className="text-sm font-medium">{product}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
