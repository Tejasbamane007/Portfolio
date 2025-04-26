
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variant } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none', delay: number = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
  threshold?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  once = true,
  threshold = 0.1
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });
  
  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn(direction, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const useGSAPAnimation = (
  ref: React.RefObject<HTMLElement>,
  animation: (element: HTMLElement) => gsap.core.Timeline | void,
  dependencies: any[] = []
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    const tl = animation(element);
    
    return () => {
      if (tl) tl.kill();
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.vars.trigger === element || trigger.vars.trigger?.contains(element)) {
          trigger.kill(true);
        }
      });
    };
  }, [ref, animation, ...dependencies]);
};
