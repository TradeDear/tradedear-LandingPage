'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Markets", href: "#markets", hasDropdown: true },
    { name: "Trading", href: "#trading" },
    { name: "Learn", href: "#learn" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- Logo --- */}
         <div className="flex items-center space-x-2">
  <div className="w-22 h-16 rounded-lg flex items-center justify-center overflow-hidden">
    <img
      src="/Tradedear.png"   
      alt="TradeDear Logo"
      className="w-full h-full object-cover"
    />
  </div>
  <span className="text-xl font-bold text-foreground"></span>
</div>


          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {["Forex", "Crypto", "Stocks", "Commodities"].map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* --- Desktop Buttons (Secure, New Tab) --- */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <a
                href="https://app.tradedear.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log In
              </a>
            </Button>

            <Button
              variant="default"
              size="sm"
              className="shadow-gold"
              asChild
            >
              <a
                href="https://app.tradedear.com/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* --- Mobile Navigation --- */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* --- Mobile Buttons (New Tab, Secure) --- */}
              <div className="pt-4 border-t border-border space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="https://app.tradedear.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log In
                  </a>
                </Button>

                <Button
                  variant="default"
                  size="sm"
                  className="w-full shadow-gold"
                  asChild
                >
                  <a
                    href="https://app.tradedear.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
