import React from 'react';

const ReservationSystem = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="absolute top-0 left-0 z-50 p-[20px] reservation-logo-mobile">
        <div 
          className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px] cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          <img 
            src="/assets/coco_logo.svg" 
            alt="COCO Tapas & Bar Logo"
            className="w-full h-full object-contain logo-white"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-auto py-8 md:h-64 reservation-hero-mobile" style={{ backgroundColor: '#004529' }}>
        <div className="absolute inset-0 opacity-90" style={{ background: 'linear-gradient(to right, #004529, #003d24)' }}></div>
        <div className="relative z-10 flex items-center justify-center px-4 h-full">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Reserve Your Table</h1>
            <div className="inline-block py-3 px-4 rounded-lg border-2 border-white animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
              <p className="text-sm md:text-xl text-white font-bold"><strong>Book now</strong> and enjoy our authentic Mediterranean tapas experience!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* TheFork Widget Section */}
      <div className="flex-grow px-4 py-10 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 pb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Make Your Reservation</h2>
              <p className="text-gray-600">Book your table easily through our reservation system</p>
            </div>
            
            {/* TheFork Widget */}
            <div className="w-full flex justify-center">
              <iframe 
                src="https://widget.thefork.com/435fc57f-ccd8-48cd-8e0a-bc92afde54ef"
                width="100%"
                height="800"
                frameBorder="0"
                scrolling="yes"
                className="rounded-lg min-h-[600px] md:min-h-[800px]"
                title="Restaurant Reservation Widget"
                style={{ minHeight: '600px' }}
              />
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