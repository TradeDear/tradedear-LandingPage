import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Users } from "lucide-react";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Start Trading{" "}
                <span className="text-primary">Smarter</span> with TradeDear
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Access global markets with confidence. Trade forex, crypto, stocks, and commodities with advanced tools and real-time insights.
              </p>
            </div>

            {/* Search Bar */}
            {/* <div className="flex gap-3 p-2 bg-card rounded-xl shadow-[var(--shadow-card)] max-w-2xl">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search markets (e.g., BTC, AAPL, EUR/USD)"
                  className="pl-10 border-0 bg-transparent focus-visible:ring-0"
                />
              </div>
              <Button variant="hero" size="lg" className="px-8">
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore
              </Button>
            </div> */}

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-2 border-background" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-background" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">1000K+ Active Traders</p>
                  <p className="text-xs text-muted-foreground">Join our community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
             <Image
  src="/assets/hero-trader.png"
  alt="Professional Trader"
  width={600}
  height={400}
  className="w-full h-auto rounded-2xl"
/>

              {/* Floating Card */}
              <div className="absolute top-10 right-10 bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-[var(--shadow-card)] border border-border">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Bitcoin</p>
                    <p className="text-xs text-muted-foreground">+12.5% Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
