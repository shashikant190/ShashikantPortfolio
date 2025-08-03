import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/12 w-8 h-8 bg-gradient-to-r from-maroon-500/20 to-maroon-700/20 rounded transform rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-1/12 w-6 h-6 bg-gradient-to-r from-maroon-600/15 to-maroon-800/15 rounded-full animate-float-reverse"></div>
      <div className="absolute bottom-1/4 left-1/6 w-10 h-10 bg-gradient-to-r from-maroon-400/10 to-maroon-600/10 transform rotate-12 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/6 w-12 h-12 bg-gradient-to-r from-maroon-500/15 to-maroon-700/15 rounded transform rotate-45 animate-float"></div>
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-gradient-to-r from-maroon-600/20 to-maroon-800/20 rounded-full animate-bounce"></div>
      <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-gradient-to-r from-maroon-400/15 to-maroon-600/15 transform rotate-45 animate-float-reverse"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-maroon-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-maroon-600/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-maroon-400/3 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
    </div>
  );
};

export default FloatingShapes;