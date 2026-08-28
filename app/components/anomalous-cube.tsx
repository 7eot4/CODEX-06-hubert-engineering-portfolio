'use client';

import { useRef } from 'react';

const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'] as const;

export function AnomalousCube() {
  const cubeRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    cubeRef.current?.style.setProperty('--pointer-x', `${x * 11}deg`);
    cubeRef.current?.style.setProperty('--pointer-y', `${y * -8}deg`);
  }

  function resetPointer() {
    cubeRef.current?.style.setProperty('--pointer-x', '0deg');
    cubeRef.current?.style.setProperty('--pointer-y', '0deg');
  }

  return (
    <div
      className="cube-interaction-zone"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <div className="cube-aura" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit-node orbit-node-one" />
      <div className="orbit-node orbit-node-two" />
      <div className="cube-float">
        <div className="cube-assembly" ref={cubeRef}>
          {faces.map((face, index) => (
            <div className={`cube-face cube-face-${face}`} key={face}>
              <span className="face-index">0{index + 1}</span>
              <span className="circuit-node circuit-node-a" />
              <span className="circuit-node circuit-node-b" />
            </div>
          ))}
          <div className="cube-core" />
          <div className="cube-scan-plane" />
        </div>
      </div>
      <span className="particle particle-one" />
      <span className="particle particle-two" />
      <span className="particle particle-three" />
      <span className="cube-label">ANOMALOUS CORE / ACTIVE</span>
    </div>
  );
}
