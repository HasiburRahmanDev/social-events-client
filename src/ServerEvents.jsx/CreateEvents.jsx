import React, { useState } from "react";
import EventDate from "../components/EventDate";
import DatePicker from "react-datepicker";

const CreateEvents = () => {
  const [eventDate, setEventDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Event</h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Event Title"
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />

      {/* Description */}
      <textarea
        placeholder="Event Description"
        className="w-full mb-4 px-4 py-2 border rounded"
        rows={4}
        required
      />

      {/* Event Type Dropdown */}
      <select className="w-full mb-4 px-4 py-2 border rounded" required>
        <option value="">Select Event Type</option>
        <option value="Cleanup">Cleanup</option>
        <option value="Plantation">Plantation</option>
        <option value="Donation">Donation</option>
      </select>

      {/* Thumbnail Image URL */}
      <input
        type="url"
        placeholder="Thumbnail Image URL"
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Event Location"
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />

      {/* Event Date */}
      <label className="block mb-2 font-medium">Event Date</label>
      <DatePicker
        selected={eventDate}
        onChange={(date) => setEventDate(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a future date"
        className="w-full px-4 py-2 border rounded"
        minDate={new Date()} // restrict to future dates only
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Create Event
      </button>
    </form>
  );
};

export default CreateEvents;
