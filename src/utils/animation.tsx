
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (direction = 'none', delay = 0) => {
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

export const staggerContainer = (staggerChildren: number, delayChildren?: number) => {
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

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up', 
  once = true 
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  // Remove threshold as it doesn't exist in the type
  const inView = useInView(ref, {
    once
  });
  
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
  animation: (element: HTMLElement) => gsap.core.Timeline | undefined, 
  dependencies: any[] = []
) => {
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    const tl = animation(element);
    
    return () => {
      if (tl) tl.kill();
      
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        // Handle the contains method check more safely
        if (trigger.vars.trigger === element) {
          trigger.kill(true);
        } else if (
          typeof trigger.vars.trigger === 'object' && 
          trigger.vars.trigger && 
          'contains' in trigger.vars.trigger &&
          typeof trigger.vars.trigger.contains === 'function'
        ) {
          if (trigger.vars.trigger.contains(element)) {
            trigger.kill(true);
          }
        }
      });
    };
  }, [ref, animation, ...dependencies]);
};
