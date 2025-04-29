
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center group">
            <span className="text-2xl font-playfair font-bold tracking-tight transition-all duration-300 transform group-hover:scale-105">
              LOTUS<span className="text-gold-dark ml-1 animate-shimmer">SILVER</span>
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#featured" className="text-sm font-medium hover:text-gold-dark transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold-dark after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Collections</a>
          <a href="#about" className="text-sm font-medium hover:text-gold-dark transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold-dark after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
          <a href="#contact" className="text-sm font-medium hover:text-gold-dark transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold-dark after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex hover:bg-gold-light/50 transition-all duration-300 hover:scale-105">
            <ShoppingBag className="h-5 w-5 mr-2 text-gold-dark" />
            <span>Cart (0)</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-gold-light/50 transition-all duration-300" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className="h-5 w-5 animate-fade-in" /> : 
              <Menu className="h-5 w-5 animate-fade-in" />
            }
          </Button>
        </div>
      </div>
      
      {/* Mobile menu with animation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#featured" className="block py-2.5 text-sm font-medium hover:text-gold-dark transition-colors">Collections</a>
            <a href="#about" className="block py-2.5 text-sm font-medium hover:text-gold-dark transition-colors">About</a>
            <a href="#contact" className="block py-2.5 text-sm font-medium hover:text-gold-dark transition-colors">Contact</a>
            <Button variant="ghost" size="sm" className="flex mt-3 hover:bg-gold-light/50 transition-all duration-300">
              <ShoppingBag className="h-5 w-5 mr-2 text-gold-dark" />
              <span>Cart (0)</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
