import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Star, Gift } from "lucide-react";

interface FeedbackData {
  hopeRevived: string;
  madeConnection: string;
  sessionsRelatable: string;
  overallRating: string;
  highlight: string;
  doBetter?: string;
}

const FeedbackSurvey = () => {
  const [feedback, setFeedback] = useState<FeedbackData>({
    hopeRevived: "",
    madeConnection: "",
    sessionsRelatable: "",
    overallRating: "",
    highlight: "",
    doBetter: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!feedback.hopeRevived || !feedback.madeConnection || !feedback.overallRating) {
      toast({
        title: "Please Complete Survey",
        description: "Please answer all required questions to submit your feedback.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate submission
    setTimeout(() => {
      setIsLoading(false);
      setFeedback({
        hopeRevived: "",
        madeConnection: "",
        sessionsRelatable: "",
        overallRating: "",
        highlight: ""
      });
      console.log(feedback, 'Feedback submitted');
      
      toast({
        title: "Feedback Submitted! 🎉",
        description: "Thank you for your valuable feedback! You've been entered into our raffle draw.",
      });

      // Scroll to next steps
      document.getElementById('next-steps')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  const updateFeedback = (field: keyof FeedbackData, value: string) => {
    setFeedback(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="feedback" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="h-4 w-4" />
            <span>Your Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Share Your <span className="bg-gradient-hero bg-clip-text text-transparent">Feedback</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us improve future events and get entered into our raffle draw for amazing prizes!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                <Gift className="h-6 w-6 text-primary" />
                <span>Feedback Survey</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Complete the survey to enter our raffle draw
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Question 1 */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    1. Did this event revive your hope for marriage? *
                  </Label>
                  <RadioGroup
                    value={feedback.hopeRevived}
                    onValueChange={(value) => updateFeedback('hopeRevived', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="hope-yes" />
                      <Label htmlFor="hope-yes">Yes, absolutely!</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partially" id="hope-partial" />
                      <Label htmlFor="hope-partial">Partially</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="hope-no" />
                      <Label htmlFor="hope-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Question 2 */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    2. Did you make a new connection today? *
                  </Label>
                  <RadioGroup
                    value={feedback.madeConnection}
                    onValueChange={(value) => updateFeedback('madeConnection', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="connection-yes" />
                      <Label htmlFor="connection-yes">Yes, I met great people!</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="connection-no" />
                      <Label htmlFor="connection-no">No, but I'm open to it</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Question 3 */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    3. How relatable were the sessions? (1-5)
                  </Label>
                  <RadioGroup
                    value={feedback.sessionsRelatable}
                    onValueChange={(value) => updateFeedback('sessionsRelatable', value)}
                  >
                    <div className="flex flex-wrap gap-4">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <RadioGroupItem value={rating.toString()} id={`relatable-${rating}`} />
                          <Label htmlFor={`relatable-${rating}`} className="flex items-center space-x-1">
                            <span>{rating}</span>
                            <Star className="h-4 w-4 text-primary" />
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Question 4 */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    4. Overall event rating *
                  </Label>
                  <RadioGroup
                    value={feedback.overallRating}
                    onValueChange={(value) => updateFeedback('overallRating', value)}
                  >
                    <div className="flex flex-wrap gap-4">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <RadioGroupItem value={rating.toString()} id={`overall-${rating}`} />
                          <Label htmlFor={`overall-${rating}`} className="flex items-center space-x-1">
                            <span>{rating}</span>
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Question 5 */}
                <div className="space-y-4">
                  <Label htmlFor="highlight" className="text-lg font-semibold">
                    5. Share one highlight from today
                  </Label>
                  <Textarea
                    id="highlight"
                    value={feedback.highlight}
                    onChange={(e) => updateFeedback('highlight', e.target.value)}
                    placeholder="What was the most meaningful moment, lesson, or connection you experienced today?"
                    className="min-h-[100px] bg-background/50 border-primary/20 focus:border-primary resize-none"
                    maxLength={300}
                  />
                  <div className="text-sm text-muted-foreground text-right">
                    {feedback.highlight.length}/300 characters
                  </div>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="highlight" className="text-lg font-semibold">
                    6. What can we do better next time?
                  </Label>
                  <Textarea
                    id="highlight"
                    value={feedback.doBetter}
                    onChange={(e) => updateFeedback('doBetter', e.target.value)}
                    placeholder="What improvements or changes would enhance your experience at future events?"
                    className="min-h-[100px] bg-background/50 border-primary/20 focus:border-primary resize-none"
                    maxLength={300}
                  />
                  <div className="text-sm text-muted-foreground text-right">
                    {feedback.highlight.length}/300 characters
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-hero hover:shadow-glow transition-smooth text-lg py-6"
                  >
                    {isLoading ? "Submitting..." : "Submit Feedback & Enter Raffle"}
                  </Button>
                </div>
              </form>

              <div className="mt-8 p-6 bg-gradient-hero/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2 flex items-center space-x-2">
                  <Gift className="h-5 w-5" />
                  <span>Raffle Prizes</span>
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>🥇 Grand Prize: Free NLP 2026 VIP Experience</li>
                  <li>🎁 2nd Prize: Harvesters Couples Retreat Package</li>
                  <li>📚 3rd Prize: Christian Marriage Books Bundle</li>
                  <li>🎵 Consolation: Exclusive NLP 2025 Playlist & Resources</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">
                  Winners will be announced within 7 days via email and social media
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSurvey;