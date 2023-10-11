import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import
const DynamicTypewriter = dynamic(
  () => import('./dynamic-typewriter'), // adjust path as needed
  { ssr: false }
);

const TypewriterComponent = () => {
  return (
    <h2>
      <DynamicTypewriter />
    </h2>
  );
};

export default TypewriterComponent;
