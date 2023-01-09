import { useState, useRef, useEffect } from "react";

export default function Timer(props) {
  // store hours, minutes & seconds in their own state to keep track
  const [hours, setHours] = useState(60);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(60);

  // this loading state is to make sure we don't see (60,60,60) when our component is first rendered
  const [loading, setLoading] = useState(true);

  // this is where we store our timer -> this allows the timer to be consistent when our app re-renders
  const intervalRef = useRef(null);

  useEffect(() => {
    // getting the current date
    const currentDate = new Date();

    // currentDate = 03/01/23 -> 9:23AM

    // getting the minutes from now from the props
    let minutesFromNow = new Date(currentDate);
    minutesFromNow.setMinutes(currentDate.getMinutes() + props.minutesFromNow);

    // endDate = 03/01/23 -> 9:53AM

    // result -> you'll get a date to count DOWN to

    intervalRef.current = setInterval(() => {
      const timeRemaining = minutesFromNow - Date.now();
      setHours(Math.floor(timeRemaining / (1000 * 60 * 60)));
      setMinutes(Math.floor((timeRemaining / (1000 * 60)) % 60));
      setSeconds(Math.floor((timeRemaining / 1000) % 60));
      setLoading(false);
    }, 1000);
  }, []);

  // this part -> clears the interval when everything hits 0 -> this is to prevent timer from going into negatives
  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(intervalRef.current);
    }
  }, [hours, minutes, seconds]);

  if (loading) return <></>;

  return (
    <div>
      {hours}h:{minutes}m:{seconds}s
    </div>
  );
}
