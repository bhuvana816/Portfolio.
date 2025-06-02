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
            value: 160,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 1.5,
            random: true,
          },
          move: {
            direction: 'none',
            speed: 0.2,
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
        },
        detectRetina: true,
      }}
    />
  );
}
