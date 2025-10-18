import { Card, CardContent } from "@/components/ui/card";
import { Bitcoin, DollarSign, TrendingUp, Coins } from "lucide-react";

const TradingCategories = () => {
  const categories = [
    {
      icon: Bitcoin,
      title: "Cryptocurrency",
      description: "Trade Bitcoin, Ethereum, and 100+ digital assets",
      color: "text-orange-500",
    },
    {
      icon: DollarSign,
      title: "Forex Trading",
      description: "Access major, minor & exotic currency pairs 24/5",
      color: "text-green-500",
    },
    {
      icon: TrendingUp,
      title: "Stocks & ETFs",
      description: "Invest in global stocks and exchange-traded funds",
      color: "text-blue-500",
    },
    {
      icon: Coins,
      title: "Commodities",
      description: "Trade gold, silver, oil, and agricultural products",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Browse <span className="text-primary">Trading</span> Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore diverse trading opportunities tailored to your investment goals. Start your journey today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className={`w-7 h-7 ${category.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingCategories;
