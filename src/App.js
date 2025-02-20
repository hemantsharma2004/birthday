'use client';

import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);
  const [audio] = useState(new Audio('/background-music.mp3'));

  const handleNextStep = () => {
    if (step === 0) {
      audio.loop = true;
      audio.play().catch((err) => console.error('Error playing audio:', err));
    }
    setStep((prevStep) => prevStep + 1);
  };

  const containerClass = 'w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center';
  const headingClass = 'font-bold mb-6 text-2xl sm:text-3xl md:text-4xl leading-tight';
  const buttonClass =
    'bg-red-500 hover:bg-red-700 px-6 py-3 text-white font-bold rounded-3xl text-lg sm:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg active:scale-95';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      {step === 0 && (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr from-red-600 via-pink-500 to-purple-600">
          <div className={containerClass}>
            <h1 className={headingClass}>Hey My Shona Putrr, click the button for a surprise !! 🥺👨‍🍼🧿</h1>
            <button className={buttonClass} onClick={handleNextStep}>Click Me 🤍</button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="relative w-full h-screen flex items-center justify-center">
          <img src="/image2.jpeg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4">
            <h1 className={headingClass}>Guess what'z it's the born out day of Mie each & everything as Even micro organisms too for This Janam'z ka 😤👨‍🍼🧿</h1>
            <button className={buttonClass} onClick={handleNextStep}>Next 💕</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="relative w-full h-screen flex items-center justify-center">
          <img src="/image.jpeg" alt="Happy Birthday" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-pink-300 drop-shadow-lg px-4">Happy Birthday, My Love! 🎉🎂💖</h1>
            <p className="mt-4 text-base sm:text-lg md:text-2xl text-white max-w-3xl px-4">
            Wish'in Mie Little boiiYYY a Chughu mughuu birthday with verieee muchh bugggu'ness !! 
😤🧿
Miee raaaaJaaaa beta !! The Day again has arrived to embark a Moment for Me to Get remind'ed as this was the Day Mie Bacha was born out For me As For This particular Janam'z 🧿
This was the Day Mie Young Man had taken birth to make Mie Life 🥺👨‍🍼🧿
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
