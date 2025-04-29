
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-playfair font-bold tracking-tight">LUXE<span className="text-gold-dark">SILVER</span></span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#featured" className="text-sm font-medium hover:text-gold-dark transition-colors">Collections</a>
          <a href="#about" className="text-sm font-medium hover:text-gold-dark transition-colors">About</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-gold-dark transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium hover:text-gold-dark transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <ShoppingBag className="h-5 w-5" />
            <span className="ml-2">Cart (0)</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <a href="#featured" className="block py-2 text-sm font-medium hover:text-gold-dark transition-colors">Collections</a>
            <a href="#about" className="block py-2 text-sm font-medium hover:text-gold-dark transition-colors">About</a>
            <a href="#testimonials" className="block py-2 text-sm font-medium hover:text-gold-dark transition-colors">Testimonials</a>
            <a href="#contact" className="block py-2 text-sm font-medium hover:text-gold-dark transition-colors">Contact</a>
            <Button variant="ghost" size="sm" className="flex mt-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2">Cart (0)</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
