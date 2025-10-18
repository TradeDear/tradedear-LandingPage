const TrustedPlatforms = () => {
  const platforms = [
    "Binance",
    "Coinbase",
    "MetaTrader",
    "TradingView",
    "Interactive Brokers",
    "eToro",
    "Kraken",
    "FTX",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border bg-card/30">
      <div className="container mx-auto">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8">
          TRUSTED BY <span className="text-primary">1000+</span> TRADERS WORLDWIDE
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors font-semibold text-sm"
            >
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPlatforms;
