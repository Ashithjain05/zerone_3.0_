import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // image path
}

const EventCard = ({ id, title, subtitle, description, icon }: EventCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="
        group relative overflow-hidden
        bg-card/50 backdrop-blur-sm border-border/50
        hover:border-primary/50 transition-all duration-500
        hover:shadow-gold-glow animate-fade-in-up
        h-full flex flex-col
      "
    >
      {/* ⭐ Make overlay ignore mouse clicks */}
      <div
        className="
          absolute inset-0 bg-gradient-royal
          opacity-0 group-hover:opacity-10
          transition-opacity duration-500
          pointer-events-none
        "
      />

      <CardHeader>
        <div className="mb-4 flex justify-center">
          <img
            src={icon}
            alt={`${title} icon`}
            className="
              w-16 h-16 md:w-20 md:h-20
              object-contain
              transition-transform duration-500
              group-hover:scale-110
              drop-shadow-[0_0_12px_#ffcc00aa]
            "
          />
        </div>

        <CardTitle className="text-2xl font-cinzel text-gradient-royal group-hover:text-gradient-tech transition-all duration-500 text-center">
          {title}
        </CardTitle>

        <CardDescription className="text-primary/80 font-medium italic text-center">
          {subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col flex-1">
        <p className="text-muted-foreground mb-6 leading-relaxed text-center flex-1">
          {description}
        </p>

        <Button
          onClick={() => navigate(`/event/${id}`)}
          variant="outline"
          className="
            mt-auto w-full group/btn
            border-primary/30
            hover:bg-primary hover:text-primary-foreground
            transition-all duration-300
          "
        >
          <span className="font-cinzel">Enter The Trial</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
