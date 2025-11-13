import React, { useState } from "react";
import DatePicker from "react-datepicker";

const EventDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    />
  );
};

export default EventDate;
