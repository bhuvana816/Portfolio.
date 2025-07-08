// src/components/ParticleBackground.tsx
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: 'transparent',
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: {
            value: ['#a78bfa', '#f472b6', '#38bdf8'], // soft purples, pinks, and blues
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.4,
            random: true,
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
          move: {
            enable: true,
            direction: 'none',
            speed: 0.25,
            outModes: {
              default: 'out',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
