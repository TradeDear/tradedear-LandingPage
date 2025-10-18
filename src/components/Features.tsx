import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, BarChart3, Users, Clock, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your funds are protected with military-grade encryption and cold storage.",
    },
    {
      icon: Zap,
      title: "Instant Execution",
      description: "Execute trades in milliseconds with our high-performance infrastructure.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time charts, indicators, and AI-powered market insights.",
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Learn from experienced traders and share strategies.",
    },
    {
      icon: Clock,
      title: "24/7 Trading",
      description: "Access global markets anytime, anywhere on any device.",
    },
    {
      icon: Award,
      title: "Low Fees",
      description: "Competitive spreads and transparent pricing with no hidden costs.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">TradeDear</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the most advanced trading platform with features designed for both beginners and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
