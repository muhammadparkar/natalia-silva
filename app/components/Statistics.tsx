'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { statisticsData, StatisticItem } from '../data/content';

function Counter({ item }: { item: StatisticItem }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = item.value;
    const duration = 2000; // 2 seconds counting animation
    const increment = end / (duration / 16); // 60fps frame rate (~16ms)
    
    let animationFrameId: number;

    const updateCount = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(start));
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, item.value]);

  return (
    <div ref={elementRef} className="flex flex-col items-center text-center p-6">
      <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal tracking-tight font-light mb-2 flex items-center justify-center">
        <span>{count}</span>
        <span className="text-slate-blue font-sans font-medium text-3xl md:text-4xl translate-y-[-4px] ml-0.5">
          {item.suffix}
        </span>
      </div>
      <div className="h-[1px] w-8 bg-slate-200 my-3" />
      <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue">
        {item.label}
      </span>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-20 bg-sky-blue/20 overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center divide-x divide-slate-200/40">
          {statisticsData.map((stat, idx) => (
            <Counter key={stat.id} item={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
