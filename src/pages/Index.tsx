import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EventCard from "@/components/EventCard";
import Countdown from "@/components/Countdown";
import heroImage from "@/assets/hero-yuga.jpg";
import logo from "@/assets/logo.png";
import { Calendar, MapPin, Users, Youtube, Instagram } from "lucide-react";

// Event Icons
import brainIcon from "@/assets/event-icons/brain.png";
import crownIcon from "@/assets/event-icons/crown.png";
import cameraIcon from "@/assets/event-icons/camera.png";
import designIcon from "@/assets/event-icons/design.png";
import bgmiIcon from "@/assets/event-icons/bgmi.png";
import codingIcon from "@/assets/event-icons/coding.png";
import treasureIcon from "@/assets/event-icons/treasure.png";
import micIcon from "@/assets/event-icons/mic.png";
import swordImage from "@/assets/sword.png"; 
import oImage from "@/assets/shield.png";


const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".observe-animation").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const events = [
    {
      id: "brahmastra-quiz",
      title: "Prajna Pariksha - The Test of Wisdom",
      subtitle: "Battle of Supreme Knowledge",
      description:
        "Test your wisdom in this epic knowledge warfare across Agni, Vajra, and Chakra rounds.",
      icon: brainIcon,
    },
    {
      id: "raja-neeti",
      title: "Raja Neeti Sabha",
      subtitle: "The Royal Court of Strategy - IT Manager",
      description:
        "Pitch your empire-building ideas to the Maha Mantri and prove your strategic mastery.",
      icon: crownIcon,
    },
    {
      id: "drishti",
      title: "Drishti: The Royal Lens",
      subtitle: "Capture the Empire - photography",
      description:
        "Frame the glory of kingdoms through your lens in royal architecture and warrior emotions.",
      icon: cameraIcon,
    },
    {
      id: "shilpa-shastra",
      title: "Web Kala Vinyasa",
      subtitle: "Digital Architecture - Web & Poster Designing",
      description:
        "Design empire dashboards and war strategy portals with scroll-based layouts and chakra animations.",
      icon: designIcon,
    },
    {
      id: "ranbhoomi",
      title: "Chakravyuha Warzone",
      subtitle: "The Ultimate Digital Battlefield - BGMI",
      description:
        "Lead your Sena (Agni, Vayu, or Vajra) to victory in this epic BGMI warfare.",
      icon: bgmiIcon,
    },
    {
      id: "yantra-yoddha",
      title: "Vedix - The battle of Code",
      subtitle: "Warriors of Logic - Coding",
      description:
        "Conquer coding challenges from Astra to Brahmastra difficulty and claim your Yoddha ranking.",
      icon: codingIcon,
    },
    {
      id: "gupta-rahasya",
      title: "Garudha Anveshana",
      subtitle: "Hidden Secrets of Empire - Treasure Hunt ",
      description:
        "Decode Sanskrit riddles and ancient maps merged with QR codes to find the Rajya Ratna.",
      icon: treasureIcon,
    },
    {
      id: "vak-yuddha",
      title: "Dhwani Yuddha",
      subtitle: "Voice of the Empire - Tech Talk",
      description:
        "Speak before the burning throne and become the Samrat of Words through powerful oratory.",
      icon: micIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Countdown />

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          {/* ⭐ College + Dept Block (Logo centered, medium size) ⭐ */}
          <div className="mb-4 flex flex-col items-center gap-2 animate-fade-in-up">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
              <img
                src={logo}
                alt="SIT Logo"
                className="h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain"
              />

              <span
                className="
                  text-sm sm:text-base md:text-3xl lg:text-4xl
                  font-cinzel uppercase text-primary
                  tracking-[0.08em] md:tracking-[0.25em]
                  text-center whitespace-nowrap
                "
              >
                Siddaganga Institute of Technology
              </span>
            </div>

            {/* Department */}
            <p
              className="
                text-[11px] sm:text-sm md:text-3xl lg:text-2xl
                text-muted-foreground font-cinzel uppercase tracking-wide
              "
            >
              Department of MCA
            </p>

            {/* In Association With */}
            <p
              className="
                text-[10px] sm:text-xs md:text-base lg:text-lg
                text-muted-foreground font-cinzel uppercase tracking-wide
              "
            >
              In Association With
            </p>

            {/* PiedPipers */}
            <p
              className="
                text-xs sm:text-sm md:text-2xl lg:text-xl
                text-accent font-cinzel font-semibold uppercase
                tracking-[0.25em] text-center
              "
            >
              Students&apos; Coding Club PiedPipers
            </p>

            {/* Presents */}
            <p
              className="
                text-[10px] sm:text-xs md:text-base lg:text-lg
                text-muted-foreground font-cinzel uppercase tracking-wide
              "
            >
              Presents
            </p>
          </div>

          {/* ZERONE Heading */}
          <h1
          className="
            flex items-center justify-center
            text-7xl md:text-[10rem]
            font-neoneon neon-pink
            mb-6 animate-fade-in-up
            leading-none
          "
        >
        {/* Z Sword */}
        <img
        src={swordImage}
          alt="Z sword"
          className="
            h-[0.9em] w-auto object-contain 
            drop-shadow-[0_0_14px_#ffcc00aa]
            mr-4
            -translate-y-[0.10em]
            mr-[0.12em]

          "
        />


          {/* ER */}
          <span className="flex items-center leading-none">
            ER
          </span>

          <img
            src={oImage}
            alt="O shield"
            className="
              h-[0.9em] w-auto object-contain
              drop-shadow-[0_0_14px_#ffcc00aa]
              -translate-y-[0.10em]
              mx-[0.001em]
              mr-[0.1em]
              ml-[0.01em]


            "
              />



          {/* NE */}
          <span className="flex items-center leading-none ml-4">
            NE
          </span>
        </h1>




          {/* ⭐ YUGA + Tagline on two lines ⭐ */}
          <div
            className="flex flex-col items-center justify-center mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-4xl md:text-3xl font-cinzel text-sky tracking-wide">
              YUGA
            </h2>
            <p className="text-xl md:text-2xl font-cinzel text-primary/90 mt-2">
              The Age of Digital Empires
            </p>
          </div>

          {/* Buttons Row */}
          <div
            className="
              flex flex-col md:flex-row items-center justify-center
              gap-4 md:gap-8 animate-fade-in-up
            "
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-cinzel text-lg px-8 py-6 shadow-gold-glow animate-glow-pulse"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Enter The Empire
            </Button>

            <div className="flex flex-col items-center justify-center">
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1 animate-bounce">
                <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
              </div>
            </div>

            <a href="/Zerone_3.0 Brochure.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/70 text-primary hover:bg-primary/10 font-cinzel text-lg px-8 py-6"
              >
                Download Brochure
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section id="about" className="py-24 relative observe-animation">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6 text-gradient-royal">
              The Legend of YUGA
            </h2>
            <div className="h-1 w-32 bg-gradient-royal mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-cinzel text-primary mb-4">
                  Ancient Heritage Meets Modern Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In an age where ancient kingdoms wielded swords and strategy, we now
                  command code and circuits. YUGA represents the eternal cycle of
                  transformation - where royal battles become digital wars, Sanskrit
                  wisdom powers AI algorithms, and empire builders become tech founders.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This is not just a tech fest. This is a convergence of two powerful
                  worlds - the rich heritage of Indian civilization and the cutting-edge
                  future of technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-cinzel text-accent mb-4">
                  Your Journey Awaits
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Step into eight legendary trials where knowledge warriors compete,
                  strategists present empires, artists capture glory, coders conquer
                  logic, and speakers command attention.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every participant is a Yoddha. Every competition is a Yuddha. And every
                  winner earns the title of Samrat in their domain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ZERONE Details */}
      <section className="py-24 bg-gradient-to-b from-background to-card/30 observe-animation">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="neon-zerone text-6xl md:text-7xl font-cinzel font-black mb-6">
              ZERONE 2K25
            </h2>
            <p className="text-xl  font-cinzel text-muted-foreground">The Ultimate IT Festival</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 text-center hover:shadow-gold-glow transition-all duration-500">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-cinzel text-primary mb-2">When</h3>
                <p className="text-3xl font-bold text-foreground mb-2">December 24</p>
                <p className="text-sm text-muted-foreground">2025</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 text-center hover:shadow-empire-glow transition-all duration-500">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-cinzel text-accent mb-2">Where</h3>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Department of MCA
                </p>
                <p className="text-sm text-muted-foreground">
                  Siddaganga Institute of Technology, Tumkur
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-royal-bronze/30 text-center hover:shadow-gold-glow transition-all duration-500">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-royal-bronze mx-auto mb-4" />
                <h3 className="text-xl font-cinzel text-royal-bronze mb-2">Theme</h3>
                <p className="text-lg font-semibold text-foreground mb-2">YUGA</p>
                <p className="text-sm text-muted-foreground">
                  The Age of Digital Empires Era
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 observe-animation">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6 text-gradient-royal">
              The Eight Trials
            </h2>
            <p className="text-xl  font-cinzel text-muted-foreground max-w-2xl mx-auto">
              Choose your battlefield. Prove your mastery. 
            </p >
            <p className="text-xl  font-cinzel text-muted-foreground max-w-2xl mx-auto">
              Claim your throne.
            </p>
          </div>

          {/* 🔽 UPDATED GRID FOR EQUAL HEIGHT CARDS 🔽 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {events.map((event, index) => (
              <div
                key={event.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="h-full"
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
          {/* 🔼 UPDATED GRID FOR EQUAL HEIGHT CARDS 🔼 */}
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="py-24 bg-gradient-to-b from-background to-card/30 observe-animation">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6 text-gradient-tech">
              The Royal Council
            </h2>
            <p className="text-xl text-muted-foreground">Led by visionary strategists</p>
          </div>

          <div className="space-y-10 max-w-5xl mx-auto">
            {/* Top Row */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/30 text-center hover:shadow-gold-glow transition-all duration-500 animate-fade-in-up">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-cinzel text-primary mb-4 uppercase tracking-wide">
                    PATRON
                  </h3>
                  <p className="text-lg md:text-xl text-foreground mb-3">
                    Dr. Shivakumaraiah
                  </p>
                  <p className="text-sm md:text-base text-accent">
                    Joint Secretary &amp; CEO
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/30 text-center hover:shadow-gold-glow transition-all duration-500 animate-fade-in-up">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-cinzel text-primary mb-4 uppercase tracking-wide">
                    PRINCIPAL
                  </h3>
                  <p className="text-lg md:text-xl text-foreground mb-3">
                    Dr. S V Dinesh
                  </p>
                  <p className="text-sm md:text-base text-accent">
                    Principal, SIT, Tumkur
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/30 text-center hover:shadow-gold-glow transition-all duration-500 animate-fade-in-up">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-cinzel text-primary mb-4 uppercase tracking-wide">
                    PRESIDENT
                  </h3>
                  <p className="text-lg md:text-xl text-foreground mb-3">
                    Dr. Premasudha B G
                  </p>
                  <p className="text-sm md:text-base text-accent">Head of MCA</p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <Card className="w-full md:w-1/2 bg-card/50 backdrop-blur-sm border-primary/30 text-center hover:shadow-gold-glow transition-all duration-500 animate-fade-in-up">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-cinzel text-primary mb-4 uppercase tracking-wide">
                    FACULTY CO-ORDINATORS
                  </h3>
                  <div className="space-y-1">
                    <p className="text-lg md:text-xl text-foreground mb-3">
                      Dr. H S VijayaKumar
                    </p>
                    <p className="text-lg md:text-xl text-foreground mb-3">
                      Dr. Prashanth G K
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full md:w-1/2 bg-card/50 backdrop-blur-sm border-primary/30 text-center hover:shadow-gold-glow transition-all duration-500 animate-fade-in-up">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-cinzel text-primary mb-4 uppercase tracking-wide">
                    STUDENT CO-ORDINATORS
                  </h3>
                  <div className="space-y-1">
                    <p className="text-lg md:text-xl text-foreground mb-3">
                      Khushi Jagadeesh
                    </p>
                    <p className="text-lg md:text-xl text-foreground mb-3">Lingadevaru H P</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 observe-animation">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6 text-gradient-royal">
              Find The Empire
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  title="SIT Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.5213513246512!2d77.12619690247205!3d13.327219061512507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e826fb691ef%3A0xe78608813c36f380!2sSiddaganga%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1735488258469!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-gradient-to-b from-background to-card/30 observe-animation">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6 text-gradient-tech">
              Empire Supporters
            </h2>
            <p className="text-xl text-muted-foreground">
              Powered by visionary organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <Card
                key={i}
                className="bg-card/50 backdrop-blur-sm border-primary/30 hover:shadow-gold-glow transition-all duration-500 aspect-square flex items-center justify-center"
              >
                <CardContent className="p-8">
                  <div className="text-4xl text-muted-foreground">SPONSOR {i}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20 relative">
        <div className="container mx-auto px-4">
          {/* ⭐ Center Block */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h3 className="neon-zerone text-2xl font-cinzel mb-1">
                ZERONE 2K25
              </h3>
              <p className="text-sm text-muted-foreground leading-snug">
                <span className="block">YUGA</span>
                <span className="block">The Age of Digital Empires</span>
              </p>
            </div>

            {/* ⭐ Social Icons */}
            <div className="flex gap-6 justify-center">
              <a
                href="https://youtube.com/@zerone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-6 w-6" />
                <span className="text-sm">YouTube</span>
              </a>

              <a
                href="https://instagram.com/_zerone_3.0_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* ⭐ Bottom-Right Crafted Text */}
          <div className="absolute right-12 bottom-12 text-right">
            <p className="text-sm text-muted-foreground">Crafted ⚔️ by</p>
            <span className="neon-zerone font-cinzel text-lg">Ashith Jain</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
