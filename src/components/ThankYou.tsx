import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, Users, MessageSquare, Gift, CheckCircle, Play } from "lucide-react";

const ThankYou = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Faith Activated",
      description: "Hundreds of faith cards submitted and prayed over",
      color: "faith"
    },
    {
      icon: Users,
      title: "Connections Made", 
      description: "New friendships and potential relationships formed",
      color: "connection"
    },
    {
      icon: MessageSquare,
      title: "Lives Touched",
      description: "Testimonies of hope restored and hearts healed",
      color: "love"
    },
    {
      icon: Gift,
      title: "Next Steps Taken",
      description: "People joining cells, ministry, and NLP 2026",
      color: "primary"
    }
  ];

  const upcomingActions = [
    {
      title: "Join a Cell",
      description: "Continue your growth journey in community",
      timeframe: "This Week"
    },
    {
      title: "Follow-up Call",
      description: "Our team will reach out within 48 hours",
      timeframe: "Next 2 Days"
    },
    {
      title: "NLP 2026 Updates",
      description: "Be first to know about next year's event",
      timeframe: "Monthly"
    }
  ];

  return (
    <section id="thank-you" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            <span>NLP 2025 Complete</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Thank You for <span className="bg-gradient-hero bg-clip-text text-transparent">Joining Us!</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            What an incredible day of transformation, connection, and faith! Your presence made NLP 2025 a powerful experience for everyone.
          </p>
        </div>

        {/* Event Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Today's Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className={`bg-card/50 backdrop-blur-sm border-${highlight.color}/20 text-center group hover:shadow-elegant transition-smooth`}>
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${highlight.color}/20 mb-4 group-hover:scale-110 transition-smooth`}>
                      <Icon className={`h-6 w-6 text-${highlight.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recap Video Section */}
        <div className="mb-16">
          <Card className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Event Recap Video</h3>
              <p className="text-muted-foreground mb-6">
                Relive the best moments from NLP 2025 - the worship, teachings, connections, and testimonies
              </p>
              
              {/* Video Placeholder */}
              <div className="relative bg-muted/20 rounded-lg overflow-hidden mb-6">
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/10 to-love/10">
                  <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-smooth">
                    <Play className="h-6 w-6 mr-2" />
                    Watch Recap Video
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-semibold text-primary">2,847</div>
                  <div className="text-muted-foreground">Attendees</div>
                </div>
                <div>
                  <div className="font-semibold text-love">1,200+</div>
                  <div className="text-muted-foreground">Faith Cards</div>
                </div>
                <div>
                  <div className="font-semibold text-connection">800+</div>
                  <div className="text-muted-foreground">Connections</div>
                </div>
                <div>
                  <div className="font-semibold text-faith">95%</div>
                  <div className="text-muted-foreground">Hope Renewed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Happens Next */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Happens Next?</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {upcomingActions.map((action, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{action.title}</h4>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {action.timeframe}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Call to Actions */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Continue Your Journey</h3>
              <p className="text-muted-foreground mb-6">
                Today was just the beginning. Take your next step in faith, fellowship, and purposeful relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-hero hover:shadow-glow transition-smooth"
                  onClick={() => document.getElementById('next-steps')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Explore Next Steps
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open("https://NLPLONDON2026.eventbrite.co.uk", "_blank")} 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Register for NLP 2026
                </Button>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">Remember:</strong> God's plan for your love story is still unfolding. 
                  Stay connected, keep believing, and watch Him work in your life and relationships.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;