import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine);
        setInit(true);
      } catch (error) {
        setInit(false);
      }
    });
  }, []);

  return init ? (
    <Particles
      id="particles"
      // particlesLoaded={particlesLoaded}
      options={particlesOptions}
    />
  ) : null;
};

export default Particle;

const particlesOptions: ISourceOptions = {
  style: {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    padding: "0",
    margin: "0",
  },
  fullScreen: { zIndex: -1, enable: false },
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      // resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#333",
    },
    links: {
      color: "#333",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: false,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
