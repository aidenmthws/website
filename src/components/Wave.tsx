import { FC } from 'react';

import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.011; // Slightly slower for smoother movement

  // Updated waves with gradient colors matching your website theme
  const waves = {
    primaryWave: new WaveObj([0.018, 0.026, 0.012], 'rgba(59, 130, 246, 0.4)'), // Matches --color-primary
    secondaryWave: new WaveObj([0.015, 0.021, 0.01], 'rgba(44, 75, 161, 0.3)'), // Matches --color-secondary
    gradientWave: new WaveObj(
      [0.01, 0.018, 0.008],
      `linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(44, 75, 161, 0.3), rgba(191, 212, 242, 0.3))` // Matches --color-tertiary
    ),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context!, width, height, frequency);
    });
    frequency += 0.009; // Subtle frequency increment for dynamic but gentle movement
    requestAnimationFrame(render);
  };

  if (context) render();
  return null;
};

export default Wave;
