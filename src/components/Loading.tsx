"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const loadRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const counterElement = counterRef.current;
    let currentValue = 0;

    const tl = gsap.timeline();

    // Set Initial States for Progress Bar
    gsap.set(progressRef.current, { width: "0%" });

    function updateCounter() {
      if (currentValue === 100) return;

      // Random increment for a natural effect
      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) currentValue = 100;

      // Update Counter Text
      if (counterElement) {
        (counterElement as HTMLElement).textContent = `${currentValue}%`;
      }

      // Update Progress Bar Width
      gsap.to(progressRef.current, {
        width: `${currentValue}%`,
        duration: 0.3, // Smooth transition
        ease: "power2.inOut",
      });

      // If counter has not reached 100, continue updating
      if (currentValue < 100) {
        const delay = Math.floor(Math.random() * 200) + 250;
        setTimeout(updateCounter, delay);
      } else {
        // Once counter reaches 100%, trigger the loader animation
        tl.to(loadRef.current, { opacity: 0, ease: "power4.in", duration: 1 })
          .call(() => {
            setLoadingComplete(true);
            onComplete(); // Notify the parent component (Banner) to start the animation
          });
      }
    }

    // Start the counter and progress bar animation
    updateCounter();
  }, []);

  return (
    <div
      ref={loadRef}
      className="fixed bg-[#fff] top-0 left-0 right-0 bottom-0 w-screen h-screen overflow-hidden z-[999] flex flex-col justify-center items-center pb-20 px-6 md:px-[32px] gap-[11px] "
    >

      <div>
        <p className="text-black text-[50px] font-HelveticaBlack">P</p>
      </div>
       {/* <span
        className="text-black absolute bottom-10 text-[15px] tracking-[-0.1em] leading-[59.42px] ml-3 font-MetroSans"
        ref={counterRef}
      >
        0%
      </span>  */}
      {/* <div className="relative w-full h-[10px] py-2 border-[#DFE0D8] border-[0.8px] rounded-[3px] overflow-hidden">
        <div
          className="h-[6px] bg-[#DFE0D8] absolute top-[0.30rem]"
          ref={progressRef}
        ></div>
      </div> */}
    </div>
  );
};

export default Loader;