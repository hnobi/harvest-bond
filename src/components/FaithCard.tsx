import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, Send, Sparkles } from "lucide-react";

const FaithCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    expectations: [] as string[],
    other: "",
    faithDeclaration: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const expectationOptions = [
    "Marital settlement",
    "Guidance & Clarity", 
    "Peace & healing from the past",
    "Spiritual Growth",
    "Other"
  ];

  const handleExpectationChange = (expectation: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      expectations: checked 
        ? [...prev.expectations, expectation]
        : prev.expectations.filter(e => e !== expectation)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.location.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and location are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Open Google Form in new tab
    window.open('https://forms.gle/ojD3cUQXvPUndpA39', '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        location: "",
        expectations: [],
        other: "",
        faithDeclaration: ""
      });
      
      toast({
        title: "Faith Card Submitted! 🙏",
        description: "Your faith declaration has been received. Pastor will pray over this today.",
      });
    }, 1500);
  };

  return (
    <section id="faith-card" className="pt-20 bg-gradient-to-br from-background to-faith/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-faith/10 text-faith px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            <span>Faith Activation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Submit Your <span className="bg-gradient-faith bg-clip-text text-transparent">Faith Card</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Declare what you're believing God for as a single person preparing for purpose and potential partnership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Heart className="h-6 w-6 text-primary" />
                  <span>Submit Your Faith Card</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  type="button"
                  onClick={() => window.open('https://forms.gle/ojD3cUQXvPUndpA39', '_blank')}
                  className="w-full bg-gradient-hero hover:shadow-glow transition-smooth"
                >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Faith Card
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
              <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Live Faith Declarations</span>
              </h4>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/O5jkz1sPEeI"
                  title="Live Faith Declarations"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Watch Single confession and  declaration from Pastor Bolaji
              </p>
            </div>
          </div>
        </div>

        {/* Prayer Promise */}
        <div className="mt-8 text-center">
          <Card className="max-w-2xl mx-auto bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Prayer Promise</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Every faith card submitted will be specifically prayed over during today's service. Pastor will lift your request before God, believing with you for breakthrough and divine intervention.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <blockquote className="text-center">
                  <p className="text-lg italic mb-2">
                    "Delight yourself in the Lord, and he will give you the desires of your heart."
                  </p>
                  <cite className="text-sm font-semibold text-primary">— Psalm 37:4</cite>
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FaithCard;