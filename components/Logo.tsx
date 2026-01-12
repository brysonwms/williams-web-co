
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl ${className}`}>
      <img 
        src="https://lh3.googleusercontent.com/pw/AP1GczONGBxDbwqljus42o6NFJ9hj3A3ipPR4OKx7Czw0XoAujbdn9KvuQMfRRYWhUnb7lKWZyZNDGw1hlLKWILA-Iq_M-cb1tMVp07w43dlHRBQKGQJ1aEFufQ8KobFB6oy7-KSsoGFNEY_wmvwIQuvBnFEIw=w1080-h1080-s-no-gm?authuser=0" 
        alt="Williams Web Co Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;
