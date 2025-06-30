
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
        setTimeout(onComplete, 1000); // Delay before removing loader
      },
    });

    // Create loading progress animation
    tl.to(
      {},
      {
        duration: 2,
        onUpdate: () => {
          const progress = Math.round(tl.progress() * 100);
          setProgress(progress);
        },
      }
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="relative">
            {/* Circular loading animation */}
            <motion.div
              className="w-32 h-32 border-4 border-dark-300 rounded-full"
              style={{
                borderTopColor: '#00f0ff',
                borderRightColor: '#9d4edd',
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Inner circle */}
            <motion.div
              className="absolute top-2 left-2 w-24 h-24 border-2 border-dark-200 rounded-full"
              style={{
                borderBottomColor: '#06d6a0',
                borderLeftColor: '#00f0ff',
              }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* TB text in center with blink and glow */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                textShadow: [
                  '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff',
                  '0 0 5px #9d4edd, 0 0 10px #9d4edd, 0 0 15px #9d4edd',
                  '0 0 10px #06d6a0, 0 0 20px #06d6a0, 0 0 30px #06d6a0',
                  '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff'
                ],
                opacity: [1, 0.7, 1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-3xl font-bold text-white">
                &lt;TB /&gt;
              </h1>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Loading... {progress}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
