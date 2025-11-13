import { useLoaderData } from "react-router";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../context/AuthContext";

const ManageEvents = () => {
  const data = useLoaderData();
  const event = data.result;
  console.log(event);
  const [eventDate, setEventDate] = useState(null);
  return (
    <form className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Update your Event</h2>

      {/* Title */}
      <input
        name="title"
        type="text"
        placeholder="Event Title"
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Event Description"
        className="w-full mb-4 px-4 py-2 border rounded"
        rows={4}
        required
      />

      {/* Event Type Dropdown */}
      <select
        name="eventType"
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      >
        <option value="">Select Event Type</option>
        <option value="Cleanup">Cleanup</option>
        <option value="Plantation">Plantation</option>
        <option value="Donation">Donation</option>
      </select>

      {/* Thumbnail Image URL */}
      <input
        name="thumbnailUrl"
        type="url"
        placeholder="Thumbnail Image URL"
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />

      {/* Location */}
      <input
        name="location"
        type="text"
        placeholder="Event Location"
        className="w-full mb-4 px-4 py-2 border rounded"
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

export default ManageEvents;
