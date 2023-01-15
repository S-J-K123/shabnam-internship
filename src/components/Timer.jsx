import { useState, useRef, useEffect } from "react";

export default function Timer(props) {
  const [hours, setHours] = useState(60);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(60);

  const [loading, setLoading] = useState(true);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const currentDate = Date.now();

      const timeRemaining = props.expiryDate - currentDate;

      setHours(Math.max(Math.floor(timeRemaining / (1000 * 60 * 60)), 0));
      setMinutes(Math.max(Math.floor((timeRemaining / (1000 * 60)) % 60), 0));
      setSeconds(Math.max(Math.floor((timeRemaining / 1000) % 60), 0));
      
      setLoading(false);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(intervalRef.current);
    }
  }, [hours, minutes, seconds]);

  if (loading) return <></>;

  return (
    <div>
      {hours}h {minutes}m {seconds}s
    </div>
  );
}
