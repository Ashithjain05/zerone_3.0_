import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Trophy, Users, MapPin, IndianRupee } from "lucide-react";

// ⭐ Import ALL event icons
import brainIcon from "@/assets/event-icons/brain.png";
import crownIcon from "@/assets/event-icons/crown.png";
import cameraIcon from "@/assets/event-icons/camera.png";
import designIcon from "@/assets/event-icons/design.png";
import bgmiIcon from "@/assets/event-icons/bgmi.png";
import codingIcon from "@/assets/event-icons/coding.png";
import treasureIcon from "@/assets/event-icons/treasure.png";
import micIcon from "@/assets/event-icons/mic.png";

type Coordinator = {
  name: string;
  role?: string;
  contact?: string;
};

type EventDetailType = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  rounds: string[];
  prize: string;
  teamSize: string;
  duration: string;
  venue: string;
  registrationFee: string;
  coordinators: Coordinator[];
  registrationLink: string; // ⭐ NEW
};

const eventDetails: Record<string, EventDetailType> = {
  "brahmastra-quiz": {
    title: "Prajna-Pariksha - The Test of Wisdom",
    subtitle: "Battle of Supreme Knowledge",
    description:
      "Enter the ultimate knowledge warfare where your wisdom will be tested across three legendary rounds.",
    icon: brainIcon,
    rounds: [
      "Judges’ decision is final",
      "Rules will be disclosed on the spot",
      "Each round will have a fixed time limit",
      "Rounds will cover a wide range of topics specific to the IT Industry",
      "Participants must bring their own mobile devices and internet",
      "Malpractice will lead to immediate disqualification",
    ],
    prize: "Rs 4,500/-",
    teamSize: "2 members",
    duration: "2 hours",
    venue: "MCA Lecture Hall 1",
    registrationFee: "₹300 per team",
    coordinators: [
      { name: "LIKITHA P KUMAR", contact: "8660290349" },
      { name: "RAHUL H N", contact: "9632607249" },
    ],
    registrationLink: "https://forms.gle/bUCVxvref2boC9A48", // 🔗 replace
  },

  "raja-neeti": {
    title: "Raja Neeti Sabha",
    subtitle: "The Royal Court of Strategy",
    description: "Present your empire-building strategy before the Maha Mantri.",
    icon: crownIcon,
    rounds: [
      "Maximum 3 participants per college.",
      "Smartphones may be used only when instructed.",
      "Rules for each round will be announced on the spot.",
      "Malpractice will lead to immediate disqualification.",
      "Judges' decisions are final and binding.",
      "Participants must demonstrate problem-solving and decision-making skills.",
      "Professional behavior is expected throughout the event.",
    ],
    prize: "Rs 3,500/-",
    teamSize: "Individual ",
    duration: "3 hours",
    venue: "Media Center , SIT College",
    registrationFee: "₹200",
    coordinators: [
      { name: "MADHUMITHA S", contact: "9482139571" },
      { name: "JEEVAN G", contact: "9686585450" },
    ],
    registrationLink: "https://forms.gle/P5oBWUCExLHeJzV26",
  },

  drishti: {
    title: "Drishti: The Royal Lens",
    subtitle: "Capture the Empire - Photography",
    description:
      "Capture royal architecture, warrior emotions, and fusion of tradition with technology.",
    icon: cameraIcon,
    rounds: [
      "Maximum 3 participants per college.",
      "Participants must assemble 30 minutes before the event to receive instructions.",
      "All editing must be done in front of volunteers in the designated area.",
      "Malpractice (taking help from others) will result in immediate elimination.",
      "Edited photos and videos must be submitted within the given time.",
      "No additional people other than participants are allowed in the event area.",
      "Photography must be done using mobile phones only. Cameras are not allowed.",
      "All submitted content must be original and free from copyright violations.",
    ],
    prize: "Rs 3,000/-",
    teamSize: "Individual ",
    duration: "4 hours",
    venue: "MCA Lecture Hall 2",
    registrationFee: "₹200 per participant",
    coordinators: [
      { name: "POOJA R", contact: "8296077558" },
      { name: "AKASH Y", contact: "6363614954" },
    ],
    registrationLink: "https://forms.gle/epPxvLoyprJUgSTP9",
  },

  "shilpa-shastra": {
    title: "Web Kala Vinyasa",
    subtitle: "Digital Architecture",
    description:
      "Architect digital empires with stunning UI/UX and chakra animations.",
    icon: designIcon,
    rounds: [
      "Maximum 2 teams per college.",
      "Cumulative scoring will decide the final result.",
      "Software allowed: Adobe Illustrator, Adobe Photoshop, Canva, Figma",
      "Some rounds will be based on HTML, CSS, and JavaScript.",
      "Participants may use any preferred code editor (e.g., VS Code, Sublime Text, etc.).",
      "Referring to external code is strictly not allowed.",
      "Participants must bring their own laptop, mobile phone, and chargers.",
      "The event schedule must be followed strictly.",
      "Install all required software before the event.",
    ],
    prize: "Rs 5,000/-",
    teamSize: "2 members",
    duration: "5 hours",
    venue: "MCA Project Lab",
    registrationFee: "₹300 per team",
    coordinators: [
      { name: "NUTHAN A M", contact: "9845541168" },
      { name: "HARSHITHA H", contact: "6363323303" },
    ],
    registrationLink: "https://forms.gle/fXEwhoJ5Vi9KzmYk9",
  },

  ranbhoomi: {
    title: "Chakravyuha Warzone",
    subtitle: "Ultimate Digital Battlefield",
    description: "Lead your Sena to victory in this epic BGMI tournament.",
    icon: bgmiIcon,
    rounds: [
      "Maximum 2 teams per college",
      "Participants must carry their valid ID proof for the event",
      "The squad must be physically present for the match",
      "The game will be played in custom rooms created by the host",
      "Rules for each round will be disclosed on the spot",
      "Exploiting bugs or glitches for unfair advantage will lead to disqualification",
      "Every round will have a fixed time duration",
      "Participants must carry their own mobile devices",
    ],
    prize: "Rs 7,000/-",
    teamSize: "4 members",
    duration: "6 hours",
    venue: "Media Center, SIT College",
    registrationFee: "₹400 per squad",
    coordinators: [
      { name: "ACHYUTH U S", contact: "9148686067" },
      { name: "BINDHU SREE K S", contact: "8904464903" },
    ],
    registrationLink: "https://forms.gle/9JCHBaA2XA3eFaA56",
  },

  "yantra-yoddha": {
    title: "Vedix-The battle of Code",
    subtitle: "Warriors of Logic",
    description: "Conquer coding challenges from Astra to Brahmastra difficulty.",
    icon: codingIcon,
    rounds: [
      "Maximum 3 participants from each college.",
      "Programming languages allowed: C, C++, Java, Python.",
      "Participants must report to the venue 30 minutes before the event to understand the rules for the respective rounds.",
      "Pen and paper will be provided if necessary.",
      "Personal gadgets are strictly prohibited; organizers will provide a PC for the event.",
      "Any malpractice will result in immediate disqualification of the participant.",
      "The verdict of the judges will be final and binding.",
      "Rules for each round will be disclosed on the spot.",
    ],
    prize: "Rs 4,000/-",
    teamSize: "Individual",
    duration: "3 hours",
    venue: "MCA LAB",
    registrationFee: "₹200 per participant",
    coordinators: [
      { name: "darshan Shankar Naik", contact: "9535598827" },
      { name: "Bindushree T R", contact: "8050020429" },
    ],
    registrationLink: "https://forms.gle/TywHnYHVPcm64Km28",
  },

  "gupta-rahasya": {
    title: "Garuda Anveshana",
    subtitle: "Hidden Secrets of the Empire",
    description: "Decode Sanskrit riddles and QR code puzzles to find the Rajya Ratna.",
    icon: treasureIcon,
    rounds: [
      "Maximum 2 teams per college",
      "Judges’ decision is final",
      "Rules will be disclosed on the spot",
      "Each round will have a fixed time limit",
      "Rounds will cover a wide range of topics specific to the IT Industry",
      "Participants must bring their own mobile devices and internet",
      "Malpractice will lead to immediate disqualification",
    ],
    prize: "Rs 7,000/-",
    teamSize: "4 members",
    duration: "4 hours",
    venue: "Entire Campus",
    registrationFee: "₹400 per team",
    coordinators: [
      { name: "Nithya Tejasvi", contact: "7899422270" },
      { name: "Shashi Raj", contact: "9900003586" },
    ],
    registrationLink: "https://forms.gle/RjjaRFRq6C4Ep29N8",
  },

  "vak-yuddha": {
    title: "Dhwani Yuddha ",
    subtitle: "Voice of the Empire - Tech Talk",
    description: "Speak before the burning throne with powerful oratory.",
    icon: micIcon,
    rounds: [
      "The competition will consist of 3 rounds",
      "There is no preparation time",
      "Use of offensive language or breaking any rule will lead to disqualification",
      "The judges’ decision is final and binding",
      "The event will test knowledge, creativity, and presentation skills",
      "In case of a tie, a tiebreaker round will be conducted",
    ],
    prize: "Rs 3,000/-",
    teamSize: "Individual",
    duration: "2 hours",
    venue: "MCA Seminar Hall",
    registrationFee: "₹200",
    coordinators: [
      { name: "Mohith K V", contact: "9353938681" },
      { name: "Snehashree N ", contact: "8088816630" },
    ],
    registrationLink: "https://forms.gle/jMp8dZsc9MMME4m27",
  },
};

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = id ? eventDetails[id] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-cinzel text-gradient-royal mb-4">
            Event Not Found
          </h1>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-cinzel">Back to Empire</span>
        </Button>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <img
              src={event.icon}
              alt={`${event.title} icon`}
              className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-[0_0_18px_#ffcc00aa]"
            />
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4 text-gradient-royal">
              {event.title}
            </h1>
            <p className="text-2xl text-primary font-medium italic">
              {event.subtitle}
            </p>
          </div>

          {/* Description */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 mb-8 animate-fade-in-up">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </CardContent>
          </Card>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Prize */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
              <CardHeader>
                <CardTitle className="font-cinzel text-primary flex items-center gap-2">
                  <Trophy className="h-5 w-5" /> Prize Pool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gradient-royal">
                  {event.prize}
                </p>
              </CardContent>
            </Card>

            {/* Team Size */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/30">
              <CardHeader>
                <CardTitle className="font-cinzel text-accent flex items-center gap-2">
                  <Users className="h-5 w-5" /> Team Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">{event.teamSize}</p>
              </CardContent>
            </Card>

            {/* Venue */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
              <CardHeader>
                <CardTitle className="font-cinzel text-primary flex items-center gap-2">
                  <MapPin className="h-5 w-5" /> Venue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">{event.venue}</p>
              </CardContent>
            </Card>

            {/* Registration Fee */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
              <CardHeader>
                <CardTitle className="font-cinzel text-primary flex items-center gap-2">
                  <IndianRupee className="h-5 w-5" /> Registration Fee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">
                  {event.registrationFee}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Rules / Rounds */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 mb-8">
            <CardHeader>
              <CardTitle className="font-cinzel text-gradient-tech text-2xl">
                Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {event.rounds.map((round, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="text-primary font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-lg text-foreground">{round}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Event Co-ordinators */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 mb-8">
            <CardHeader>
              <CardTitle className="font-cinzel text-gradient-royal text-2xl">
                Event Co-ordinators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {event.coordinators.map((coord, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-primary/30 bg-background/40"
                  >
                    <p className="text-lg font-cinzel text-primary">
                      {coord.name}
                    </p>
                    {coord.role && (
                      <p className="text-sm text-muted-foreground">
                        {coord.role}
                      </p>
                    )}
                    {coord.contact && (
                      <p className="text-sm text-accent mt-1">
                        {coord.contact}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Register Button */}
          <div className="text-center">
            <Button
              className="bg-primary text-primary-foreground font-cinzel text-lg px-12 py-6 shadow-gold-glow"
              onClick={() =>
                window.open(event.registrationLink, "_blank")
              }
            >
              Register for This Trial
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Registration now open
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
