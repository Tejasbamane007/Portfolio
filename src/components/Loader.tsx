
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
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold">
              <span className="text-neon-blue">Dev</span>Studio
            </h1>
          </motion.div>

          <motion.div
            className="w-64 h-1 bg-dark-300 rounded-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-neon-blue"
              style={{ width: `${progress}%` }}
            />
          </motion.div>

          <motion.div
            className="mt-4 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {progress}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
