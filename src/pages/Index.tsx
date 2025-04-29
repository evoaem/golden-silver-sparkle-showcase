
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Diamond, ShoppingBag, Badge, Heart, Star } from "lucide-react";

const Index = () => {
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Silver Chain Bracelet with Gold Plating",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      isNew: true
    },
    {
      id: 2,
      name: "Elegant Silver Pendant with 24K Gold Accent",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      isSale: true
    },
    {
      id: 3,
      name: "Silver Hoop Earrings with Gold Detail",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
      id: 4,
      name: "Silver Statement Ring with Gold Plating",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah L.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
      content: "I've received so many compliments on my bracelet. The gold plating is still perfect after months of wear!",
      product: "Silver Chain Bracelet with Gold Plating"
    },
    {
      id: 2,
      name: "Michael T.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 4,
      content: "Bought this as an anniversary gift for my wife. She absolutely loves the pendant and wears it daily.",
      product: "Elegant Silver Pendant with Gold Accent"
    },
    {
      id: 3,
      name: "Jessica R.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      rating: 5,
      content: "The quality is exceptional. These earrings are elegant enough for special occasions but also suitable for everyday wear.",
      product: "Silver Hoop Earrings with Gold Detail"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold mb-4 leading-tight">
                Elegantly <span className="text-gold-dark">Crafted</span> Silver Jewelry
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Discover our exclusive collection of premium silver jewelry with 24K gold plating. 
                Each piece is meticulously crafted to add a touch of luxury to your everyday style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gold-dark hover:bg-gold-DEFAULT text-white transition-colors">
                  <ShoppingBag className="mr-2 h-4 w-4" /> 
                  Shop Collection
                </Button>
                <Button variant="outline" className="border-gold-dark text-gold-dark hover:bg-gold-light">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-light rounded-full opacity-40 filter blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-silver-light rounded-full opacity-60 filter blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" 
                  alt="Luxury Silver Jewelry" 
                  className="relative z-10 rounded-lg shadow-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-gold-light rounded-full flex items-center justify-center mb-4">
                <Diamond className="h-7 w-7 text-gold-dark" />
              </div>
              <h3 className="text-xl font-playfair font-medium mb-2">Premium Materials</h3>
              <p className="text-gray-600 text-sm">
                All our pieces are crafted from 925 sterling silver with genuine 24K gold plating
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 bg-gold-light rounded-full flex items-center justify-center mb-4">
                <Badge className="h-7 w-7 text-gold-dark" />
              </div>
              <h3 className="text-xl font-playfair font-medium mb-2">Lifetime Guarantee</h3>
              <p className="text-gray-600 text-sm">
                Enjoy peace of mind with our industry-leading lifetime warranty on all jewelry
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 bg-gold-light rounded-full flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-gold-dark" />
              </div>
              <h3 className="text-xl font-playfair font-medium mb-2">Ethically Sourced</h3>
              <p className="text-gray-600 text-sm">
                We ensure all our materials are responsibly and ethically sourced
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Collection */}
      <section id="featured" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">Featured Collection</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover our most popular pieces, each handcrafted with 925 sterling silver and finished with 24K gold plating
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${0.1 * product.id}s` }}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  isNew={product.isNew}
                  isSale={product.isSale}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gold-dark text-gold-dark hover:bg-gold-light">
              View All Collections
            </Button>
          </div>
        </div>
      </section>
      
      {/* Special Promotion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-xl p-8 md:p-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="w-96 h-96 rotate-45 bg-gold-DEFAULT/10 absolute -top-20 -right-20 rounded-full"></div>
              <div className="w-96 h-96 rotate-45 bg-gold-light/10 absolute -bottom-40 -left-20 rounded-full"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg">
                <div className="mb-3">
                  <span className="inline-block py-1 px-3 text-xs font-medium bg-gold-DEFAULT text-black rounded-full">Limited Time Offer</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
                  Exclusive Spring Collection 
                  <span className="block mt-1 text-gold-light">25% Off</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Enjoy special pricing on our new spring collection. Each piece features our signature silver design with exquisite 24K gold plating. 
                  Offer valid until June 1st.
                </p>
                <Button className="bg-gold-DEFAULT hover:bg-gold-dark text-black hover:text-white transition-colors">
                  Shop the Collection
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 animate-shimmer rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1588444650733-d2624a54f1f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80" 
                  alt="Silver and gold jewelry collection" 
                  className="relative z-10 rounded-lg h-64 w-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-light rounded-full opacity-40 filter blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" 
                  alt="Our craftsmanship" 
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">Our Craftsmanship</h2>
              <p className="text-gray-600 mb-4">
                For over a decade, we've been creating exquisite silver jewelry with premium 24K gold plating. 
                Our meticulous attention to detail and commitment to quality has made us a trusted name in the jewelry industry.
              </p>
              <p className="text-gray-600 mb-6">
                Each piece is handcrafted by our skilled artisans who combine traditional techniques with modern innovation. 
                We use only the finest 925 sterling silver and apply multiple layers of 24K gold plating to ensure long-lasting beauty and durability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-gold-DEFAULT mr-2" />
                  <span>Premium 925 sterling silver base</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-gold-DEFAULT mr-2" />
                  <span>Multiple layers of genuine 24K gold plating</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-gold-DEFAULT mr-2" />
                  <span>Advanced tarnish-resistant finish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover why our customers love their LUXESILVER jewelry pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="animate-fade-in" style={{ animationDelay: `${0.1 * testimonial.id}s` }}>
                <TestimonialCard
                  name={testimonial.name}
                  image={testimonial.image}
                  rating={testimonial.rating}
                  content={testimonial.content}
                  product={testimonial.product}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter & Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter and be the first to know about new collections, 
              special promotions and exclusive events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-light"
              />
              <Button className="bg-gold-dark hover:bg-gold-DEFAULT text-white transition-colors">
                Subscribe
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-playfair font-medium mb-4">Visit Our Store</h3>
              <p className="text-gray-600 mb-2">123 Jewelry Lane, Luxury District</p>
              <p className="text-gray-600 mb-6">New York, NY 10001</p>
              <p className="text-gold-dark font-medium">
                contact@luxesilver.com | (800) 555-0123
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-playfair font-bold text-white tracking-tight">LUXE<span className="text-gold-DEFAULT">SILVER</span></span>
              <p className="mt-2 max-w-xs">
                Premium silver jewelry with 24K gold plating, designed for the modern individual.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-medium mb-4">Shop</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gold-light transition-colors">Collections</a></li>
                  <li><a href="#" className="hover:text-gold-light transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-gold-light transition-colors">Best Sellers</a></li>
                  <li><a href="#" className="hover:text-gold-light transition-colors">Sale</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">About</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gold-light transition-colors">Our Story</a></li>
                  <li><a href="#" className="hover:text-gold-light transition-colors">Craftsmanship</a></li>
                  <li><a href="#" className="hover:text-gold-light transition-colors">Materials</a></li>
                  <li><a href="#" className="hover:text-gold-light transition-colors">Sustainability</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gold-light transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-gold-light transition-colors">Shipping & Returns</a></li>
                  <li><a href="#" className="hover:text-gold-light transition-colors">Care Instructions</a></li>
                  <li><a href="#" className="hover:text-gold-light transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 LUXESILVER. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gold-light transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold-light transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
