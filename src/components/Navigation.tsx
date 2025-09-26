import { useState } from "react";
import { Menu, X, Heart, Calendar, Users, MessageSquare, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import harvestersLogo from "@/assets/harvesters-logo2.png";
// Logo will be text-based

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: Heart },
    { href: "#testimonials", label: "Testimonials", icon: Calendar },
    { href: "#faith-card", label: "Faith Card", icon: Heart },
    { href: "#connections", label: "Connections", icon: Users },
    { href: "#feedback", label: "Feedback", icon: MessageSquare },
    { href: "#next-steps", label: "Next Steps", icon: Gift },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-white px-3 py-1 rounded">
              {/* <span className="text-black font-bold text-sm">HARVESTERS</span> */}
              <img src={harvestersLogo} alt="Harvest Bond Logo" className="h-8 w-auto" />
            </div>
            <div className="text-left">
              <div className="text-lg font-bold leading-tight">NLP Singles'</div>
              <div className="text-sm text-muted-foreground leading-tight">Conference</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;