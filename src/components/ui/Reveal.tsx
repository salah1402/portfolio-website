import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: 'default' | 'stagger';
  hairline?: boolean;
}

const CUBIC_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  delay = 0,
  className = '',
  variant = 'default',
  hairline = false,
}: RevealProps) {
  const renderHairline = () => {
    if (!hairline) return null;
    return (
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: CUBIC_EASE,
          delay,
        }}
        className="w-full h-[1px] bg-border origin-left mb-8"
      />
    );
  };

  if (variant === 'stagger') {
    const childArray = React.Children.toArray(children);
    return (
      <div className={className}>
        {renderHairline()}
        {childArray.map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: CUBIC_EASE,
              delay: delay + index * 0.08,
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {renderHairline()}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: CUBIC_EASE,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
