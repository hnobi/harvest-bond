import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Users, X, UserPlus } from "lucide-react";

interface Connection {
  name: string;
  identifier: string;
}


const ConnectionCard = () => {
  const [connections, setConnections] = useState<Connection[]>([
    { name: "", identifier: "" },
    { name: "", identifier: "" },
    { name: "", identifier: "" }
  ]);
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const updateConnection = (index: number, field: 'name' | 'identifier', value: string) => {
    const updated = connections.map((conn, i) => 
      i === index ? { ...conn, [field]: value } : conn
    );
    setConnections(updated);
  };


  // Remove addConnection logic (no longer needed)

  const removeConnection = (index: number) => {
    if (connections.length > 1) {
      setConnections(connections.filter((_, i) => i !== index));
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();
    console.log("Form submitted");

    const filledConnections = connections.filter(conn => conn.name.trim());
    if (filledConnections.length === 0) {
      toast({
        title: "No Connections Added",
        description: "Please add at least one connection to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    

    const data = {
      name: yourName,
      email: email,
      city: city,
      connections: filledConnections 
    }

    const url = `https://church-5h1t.onrender.com/connection`; 

    try {
      let res;
      
      try {
        res = await axios.post(url, data, {
          headers: { "Content-Type": "application/json" },
        });
      } catch (axiosErr) {
        if (axiosErr.response && axiosErr.response.data) {
          res = axiosErr.response.data;
          console.error("Axios error response:", res);
        } else {
          throw axiosErr;
        }
      }

      if (res.data.status === 'success') {
        setConnections([
          { name: "", identifier: "" },
          { name: "", identifier: "" },
          { name: "", identifier: "" }
        ]);
        setYourName("");
        setEmail("");
        setCity("");

        toast({
          title: "Connections Recorded! 🤝",
          description: "We have received your connections. We'll follow up in 1 months to see how your relationships are developing.",
           variant: "success",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: res?.error || `There was a problem saving your connections.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Fetch or logic error:", error);
      toast({
        title: "Submission Failed",
        description: "There was a problem saving your connections. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
};

  return (
    <section id="connections" className="py-20 bg-gradient-to-br from-background to-connection/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-connection/10 text-connection px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Made Connections? We want to check-in and keep you accountable and Pray with you..</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Track Your <span className="bg-gradient-connection bg-clip-text text-transparent">Connections</span>
          </h2>
            <p className="text-muted-foreground mb-6">
              Did you meet someone special today? Track your new connections and see where they lead! We'll follow up with you monthly to see how your connections are progressing - whether you're married, engaged, friends or in a relationship.
            </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-connection/20 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                <UserPlus className="h-6 w-6 text-connection" />
                <span>Connection Tracker</span>
              </CardTitle>
              <p className="text-muted-foreground">
                List 2-3 people you met today with a brief identifier
              </p>
            </CardHeader>
            <CardContent>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Info Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="yourName">Your Name</Label>
                    <Input
                      id="yourName"
                      value={yourName}
                      onChange={e => setYourName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="bg-background/50 border-connection/20 focus:border-connection"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="e.g. johndoe@email.com"
                      className="bg-background/50 border-connection/20 focus:border-connection"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      placeholder="e.g. Lagos"
                      className="bg-background/50 border-connection/20 focus:border-connection"
                      required
                    />
                  </div>
                </div>

                {/* Connections List */}
                <div className="space-y-4">
                  {connections.map((connection, index) => (
                    <div key={index} className="bg-background/30 p-4 rounded-lg border border-connection/10">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-connection">
                          Connection {index + 1}
                        </h4>
                        {connections.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeConnection(index)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid gap-3">
                        <div className="space-y-2">
                          <Label htmlFor={`name-${index}`}>Name</Label>
                          <Input
                            id={`name-${index}`}
                            value={connection.name}
                            onChange={(e) => updateConnection(index, 'name', e.target.value)}
                            placeholder="e.g. Sarah Johnson"
                            className="bg-background/50 border-connection/20 focus:border-connection"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`identifier-${index}`}>Brief Identifier</Label>
                          <Input
                            id={`identifier-${index}`}
                            value={connection.identifier}
                            onChange={(e) => updateConnection(index, 'identifier', e.target.value)}
                            placeholder="e.g. Lagos, Teacher, Blue dress, Pharmacy student"
                            className="bg-background/50 border-connection/20 focus:border-connection"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


                {/* Add Connection button removed: only 3 connections allowed */}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-connection hover:shadow-glow transition-smooth text-lg py-6"
                >
                  {isLoading ? "Recording..." : "Record Connections"}
                </Button>
              </form>

              <div className="mt-8 p-4 bg-connection/10 rounded-lg">
                <h4 className="font-semibold text-connection mb-2">💡 Connection Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Include city/location for easy identification</li>
                  <li>• Add profession, study field, or interests</li>
                  <li>• Note memorable conversation topics</li>
                  <li>• Remember where you met (session, break, activity)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Follow-up Information */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-card/30 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Connection Follow-Up</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our team will reach out to you in 3 months to check on your connections and see how your relationships are developing. We're invested in your journey to finding love and meaningful relationships!
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    Questions we'll ask: How are your connections going? Are you married, engaged, or in a relationship? How can we continue to support you?
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionCard;