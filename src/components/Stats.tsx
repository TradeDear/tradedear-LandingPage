const Stats = () => {
  const stats = [
    { value: "$1.5m+", label: "Daily Trading Volume" },
    { value: "1000K+", label: "Active Traders" },
    { value: "8+", label: "Trading Pairs" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-primary">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
