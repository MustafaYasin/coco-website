import React, { useState, useEffect } from 'react';

const ReservationSystem = () => {
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isEarlyDiscount, setIsEarlyDiscount] = useState(false);
  const [isDisabledDay, setIsDisabledDay] = useState(false);
  
  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00', '21:30',
    '22:00', '22:30'
  ];

  // Format time for display
  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const timeString = `${hours}:${minutes}`;
    // Add discount indicator for early times
    if (time === '18:00' || time === '18:30') {
      return `${timeString} -15%`;
    }
    return timeString;
  };
  
  // Check if selected time qualifies for discount
  useEffect(() => {
    if (time) {
      const hour = parseInt(time.split(':')[0]);
      setIsEarlyDiscount(hour < 19);
    }
  }, [time]);
  
  // Check if selected date is disabled on component mount and date change
  useEffect(() => {
    if (date) {
      const selectedDate = new Date(date);
      const dayOfWeek = selectedDate.getDay();
      const isDisabled = dayOfWeek === 0 || dayOfWeek === 1; // Sunday or Monday
      setIsDisabledDay(isDisabled);
      if (isDisabled) {
        setTime('');
      }
    }
  }, [date]);
  
  // Initial check for today's date
  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 1) {
      setIsDisabledDay(true);
    }
  }, []);
  
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    
    // Check if selected date is a Sunday or Monday
    const dayOfWeek = new Date(selectedDate).getDay();
    if (dayOfWeek === 0 || dayOfWeek === 1) {
      setIsDisabledDay(true);
      setTime('');
    } else {
      setIsDisabledDay(false);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the data to your backend
    console.log({ date, time, firstName, lastName, email, phone, notes, isEarlyDiscount });
    setShowConfirmation(true);
  };
  
  if (showConfirmation) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full" style={{ backgroundColor: '#e6f3e6' }}>
              <span className="text-2xl" style={{ color: '#004529' }}>✓</span>
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">Reservation Confirmed!</h2>
            <p className="mb-6 text-gray-600">
              Thank you {firstName} for your reservation on {date} at {time && formatTime(time)}.
              {isEarlyDiscount && (
                <span className="block mt-2 font-medium" style={{ color: '#004529' }}>
                  You'll receive 15% off all dishes!
                </span>
              )}
              We've sent a confirmation to {email}.
            </p>
            <button 
              onClick={() => setShowConfirmation(false)}
              className="px-6 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ 
                backgroundColor: '#004529',
                '--tw-ring-color': '#004529'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#003d24'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#004529'}
            >
              New Reservation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-auto py-8 md:h-64" style={{ backgroundColor: '#004529' }}>
        <div className="absolute inset-0 opacity-90" style={{ background: 'linear-gradient(to right, #004529, #003d24)' }}></div>
        <div className="relative z-10 flex items-center justify-center px-4 h-full">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Reserve Your Table</h1>
            <div className="inline-block py-3 px-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg border-2 border-white animate-pulse">
              <p className="text-sm md:text-xl text-white font-bold"><strong>Special Offer:</strong> Get 15% off all dishes with reservations before 6:30 PM!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reservation Form */}
      <div className="flex-grow px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Calendar Section */}
            <div className="w-full md:w-2/5 p-6 bg-gradient-to-b from-gray-50 to-white">
              <div className="mb-6">
                <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                  <span className="mr-2 text-xl" style={{ color: '#004529' }}>📅</span> 
                  Select Date
                </h2>
                
                {isDisabledDay && (
                  <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-400 rounded-md">
                    <div className="flex">
                      <span className="text-red-400 mr-2">⚠️</span>
                      <p className="text-sm text-red-500">
                        We are closed on Sundays and Mondays.
                      </p>
                    </div>
                  </div>
                )}
                
                <input 
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full p-3 border ${isDisabledDay ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:border-current`}
                  style={{ 
                    '--tw-ring-color': '#004529',
                    'focusBorderColor': '#004529'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#004529'}
                  onBlur={(e) => e.target.style.borderColor = isDisabledDay ? '#fca5a5' : '#d1d5db'}
                  required
                />
              </div>
              
              <div>
                <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                  <span className="mr-2 text-xl" style={{ color: '#004529' }}>🕐</span> 
                  Available Times
                </h2>
                
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      disabled={isDisabledDay}
                      className={`p-3 text-xs md:text-sm rounded-md transition-colors focus:outline-none relative border-2
                        ${time === slot 
                          ? 'text-white' 
                          : (slot === '18:00' || slot === '18:30' 
                              ? 'bg-white text-gray-700 hover:bg-gray-50 font-medium' 
                              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50')
                        }`}
                      style={{
                        backgroundColor: time === slot ? '#004529' : (slot === '18:00' || slot === '18:30' ? 'white' : 'white'),
                        borderColor: time === slot ? '#004529' : (slot === '18:00' || slot === '18:30' ? '#004529' : '#d1d5db'),
                        color: time === slot ? 'white' : '#374151'
                      }}
                      onMouseEnter={(e) => {
                        if (time !== slot && !isDisabledDay) {
                          e.target.style.backgroundColor = '#f9fafb';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (time !== slot) {
                          e.target.style.backgroundColor = 'white';
                        }
                      }}
                    >
                      {formatTime(slot)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="w-full md:w-3/5 p-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <span className="mr-1 text-lg" style={{ color: '#004529' }}>👤</span> 
                      First Name
                    </label>
                    <input 
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2"
                      style={{ '--tw-ring-color': '#004529' }}
                      onFocus={(e) => e.target.style.borderColor = '#004529'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <span className="mr-1 text-lg" style={{ color: '#004529' }}>👤</span> 
                      Last Name
                    </label>
                    <input 
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2"
                      style={{ '--tw-ring-color': '#004529' }}
                      onFocus={(e) => e.target.style.borderColor = '#004529'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <span className="mr-1 text-lg" style={{ color: '#004529' }}>📧</span> 
                      Email Address
                    </label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2"
                      style={{ '--tw-ring-color': '#004529' }}
                      onFocus={(e) => e.target.style.borderColor = '#004529'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <span className="mr-1 text-lg" style={{ color: '#004529' }}>📞</span> 
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2"
                      style={{ '--tw-ring-color': '#004529' }}
                      onFocus={(e) => e.target.style.borderColor = '#004529'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <span className="mr-1 text-lg" style={{ color: '#004529' }}>📝</span> 
                    Special Requests
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-2"
                    style={{ '--tw-ring-color': '#004529' }}
                    onFocus={(e) => e.target.style.borderColor = '#004529'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    placeholder="Special occasions or dietary requirements?"
                  ></textarea>
                </div>
                
                {isEarlyDiscount && time && (
                  <div className="mb-6 p-3 rounded-lg border-2" style={{ backgroundColor: '#f0f8f0', borderColor: '#004529' }}>
                    <p className="font-medium" style={{ color: '#004529' }}>
                      You'll receive 15% off all dishes with your reservation at {formatTime(time)}!
                    </p>
                  </div>
                )}
                
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    disabled={!date || !time || !firstName || !lastName || !email || !phone || isDisabledDay}
                    className={`px-6 py-3 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2
                      ${(!date || !time || !firstName || !lastName || !email || !phone || isDisabledDay)
                        ? 'bg-gray-300 cursor-not-allowed'
                        : ''
                      }`}
                    style={{
                      backgroundColor: (!date || !time || !firstName || !lastName || !email || !phone || isDisabledDay) ? '#d1d5db' : '#004529',
                      '--tw-ring-color': '#004529'
                    }}
                    onMouseEnter={(e) => {
                      if (!e.target.disabled) {
                        e.target.style.backgroundColor = '#003d24';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!e.target.disabled) {
                        e.target.style.backgroundColor = '#004529';
                      }
                    }}
                  >
                    Complete Reservation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="py-4 text-white text-center" style={{ backgroundColor: '#004529' }}>
        <p>© 2025 COCO Tapas & Bar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ReservationSystem;