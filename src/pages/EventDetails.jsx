import React from "react";
import { NavLink, useLoaderData } from "react-router";
import { toast } from "react-toastify";

const EventDetails = () => {
  const data = useLoaderData();

  const event = data.result;

  const {
    title,
    description,
    eventType,
    thumbnailUrl,
    location,
    eventDate,
    _id,
  } = event;

  const handleJoin = (e) => {
    toast.success("Joined successfully");
  };
  return (
    <div className="my-12 flex justify-center items-center">
      <div className="max-w-lg bg-white rounded-lg shadow-md">
        {/* Thumbnail */}
        <img
          className="w-full h-48 object-cover"
          src={thumbnailUrl}
          alt={`${title} Thumbnail`}
        />

        {/* Content */}
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
          <p className="text-sm text-gray-600 mb-3">{description}</p>

          {/* Location */}
          <p className="text-gray-600 flex items-center mb-1">
            <svg
              className="w-5 h-5 text-blue-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 20s6-5.686 6-10A6 6 0 0 0 4 10c0 4.314 6 10 6 10zM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
            {location}
          </p>

          {/* Event Type */}
          <p className="text-gray-600 flex items-center mb-1">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 3a2 2 0 0 0-2 2v2h16V5a2 2 0 0 0-2-2H4zM18 9H2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            </svg>
            {eventType}
          </p>

          {/* Event Date */}
          <p className="text-gray-600 flex items-center mb-4">
            <svg
              className="w-5 h-5 text-red-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 2a1 1 0 0 0-1 1v1H3a2 2 0 0 0-2 2v1h18V6a2 2 0 0 0-2-2h-2V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1zM19 9H1v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9z" />
            </svg>
            {eventDate}
          </p>

          {/* Button */}

          <div className="flex justify-between gap-2">
            <button
              onClick={handleJoin}
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Join Event
            </button>
            <NavLink to={`/manage-events/${event._id}}`}>
              <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Update Event
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
