import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FaithCard from "@/components/FaithCard";
import ConnectionCard from "@/components/ConnectionCard";
import FeedbackSurvey from "@/components/FeedbackSurvey";
import NextStepsHub from "@/components/NextStepsHub";
import ThankYou from "@/components/ThankYou";
import AmbassadorRecruitment from "@/components/AmbassadorRecruitment";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Testimonials />
      <FaithCard />
      <ConnectionCard />
      <FeedbackSurvey />
      <NextStepsHub />
      <AmbassadorRecruitment />
      <ThankYou />
    </div>
  );
};

export default Index;
