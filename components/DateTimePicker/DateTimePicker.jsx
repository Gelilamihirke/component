import React, { useEffect, useState, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaGlobeAmericas
} from "react-icons/fa";
import TimezoneList from "../../components/TimezoneList/TimezoneList";

const DateTimePicker = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState({
    label: "East Africa Time",
    zone: "Africa/Nairobi"
  });
  const dropdownRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowTimezoneDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: selectedTimezone.zone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [selectedTimezone.zone]);

  
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 8; 
    const endHour = 20;  
    
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    
    return slots;
  };

  const timeSlots = generateTimeSlots();

  
  const formatTimeSlot = (time) => {
    if (!selectedDate) return time;
    
    const [hours, minutes] = time.split(':').map(Number);
    const dateWithTime = new Date(selectedDate);
    dateWithTime.setHours(hours, minutes, 0, 0);
    
    return dateWithTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: selectedTimezone.zone
    });
  };

  const getMonthDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const startIndex = (firstDay + 6) % 7;
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    return { startIndex, totalDays };
  };

const renderCalendarDays = () => {
  const { startIndex, totalDays } = getMonthDays();
  const days = [];

  for (let i = 0; i < startIndex; i++) days.push(<div key={`empty-${i}`} />);

  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const isSelected = selectedDate?.toDateString() === date.toDateString();

    
    const isToday = date.toDateString() === today.toDateString();

    const classes = [
      "w-9 h-9 mx-auto flex items-center justify-center rounded-full text-sm font-semibold transition-colors",
      isSelected
        ? "bg-primary text-white cursor-default"
        : isToday
        ? "bg-secondary text-white font-bold"   
        : "text-slate-500 hover:bg-primary-20 hover:text-primary cursor-pointer",
    ].join(" ");

    days.push(
      <button
        key={day}
        type="button"
        className={classes}
        disabled={isSelected}
        onClick={() => setSelectedDate(date)}
      >
        {day}
      </button>
    );
  }
  return days;
};


  const formatSelectedDate = () => {
    if (!selectedDate) return "";
    
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: selectedTimezone.zone
    });
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
    setSelectedDate(null);
  };

  const handleTimezoneSelect = (timezone) => {
    setSelectedTimezone(timezone);
    setShowTimezoneDropdown(false);
  };

  return (
    <main className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-center font-semibold text-[20px] text-slate-900 mb-6">
        Select a Date & Time
      </h2>
      <section className="flex flex-col md:flex-row md:justify-center md:items-start gap-8">
        {/* Calendar Side */}
        <div className="flex flex-col gap-6 max-w-md w-full">
          <div className="flex justify-center items-center gap-12 text-slate-700 text-[16px] font-normal select-none">
            <button onClick={handlePrevMonth} aria-label="Previous month">
              <FaChevronLeft className="hover:text-slate-900 transition-colors" />
            </button>
            <div>
              {new Date(currentYear, currentMonth).toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </div>
            <button onClick={handleNextMonth} aria-label="Next month">
              <FaChevronRight className="hover:text-slate-900 transition-colors" />
            </button>
          </div>

          <div className="grid grid-cols-7 text-[12px] font-normal text-slate-700 select-none text-center">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 text-center text-[16px] text-slate-500 font-normal select-none">
            {renderCalendarDays()}
          </div>

          <div className="pt-6 text-sm font-semibold text-slate-700 select-none">
            Time zone
          </div>
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-2 text-slate-700 text-[14px] font-normal select-none cursor-pointer w-max"
              onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
            >
              <FaGlobeAmericas className="text-[14px]" />
              <span>
                {selectedTimezone.label} (<span>{currentTime}</span>)
              </span>
              <FaChevronDown className={`text-[16px] transition-transform ${showTimezoneDropdown ? "rotate-180" : ""}`} />
            </div>
            
            {showTimezoneDropdown && (
              <div className="absolute z-10 mt-2 w-64 max-h-96 overflow-y-auto scrollbar-hide bg-white rounded-md shadow-lg border border-slate-200">
                <div className="p-2">
                  <TimezoneList 
                    onSelect={handleTimezoneSelect}
                    currentZone={selectedTimezone.zone}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Time Slot Side */}
        {selectedDate && (
          <div className="flex flex-col gap-4 max-w-xs w-full">
            <div className="text-slate-900 font-semibold text-[14px] select-none mb-4 text-left">
              {formatSelectedDate()} ({selectedTimezone.label})
            </div>
            <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto scrollbar-hide pr-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className="border border-primary-20 rounded-md py-3 text-primary-80 font-extrabold hover:bg-primary-20 transition-colors"
                >
                  {formatTimeSlot(time)}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default DateTimePicker;