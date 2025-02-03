import React, { useEffect, useState } from "react";
import { Timer } from "lucide-react";
interface CountdownTimerProps {
  endTime: string;
}
export function CountdownTimer({
  endTime
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endTime) - +new Date();
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(difference / 1000 / 60 % 60);
        const seconds = Math.floor(difference / 1000 % 60);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("Ended");
      }
    };
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [endTime]);
  return <div className="flex items-center space-x-2 text-gray-600">
      <Timer className="h-4 w-4" />
      <span>{timeLeft}</span>
    </div>;
}