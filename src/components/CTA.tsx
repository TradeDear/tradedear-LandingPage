import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-12 lg:p-16">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of successful traders. Create your account in minutes and start trading with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
  variant="hero"
  size="lg"
  className="text-lg px-8"
  asChild
>
  <a
    href="https://account.tradedear.info/signup"
    target="_blank"
    rel="noopener noreferrer"
  >
    Create Free Account
    <ArrowRight className="w-5 h-5 ml-2" />
  </a>
</Button>

              <Button variant="outline" size="lg" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              No credit card required • Start with $10,000 demo account
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
