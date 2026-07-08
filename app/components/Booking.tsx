'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Check, Sparkles, ChevronLeft, ChevronRight, User, Mail, Phone, Building, Globe, MessageSquare } from 'lucide-react';
import { servicesData, bookingAvailableTimes } from '../data/content';

export default function Booking() {
  // Calendar state for July 2026 (based on current local time July 2026)
  const today = new Date('2026-07-08');
  const [currentMonth, setCurrentMonth] = useState(6); // 0-indexed, so 6 is July
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date('2026-07-09')); // default to tomorrow
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [selectedService, setSelectedService] = useState(servicesData[0].title);
  const [notes, setNotes] = useState('');

  // Booking Flow State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Month labels
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Days of week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Helper to get number of days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Helper to get first day of month index
  const getFirstDayIndex = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      return; // Can't go to past months
    }
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (dayNum: number) => {
    const clickedDate = new Date(currentYear, currentMonth, dayNum);
    // Disable past dates
    if (clickedDate < today && clickedDate.toDateString() !== today.toDateString()) {
      return;
    }
    // Disable Sundays (traditional luxury consultation off-days)
    if (clickedDate.getDay() === 0) {
      return;
    }
    setSelectedDate(clickedDate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please provide your name and email.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // Build the calendar day cells
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayIndex(currentYear, currentMonth);
  const calendarCells = [];

  // Padding cells for previous month empty slots
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push({ dayNum: 0, isEmpty: true });
  }

  // Active days cells
  for (let d = 1; d <= daysInMonth; d++) {
    const currentDateObj = new Date(currentYear, currentMonth, d);
    const isPast = currentDateObj < today && currentDateObj.toDateString() !== today.toDateString();
    const isSunday = currentDateObj.getDay() === 0;
    const isSelected = selectedDate ? selectedDate.toDateString() === currentDateObj.toDateString() : false;
    const isToday = today.toDateString() === currentDateObj.toDateString();

    calendarCells.push({
      dayNum: d,
      isEmpty: false,
      isPast,
      isSunday,
      isSelected,
      isToday,
      dateObj: currentDateObj
    });
  }

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Soft blue glowing element */}
      <div className="absolute top-10 right-10 h-[400px] w-[400px] rounded-full bg-sky-blue/20 liquid-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <CalendarIcon className="h-4 w-4 text-slate-blue" />
            <span className="text-xs uppercase tracking-[0.25em] text-slate-blue font-semibold">Scheduler</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-charcoal"
          >
            Book an <span className="italic font-normal text-slate-blue">Appointment</span>
          </motion.h2>
          <p className="max-w-md mx-auto mt-4 text-xs md:text-sm text-slate-blue font-medium uppercase tracking-widest">
            Select a convenient slot for your luxury audit
          </p>
          <div className="h-[1px] w-24 bg-slate-200 mx-auto mt-6" />
        </div>

        {/* Booking Interface Box */}
        <div className="mx-auto max-w-5xl rounded-[3rem] glass-card p-6 md:p-12 border border-slate-200/50 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* Column 1: Calendar & Time Selector (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div>
                    <h3 className="text-lg font-serif text-charcoal mb-4 flex items-center gap-2">
                      <span className="h-5 w-5 bg-sky-blue text-slate-blue rounded-full text-xs font-semibold flex items-center justify-center">1</span>
                      <span>Select Date & Time</span>
                    </h3>
                    
                    {/* Calendar Month Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <span className="font-serif text-sm font-semibold text-charcoal">
                        {months[currentMonth]} {currentYear}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="p-1.5 rounded-full hover:bg-slate-100 text-charcoal/70 hover:text-charcoal transition-colors disabled:opacity-30"
                          disabled={currentMonth === today.getMonth() && currentYear === today.getFullYear()}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="p-1.5 rounded-full hover:bg-slate-100 text-charcoal/70 hover:text-charcoal transition-colors"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Calendar Days Week Header */}
                    <div className="grid grid-cols-7 text-center mb-2">
                      {daysOfWeek.map((day) => (
                        <span key={day} className="text-[10px] uppercase font-semibold text-slate-blue tracking-wider py-1">
                          {day}
                        </span>
                      ))}
                    </div>

                    {/* Calendar Grid Cells */}
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {calendarCells.map((cell, idx) => {
                        if (cell.isEmpty) {
                          return <div key={`empty-${idx}`} />;
                        }
                        
                        // Style flags
                        let btnStyle = "text-xs font-medium py-2.5 rounded-xl transition-all duration-300 relative ";
                        
                        if (cell.isPast || cell.isSunday) {
                          btnStyle += "text-slate-300 cursor-not-allowed ";
                        } else {
                          btnStyle += "hover:bg-sky-blue text-charcoal cursor-pointer ";
                          
                          if (cell.isSelected) {
                            btnStyle += "bg-slate-blue text-white hover:bg-slate-blue shadow-md ";
                          } else if (cell.isToday) {
                            btnStyle += "bg-powder-blue/40 text-charcoal border border-slate-300/40 ";
                          }
                        }

                        return (
                          <button
                            key={`day-${cell.dayNum}`}
                            type="button"
                            disabled={cell.isPast || cell.isSunday}
                            onClick={() => handleDateClick(cell.dayNum)}
                            className={btnStyle}
                          >
                            <span>{cell.dayNum}</span>
                            {cell.isToday && !cell.isSelected && (
                              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-slate-blue" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time slots */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-blue mb-3 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>Available Time Slots</span>
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {bookingAvailableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`text-[10px] md:text-xs font-semibold py-2.5 rounded-xl border transition-all duration-300 ${
                            selectedTime === time
                              ? 'bg-charcoal text-white border-charcoal shadow-sm'
                              : 'bg-white/60 hover:bg-sky-blue text-charcoal border-slate-200/60'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mini summary info */}
                  {selectedDate && (
                    <div className="mt-4 p-4 rounded-2xl bg-sky-blue/30 border border-powder-blue/20 flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-widest text-slate-blue font-semibold">Selected Slot</span>
                      <span className="text-xs font-medium text-charcoal">
                        {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} at {selectedTime}
                      </span>
                    </div>
                  )}
                </div>

                {/* Column 2: Booking Details Intake Form (7 cols) */}
                <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col gap-6">
                  <h3 className="text-lg font-serif text-charcoal mb-2 flex items-center gap-2">
                    <span className="h-5 w-5 bg-sky-blue text-slate-blue rounded-full text-xs font-semibold flex items-center justify-center">2</span>
                    <span>Enter Personal Details</span>
                  </h3>

                  {/* Input Fields Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-slate-blue font-semibold flex items-center gap-1">
                        <User className="h-3 w-3" /> Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Natalia Silva"
                        className="rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-xs md:text-sm text-charcoal placeholder-slate-400 focus:border-slate-blue focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-slate-blue font-semibold flex items-center gap-1">
                        <Mail className="h-3 w-3" /> Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="natalia@advideragroup.com"
                        className="rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-xs md:text-sm text-charcoal placeholder-slate-400 focus:border-slate-blue focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-slate-blue font-semibold flex items-center gap-1">
                        <Phone className="h-3 w-3" /> Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 20 7946 0912"
                        className="rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-xs md:text-sm text-charcoal placeholder-slate-400 focus:border-slate-blue focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-[10px] uppercase tracking-widest text-slate-blue font-semibold flex items-center gap-1">
                        <Building className="h-3 w-3" /> Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="LVMH Group"
                        className="rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-xs md:text-sm text-charcoal placeholder-slate-400 focus:border-slate-blue focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="country" className="text-[10px] uppercase tracking-widest text-slate-blue font-semibold flex items-center gap-1">
                        <Globe className="h-3 w-3" /> Country
                      </label>
                      <input
                        id="country"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="United Kingdom"
                        className="rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-xs md:text-sm text-charcoal placeholder-slate-400 focus:border-slate-blue focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-[10px] uppercase tracking-widest text-slate-blue font-semibold flex items-center gap-1">
                        <Sparkles className="h-3 w-3 animate-spin" /> Service Selection
                      </label>
                      <select
                        id="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-xs md:text-sm text-charcoal focus:border-slate-blue focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        {servicesData.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title} ({service.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="notes" className="text-[10px] uppercase tracking-widest text-slate-blue font-semibold flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> Message / Notes
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Please share any topics you want to prioritize (vocal tone, editorial brand story, body language cues, or specific wardrobe concerns)..."
                      className="rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-xs md:text-sm text-charcoal placeholder-slate-400 focus:border-slate-blue focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-md hover:bg-slate-blue transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>Confirm Consultation Booking</span>
                      </>
                    )}
                  </button>

                  <span className="text-[10px] text-center text-slate-blue font-medium mt-1">
                    🔒 Secured calendar sync support for Google Calendar, Outlook, and Calendly.
                  </span>
                </form>
              </motion.div>
            ) : (
              // Premium Success Screen
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                {/* Animated checkmark circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  className="h-16 w-16 bg-sky-blue rounded-full border-2 border-slate-blue flex items-center justify-center mb-6 shadow-lg"
                >
                  <Check className="h-8 w-8 text-slate-blue stroke-[3px]" />
                </motion.div>

                {/* Subtitle */}
                <span className="text-xs uppercase tracking-[0.25em] text-slate-blue font-semibold mb-2">Consultation Confirmed</span>
                
                {/* Title */}
                <h3 className="text-3xl font-serif text-charcoal mb-4">
                  Welcome to your <span className="italic font-normal text-slate-blue">Luxury Journey</span>
                </h3>

                <p className="max-w-md text-sm text-charcoal/80 leading-relaxed font-sans mb-8">
                  Your appointment request has been synchronized with Natalia Silva's schedule. A personal calendar invite with video link options (Google Meet/Zoom) has been dispatched.
                </p>

                {/* Receipt Card */}
                <div className="w-full max-w-md bg-white/70 border border-slate-200/50 rounded-2xl p-6 text-left shadow-sm flex flex-col gap-4 font-sans text-xs md:text-sm text-charcoal mb-8">
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-blue font-semibold uppercase tracking-wider text-[10px]">Client</span>
                    <span className="font-semibold">{name}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-blue font-semibold uppercase tracking-wider text-[10px]">Email</span>
                    <span>{email}</span>
                  </div>
                  {company && (
                    <div className="flex justify-between border-b border-slate-100 pb-2.5">
                      <span className="text-slate-blue font-semibold uppercase tracking-wider text-[10px]">Company</span>
                      <span>{company}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-slate-blue font-semibold uppercase tracking-wider text-[10px]">Service Package</span>
                    <span className="font-medium text-slate-blue">{selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-blue font-semibold uppercase tracking-wider text-[10px]">Date & Time</span>
                    <span className="font-medium">
                      {selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at {selectedTime}
                    </span>
                  </div>
                </div>

                {/* Return Button */}
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setCompany('');
                    setCountry('');
                    setNotes('');
                  }}
                  className="rounded-full border border-slate-300 bg-white hover:bg-sky-blue px-8 py-3 text-xs font-semibold uppercase tracking-widest text-charcoal shadow-sm transition-all duration-300"
                >
                  Book Another Session
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
