import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Calendar } from "lucide-react";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful! 🎉",
        description: "Welcome to NLP Singles' Conference! Check your email for confirmation and event details.",
      });
      
      // Scroll to next section
      document.getElementById('faith-card')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="h-4 w-4" />
            <span>Join Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Register for <span className="bg-gradient-hero bg-clip-text text-transparent">NLP Singles' Conference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure your spot at London's premier singles conference. Registration is completely free!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
              <UserPlus className="h-6 w-6 text-primary" />
              <span>Free Registration</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    required
                    placeholder="Enter your first name"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    required
                    placeholder="Enter your last name"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+234 800 123 4567"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    required
                    placeholder="Your city"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ageRange">Age Range</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-25">18-25</SelectItem>
                      <SelectItem value="26-30">26-30</SelectItem>
                      <SelectItem value="31-35">31-35</SelectItem>
                      <SelectItem value="36-40">36-40</SelectItem>
                      <SelectItem value="41-45">41-45</SelectItem>
                      <SelectItem value="46+">46+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cell">Cell/Small Group (if any)</Label>
                <Input
                  id="cell"
                  placeholder="Your current cell or small group"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-hero hover:shadow-glow transition-smooth text-lg py-6"
                >
                  {isLoading ? "Registering..." : "Register for Free"}
                </Button>
              </div>
            </form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2 text-center">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✅ Instant confirmation email with event details</li>
                <li>✅ WhatsApp reminders and updates</li>
                <li>✅ Access to pre-event community chat</li>
                <li>✅ Event day check-in instructions in London</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationForm;