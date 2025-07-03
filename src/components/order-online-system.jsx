import React, { useState } from 'react';

const OrderOnlineSystem = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/save-online-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setName('');
        setEmail('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // MODERN SUCCESS PAGE
  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #004529 0%, #45704c 100%)' }}>
        {/* Header with Logo */}
        <div className="absolute top-0 left-0 z-50 p-[20px]">
          <div 
            className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px] cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            <img 
              src="/assets/coco_logo.svg" 
              alt="COCO Tapas & Bar Logo"
              className="w-full h-full object-contain logo-black"
            />
          </div>
        </div>

        <div className="max-w-md mx-auto p-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e6f7e6' }}>
              <svg className="w-10 h-10" style={{ color: '#004529' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">You're All Set! 🎉</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We'll notify you the moment our online ordering goes live. Get ready for delicious tapas at your fingertips!
            </p>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full py-4 px-6 rounded-2xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#004529' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#003d24'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#004529'}
              >
                Back to Home
              </button>
              
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full py-4 px-6 rounded-2xl border-2 text-gray-700 font-semibold text-lg transition-all duration-300 hover:bg-gray-50"
                style={{ borderColor: '#004529' }}
              >
                Add Another Email
              </button>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                🔒 Your information is secure and will only be used for order notifications
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // MODERN MAIN PAGE
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Header with Logo */}
      <div className="absolute top-0 left-0 z-50 p-[20px]">
        <div 
          className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px] cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          <img 
            src="/assets/coco_logo.svg" 
            alt="COCO Tapas & Bar Logo"
            className="w-full h-full object-contain logo-black"
          />
        </div>
      </div>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#004529', color: 'white' }}>
              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#ffeb6c' }}></span>
              Coming Soon
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Order <span style={{ color: '#004529' }}>Online</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Skip the wait. Savor the taste. <br/>
              <span className="font-semibold">Your favorite tapas, delivered or ready for pickup.</span>
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border">
                <span className="text-2xl mr-2">🍽️</span>
                <span className="text-gray-700 font-medium">Fresh Tapas</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border">
                <span className="text-2xl mr-2">⚡</span>
                <span className="text-gray-700 font-medium">Quick Ordering</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border">
                <span className="text-2xl mr-2">🚚</span>
                <span className="text-gray-700 font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Be the First to Know! 
                </h2>
                <p className="text-gray-600">
                  Join our exclusive list and get early access when we launch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors text-lg"
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                    style={{ 
                      borderColor: name ? '#004529' : undefined,
                      transition: 'border-color 0.3s ease'
                    }}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors text-lg"
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                    style={{ 
                      borderColor: email ? '#004529' : undefined,
                      transition: 'border-color 0.3s ease'
                    }}
                  />
                </div>

                {/* Benefits Box */}
                <div className="p-6 rounded-2xl" style={{ backgroundColor: '#f0f8f0' }}>
                  <h3 className="font-semibold text-gray-900 mb-3">What you'll get:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>Early access to online ordering</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>Exclusive launch discounts</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>VIP customer status</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!name || !email || isSubmitting}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
                    (!name || !email || isSubmitting)
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'text-white hover:scale-105 hover:shadow-xl'
                  }`}
                  style={{
                    backgroundColor: (!name || !email || isSubmitting) ? undefined : '#004529'
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
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Saving...
                    </div>
                  ) : (
                    'Get Early Access 🚀'
                  )}
                </button>
              </form>

              {/* Privacy Note */}
              <p className="text-center text-sm text-gray-500 mt-6">
                🔒 We respect your privacy. No spam, just delicious updates.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Can't wait? Visit us in person!</p>
            <button 
              onClick={() => window.location.href = '/reservations'}
              className="inline-flex items-center px-6 py-3 rounded-2xl border-2 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#004529' }}
            >
              Make a Reservation Instead
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnlineSystem;