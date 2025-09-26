import merch1 from "../assets/1.jpeg";
import merch2 from "../assets/2.jpeg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Crown,
  Users,
  Megaphone,
  Calendar,
  Gift,
  Star,
  CheckCircle,
  Heart
} from "lucide-react";

const AmbassadorRecruitment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    socialMedia: "",
    motivation: "",
    availability: [] as string[],
    agreement: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const ambassadorBenefits = [
    {
      icon: Gift,
      title: "Special Perks",
      description: "Ambassador merchandise,NLP Conference Volunteer'"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Directly contribute to transforming lives and building lasting relationships"
    },
    {
      icon: Star,
      title: "Leadership",
      description: "Gain valuable experience in event promotion and community building"
    }
  ];

  const responsibilities = [
    "Promote NLP 2026 on social media platforms",
    "Share your NLP 2025 experience with friends and family",
    "Invite potential attendees and help with registration",
    "Attend ambassador meetings",
    "Support event logistics/coach during NLP 2026",
  ];

  const availabilityOptions = [
  "Social Media Promotion",
  // ...existing code...
    "Community Outreach",
    "Coach Ambassador"
  ];

  const handleAvailabilityChange = (option: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      availability: checked
        ? [...prev.availability, option]
        : prev.availability.filter(item => item !== option)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreement) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the ambassador terms to continue.",
        variant: "destructive",
      });
      return;
    }

    if (formData.availability.length === 0) {
      toast({
        title: "Availability Required",
        description: "Please select at least one area where you can help.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Ambassador Application Submitted! 👑",
        description: "Thank you for applying! Our team will review your application and contact you within 5 business days.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        socialMedia: "",
        motivation: "",
        availability: [],
        agreement: false
      });
    }, 1500);
  };

  return (
    <section id="ambassador" className="py-20 bg-gradient-to-br from-faith/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-faith/10 text-faith px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Crown className="h-4 w-4" />
            <span>Exclusive Opportunity</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Become an <span className="bg-gradient-faith bg-clip-text text-transparent">NLP 2026 Ambassador</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us reach more hearts and transform more lives. Join our exclusive team of NLP 2026 Conference Ambassadors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

          {/* Benefits & Responsibilities */}
          <div className="space-y-8">

            {/* Ambassador Benefits */}
            <Card className="bg-card/50 backdrop-blur-sm border-faith/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Gift className="h-6 w-6 text-faith" />
                  <span>Ambassador Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ambassadorBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <Icon className="h-5 w-5 text-faith mt-1" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Megaphone className="h-6 w-6 text-primary" />
                  <span>Your Role</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Application Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-faith/20 shadow-elegant h-[250px]">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <span>Become a NLP Ambassador</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                type="button"
                onClick={() => window.open("https://chat.whatsapp.com/DtO48vH3KCZ5aNWSHe27mp?mode=ems_copy_t", "_blank")}  

                className="w-full bg-gradient-faith hover:shadow-glow transition-smooth text-lg py-6"
              >
                <Crown className="h-5 w-5 mr-2" />
                Become a NLP Coach Ambassador

              </Button>
              <Button
                type="button"
                onClick={() => window.open("https://chat.whatsapp.com/BzT3qWTc83cIs36Iksr2zG?mode=ems_copy_t", "_blank")}
                className=" mt-4 w-full bg-gradient-connection hover:shadow-glow transition-smooth text-lg py-6"
              >
                <Crown className="h-5 w-5 mr-2" />
               Become a NLP Social Media Ambassador

              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Ambassador Impact */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Make a Lasting Impact</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                As an NLP 2026 Ambassador, you'll help bring hope, healing, and divine connections to thousands across Nigeria and beyond.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-faith">50+</div>
                  <div className="text-xs text-muted-foreground">Ambassador Spots</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-love">5,000+</div>
                  <div className="text-xs text-muted-foreground">Expected Attendees</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-connection">12</div>
                  <div className="text-xs text-muted-foreground">Month Commitment</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center text-sm text-muted-foreground">
           {/* Merchandise Card */}
      <div className="flex justify-center mt-8">
        <a
          href="https://www.nlpconference.uk/blank-1"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 hover:shadow-2xl transition-shadow cursor-pointer max-w-md">
            <div className="flex gap-4">
              <img src={merch1} alt="Merch 1" className="w-32 h-32 object-cover rounded-lg border" />
              <img src={merch2} alt="Merch 2" className="w-32 h-32 object-cover rounded-lg border" />
            </div>
            <div className="mt-4 text-xl font-bold text-blue-700">Buy Merchandise</div>
          </div>
        </a>
      </div>
          </div>
      </div>

     
    </section>
  );
};

export default AmbassadorRecruitment;