import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import "react-datepicker/dist/react-datepicker.css";

const CreateEvents = () => {
  const { user } = useContext(AuthContext);
  const [eventDate, setEventDate] = useState(null);
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      title: e.target.title.value,
      description: e.target.description.value,
      eventType: e.target.eventType.value,
      thumbnailUrl: e.target.thumbnailUrl.value,
      location: e.target.location.value,
      eventDate: e.target.eventDate.value,
      created_by: user.email,
    };

    fetch("https://social-event-server-zeta.vercel.app/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Event created successfully 🎉");
        navigation("/upcoming-events");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to create event. Please try again.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
        Create New Event
      </h2>

      {/* Title */}
      <label className="block mb-2 font-medium">Event Title</label>
      <input
        name="title"
        type="text"
        placeholder="Enter event title"
        className="w-full mb-6 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />

      {/* Description */}
      <label className="block mb-2 font-medium">Event Description</label>
      <textarea
        name="description"
        placeholder="Describe your event..."
        className="w-full mb-6 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
        rows={4}
        required
      />

      {/* Event Type Dropdown */}
      <label className="block mb-2 font-medium">Event Type</label>
      <select
        name="eventType"
        className="w-full mb-6 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
        required
      >
        <option value="">Select Event Type</option>
        <option value="Cleanup">Cleanup</option>
        <option value="Plantation">Plantation</option>
        <option value="Donation">Donation</option>
      </select>

      {/* Thumbnail Image URL */}
      <label className="block mb-2 font-medium">Thumbnail Image URL</label>
      <input
        name="thumbnailUrl"
        type="url"
        placeholder="Paste image URL"
        className="w-full mb-6 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />

      {/* Location */}
      <label className="block mb-2 font-medium">Event Location</label>
      <input
        name="location"
        type="text"
        placeholder="Enter event location"
        className="w-full mb-6 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />

      {/* Event Date */}
      <label className="block mb-2 font-medium">Event Date</label>
      <DatePicker
        name="eventDate"
        selected={eventDate}
        onChange={(date) => setEventDate(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a future date"
        className="w-full mb-6 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
        minDate={new Date()} // restrict to future dates only
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        🚀 Create Event
      </button>
    </form>
  );
};

export default CreateEvents;
