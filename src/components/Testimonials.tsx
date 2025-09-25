import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
      {
        name: "Sarah M.",
        city: "London",
        text: "NLP Singles' Conference 2024 transformed my mindset about singleness. I learned to embrace this season while preparing for purpose. Met amazing friends who are now my accountability partners!",
        rating: 5,
        category: "Personal Growth"
      },
      {
        name: "David O.",
        city: "Manchester", 
        text: "I came feeling lonely and left feeling complete in Christ. The sessions on purpose and preparation were life-changing. Now I'm thriving in my singleness and serving in ministry!",
        rating: 5,
        category: "Purpose Discovery"
      },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Testimony
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from hundreds who found purpose, community, and joy in singleness through previous NLP Singles' Conferences
          </p>
        </div>

        {/* Scrollable testimonials container */}
        <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto pr-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-smooth group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="h-8 w-8 text-primary/40 group-hover:text-primary/60 transition-smooth" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.city}
                      </div>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.category}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-sm text-muted-foreground">Attendees (2024)</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-love mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Found Purpose</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-connection mb-2">300+</div>
            <div className="text-sm text-muted-foreground">New Friendships</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Renewed Joy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;