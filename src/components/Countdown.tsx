// src/components/Countdown.tsx
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// 🎯 Event starts: 24 December 2025 at 8:00 AM IST
const targetDate = new Date("2025-12-24T08:00:00+05:30");

const getTimeLeft = (): TimeLeft => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days, key: "days", dance: true },
    { label: "Hours", value: timeLeft.hours, key: "hours" },
    { label: "Minutes", value: timeLeft.minutes, key: "minutes" },
    { label: "Seconds", value: timeLeft.seconds, key: "seconds" },
  ];

  return (
    <>
      {/* 📱 MOBILE: Days bubble bottom-left */}
      <div className="fixed bottom-4 left-4 z-50 md:hidden">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-primary/70 bg-background/80 shadow-gold-glow flex items-center justify-center animate-float-chip">
            <span className="text-sm font-semibold text-primary">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
          </div>
          <p className="text-[10px] mt-1 tracking-[0.18em] uppercase text-muted-foreground">
            Days
          </p>
        </div>
      </div>

      {/* 🖥 DESKTOP/TABLET: Countdown card bottom-left */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:block">
        <div className="w-[260px] bg-card/90 border border-primary/40 rounded-2xl px-3 py-3 shadow-gold-glow backdrop-blur-md">
          <p className="text-[9px] font-cinzel tracking-[0.2em] text-muted-foreground uppercase text-center mb-1">
            Empire Begins In
          </p>

          <div className="flex items-center justify-between gap-2">
            {items.map((item) => (
              <div key={item.key} className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center rounded-full border border-primary/60 bg-background/80 shadow-gold-glow w-10 h-10 ${
                    item.dance ? "animate-float-chip" : ""
                  }`}
                >
                  <span className="text-base font-semibold text-primary">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="mt-1 text-[8px] tracking-[0.18em] uppercase text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
