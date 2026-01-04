import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import EventCard from "../components/EventCard";

const JoinedEvent = () => {
  const { user } = use(AuthContext);
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch(
      `https://social-event-server-zeta.vercel.app/joined-events?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvent(data);
      });
  }, []);
  return (
    <div>
      {event.map((event) => (
        <EventCard key={event._id} event={event}></EventCard>
      ))}
    </div>
  );
};

export default JoinedEvent;
