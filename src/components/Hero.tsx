import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        
        heroRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(128,0,32,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(128,0,32,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          ref={heroRef}
          className="transition-transform duration-300 ease-out"
        >
          {/* Floating Icons */}
          <div className="absolute -top-20 -left-20 text-maroon-500 opacity-20 animate-bounce delay-100">
            <Code size={60} />
          </div>
          <div className="absolute -top-10 -right-20 text-maroon-500 opacity-20 animate-bounce delay-300">
            <Palette size={50} />
          </div>
          <div className="absolute top-20 -left-10 text-maroon-500 opacity-20 animate-bounce delay-500">
            <Zap size={40} />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-maroon-400 to-white bg-clip-text text-transparent animate-fade-in">
              Namaste, I&apos;m <span className="text-maroon-500">Shashikant Maurya</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              Software Developer | Entrepreneurial Program Facilitator
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
              I build interactive platforms using JavaScript, Next.js, Supabase, and Python. 
              Known for delivering high-performance code, managing deployments, and collaborating cross-functionally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
              <a 
                href="#projects"
                className="px-8 py-4 bg-maroon-600 hover:bg-maroon-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-maroon-500/25 text-center"
              >
                View My Work
              </a>
              <a 
                href="mailto:mshashikant3600@gmail.com"
                className="px-8 py-4 border-2 border-maroon-500 text-maroon-400 hover:bg-maroon-500 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-maroon-400" size={32} />
        </div>
      </div>

      {/* 3D Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-maroon-500 to-maroon-700 rounded-lg transform rotate-45 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-maroon-600 to-maroon-800 rounded-full animate-float-reverse"></div>
      <div className="absolute top-1/2 right-1/6 w-12 h-12 bg-gradient-to-r from-maroon-400 to-maroon-600 transform rotate-12 animate-pulse"></div>
    </section>
  );
};

export default Hero;