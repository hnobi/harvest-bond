import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Users,
  Briefcase,
  Calendar,
  Heart,
  ArrowRight,
  CheckCircle,
  Church,
  Handshake,
  Gift
} from "lucide-react";
import { url } from "inspector";

const NextStepsHub = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const { toast } = useToast();

  const nextSteps = [
    {
      id: "cell",
      title: "Join a NLP Small Group",
      description: "Connect with like-minded believers in your area for fellowship, growth, and accountability.",
      icon: Users,
      color: "connection",
      benefits: [
        "Monthly fellowship meetings",
        "Bible study & spiritual growth",
        "Community, Connections & Friendships",
        "Prayer support system",
        "Accountability Partners"
      ],
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdHfoZzmkW6eeD7WWYWTiK9fC7lwnd4Qw5VXLhipN71GWqgyw/viewform?embedded=true"
    },
    {
      id: "s",
      title: "Become a NLP Worker",
      description: "Use your gifts to serve in the NLP Community and make a lasting impact in God's kingdom. We are looking for individuals who can plan, cread program for NLP and are self-starter.",
      icon: Briefcase,
      color: "connection",
      benefits: [],
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdHfoZzmkW6eeD7WWYWTiK9fC7lwnd4Qw5VXLhipN71GWqgyw/viewform?embedded=true"
    },
    {
      id: "nlp2026",
      title: "Register for NLP conference 2026",
      description: "Be the first to secure your spot for next year's NLP Conference in London.",
      icon: Calendar,
      color: "love",
      benefits: [],
      url: "https://www.eventbrite.co.uk/e/next-level-prayer-nlp-conference-uk-europe-2026-tickets-1737173084459?aff=oddtdtcreator"
    },
    {
      id: "partner",
      title: "Become a NLP conference 2026 Partner",
      description: "Partner with us to sponsor and support future NLP Conferences and impact lives.",
      icon: Heart,
      color: "faith",
      benefits: [],
      url: "https://www.nlpconference.uk/gbppayments"
    }
  ];


  const openLink = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <section id="next-steps" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift className="h-4 w-4" />
            <span>Your Journey Continues</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What's <span className="bg-gradient-hero bg-clip-text text-transparent">Next?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't let today's experience end here. Take the next step in your journey of faith, growth, and meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {nextSteps.map((step) => {
            const Icon = step.icon;
            const colorClasses = {
              primary: "border-primary/30 hover:border-primary/50 bg-primary/5",
              connection: "border-connection/30 hover:border-connection/50 bg-connection/5",
              love: "border-love/30 hover:border-love/50 bg-love/5",
              faith: "border-faith/30 hover:border-faith/50 bg-faith/5"
            };
            return (
              <Card key={step.id} className={`${colorClasses[step.color as keyof typeof colorClasses]} backdrop-blur-sm transition-smooth group hover:shadow-elegant`}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <div className={`p-3 rounded-full bg-${step.color}/20`}>
                      <Icon className={`h-6 w-6 text-${step.color}`} />
                    </div>
                    <span>{step.title}</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {step.benefits.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center space-x-2">
                          <CheckCircle className={`h-4 w-4 text-${step.color}`} />
                          <span>Benefits</span>
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {step.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${step.color}`} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

          
                    <Button
                      onClick={() => openLink (step.url)}
                      className={`w-full bg-gradient-${step.color} hover:shadow-glow transition-smooth group-hover:scale-105`}
                    >
                      Sign Up Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Church className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Stay Connected</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Join our community of believers committed to purposeful relationships and spiritual growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                onClick={() => openLink("https://chat.whatsapp.com/Ki3bYH5mYk1d2FhM")}
                className="bg-gradient-hero hover:shadow-glow transition-smooth">
                  <Heart className="h-4 w-4 mr-2" />
                  Join WhatsApp Group
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NextStepsHub;