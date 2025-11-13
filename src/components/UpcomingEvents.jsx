import React from "react";
import { useLoaderData } from "react-router";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-12">
      {data.map((event) => (
        <EventCard key={event._id} event={event}></EventCard>
      ))}
    </div>
  );
};

export default UpcomingEvents;
