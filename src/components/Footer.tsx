import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">
                Trade<span className="text-primary">Dear</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for global trading and investment opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Trading</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Cryptocurrency</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Forex</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Stocks</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Commodities</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Press</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Trading Academy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">API Docs</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 TradeDear. All rights reserved. Trading involves risk.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
