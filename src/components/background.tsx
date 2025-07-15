import React from 'react';
import Noise from './effects/noise';
import Beams from './effects/beams';

interface BackgroundProps {
  useBeams?: boolean;
  useNoise?: boolean;
  beamsProps?: {
    beamWidth?: number;
    beamHeight?: number;
    beamNumber?: number;
    lightColor?: string;
    speed?: number;
    noiseIntensity?: number;
    scale?: number;
    rotation?: number;
  };
  noiseProps?: {
    patternSize?: number;
    patternScaleX?: number;
    patternScaleY?: number;
    patternRefreshInterval?: number;
    patternAlpha?: number;
  };
}
//

const Background: React.FC<BackgroundProps> = ({
  useBeams = false,
  useNoise = true,
  beamsProps = {},
  noiseProps = {
    patternSize: 50,
    patternAlpha: 20,
    patternRefreshInterval: 1,
  }
}) => {
  return (
    <>
      {useBeams && (
        <div className="fixed inset-0 z-0">
          <Beams
            beamWidth={beamsProps.beamWidth ?? 2}
            beamHeight={beamsProps.beamHeight ?? 15}
            beamNumber={beamsProps.beamNumber ?? 12}
            lightColor={beamsProps.lightColor ?? "#ffffff"}
            speed={beamsProps.speed ?? 2}
            noiseIntensity={beamsProps.noiseIntensity ?? 1.75}
            scale={beamsProps.scale ?? 0.2}
            rotation={beamsProps.rotation ?? 0}
          />
        </div>
      )}
      {useNoise && (
        <Noise
          patternSize={noiseProps.patternSize}
          patternScaleX={noiseProps.patternScaleX}
          patternScaleY={noiseProps.patternScaleY}
          patternRefreshInterval={noiseProps.patternRefreshInterval}
          patternAlpha={noiseProps.patternAlpha}
        />
      )}
    </>
  );
};

export default Background;
