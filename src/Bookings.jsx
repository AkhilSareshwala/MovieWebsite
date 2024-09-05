import React, { useState, useEffect } from 'react';

const Booking = () => {
  const [slots, setSlots] = useState(Array.from({ length: 30 }, (_, i) => i + 1));
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const ticketPrice = 250;

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const generateDates = () => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      dates.push(currentDate);
    }
    return dates;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedSlots([]); // Clear selected slots when the date changes
  };

  const handleSlotClick = (slot) => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const isBooked = bookedSlots[formattedDate]?.includes(slot);

    if (isBooked) return;

    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter((s) => s !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const bookTickets = () => {
    if (selectedSlots.length === 0) {
      alert('Please select at least one slot.');
      return;
    }

    const formattedDate = selectedDate.toISOString().split('T')[0];
    setBookedSlots((prev) => ({
      ...prev,
      [formattedDate]: [...(prev[formattedDate] || []), ...selectedSlots],
    }));

    alert('Tickets booked successfully!');
    setSelectedSlots([]); // Clear selected slots after booking
  };

  const selectedDateStr = `${selectedDate.getDate()}/${
    selectedDate.getMonth() + 1
  }/${selectedDate.getFullYear()}`;
  const totalPrice = selectedSlots.length * ticketPrice;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white pt-20">
      <div className="container text-center bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="title text-2xl font-bold mb-5">Movie Theater - Ticket Booking</div>
        <div className="screen w-full h-8 bg-gray-500 rounded-md relative mb-5">
          <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 font-bold text-gray-300">
            SCREEN
          </span>
        </div>

        <div className="grid grid-cols-6 gap-3 mb-5">
          {slots.map((slot) => {
            const formattedDate = selectedDate.toISOString().split('T')[0];
            const isBooked = bookedSlots[formattedDate]?.includes(slot);
            return (
              <div
                key={slot}
                className={`slot w-12 h-12 flex items-center justify-center rounded cursor-pointer transition-all text-sm font-bold ${
                  isBooked
                    ? 'bg-gray-900 cursor-not-allowed text-gray-300'
                    : selectedSlots.includes(slot)
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-400 hover:bg-gray-600 text-black'
                }`}
                onClick={() => handleSlotClick(slot)}
              >
                {slot}
              </div>
            );
          })}
        </div>

        <div className="date-selector flex overflow-x-auto justify-between mb-5">
          {generateDates().map((date, index) => (
            <div
              key={index}
              className={`date-option p-2 rounded-md cursor-pointer transition-all ${
                date.toDateString() === selectedDate.toDateString()
                  ? 'bg-blue-500 text-white font-bold scale-105'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-white'
              }`}
              onClick={() => handleDateClick(date)}
            >
              {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} (${date.toLocaleDateString(
                'en-US',
                { weekday: 'short' }
              )})`}
            </div>
          ))}
        </div>

        <button
          className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-all mb-5"
          onClick={bookTickets}
        >
          Book Tickets
        </button>

        <div className="summary bg-black p-4 rounded-md text-lg">
          <div>Selected Date: {selectedDateStr}</div>
          <div>Selected Slots: {selectedSlots.join(', ') || 'None'}</div>
          <div>Total Price: ₹{totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
