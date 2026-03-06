import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const OrganicBackground = ({ palette }) => {
  const meshRef = useRef();
  const { size } = useThree();
  const [transitionProgress, setTransitionProgress] = useState(1); // Start fully transitioned

  // Store the starting and target palettes for interpolation
  const [startPalette, setStartPalette] = useState(palette.flat());
  const [targetPalette, setTargetPalette] = useState(palette.flat());

  useEffect(() => {
    // Start a new transition from the current visible state to the new palette
    if (transitionProgress >= 1) {
      setStartPalette(meshRef.current.material.uniforms.uNextColors.value);
      setTargetPalette(palette.flat());
      setTransitionProgress(0); // Start the transition
    } else {
      // If a transition is already in progress, set the current state as the start point
      setStartPalette(
        meshRef.current.material.uniforms.uColors.value.map((c, i) =>
          THREE.MathUtils.lerp(
            c,
            meshRef.current.material.uniforms.uNextColors.value[i],
            transitionProgress
          )
        )
      );
      setTargetPalette(palette.flat());
      setTransitionProgress(0); // Reset the transition to blend from current state
    }
  }, [palette]);

  // Initialize uniforms
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uColors: { value: startPalette },
      uNextColors: { value: targetPalette },
      uTransitionProgress: { value: transitionProgress },
    }),
    [size] // Only 'size' should be in the dependency array
  );

  // Animation loop
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = elapsedTime;

      // Increment transition progress smoothly
      if (transitionProgress < 1) {
        setTransitionProgress((prev) => Math.min(prev + 0.01, 1)); // Adjust the transition speed here
      }
    }
  });

  // Update transition progress and uniforms
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uColors.value = startPalette;
      meshRef.current.material.uniforms.uNextColors.value = targetPalette;
      meshRef.current.material.uniforms.uTransitionProgress.value =
        transitionProgress;
    }
  }, [transitionProgress, startPalette, targetPalette]);

  return (
    <mesh ref={meshRef} scale={[10, 10, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default OrganicBackground;
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader with Color Transition
const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform float uColors[15]; // 5 colors * 3 components (RGB)
uniform float uNextColors[15]; // Next colors to transition to
uniform float uTransitionProgress; // Transition progress 0.0 - 1.0
varying vec2 vUv;

// Simplex noise implementation by Ashima Arts
vec3 mod289(vec3 x) { return x - floor(x / 289.0) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x / 289.0) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  // x0 = x0 - 0.0 + 0.0 * C
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  // Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients: 7x7 points over a cube, mapped onto an octahedron.
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);   //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  // Break into sign and magnitude
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  // Normalize gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
    dot(p2,x2), dot(p3,x3) ) );
}

// Function to get color from arrays
vec3 getColor(float colors[15], int index) {
  int idx = index * 3;
  return vec3(colors[idx], colors[idx + 1], colors[idx + 2]);
}

void main() {
  vec2 st = vUv;
  float t = uTime * 0.05;

  // Noise-based pattern
  float n = snoise(vec3(st * 5.0, t));

  // Map noise value to 0.0 - 1.0
  float noiseValue = n * 0.5 + 0.5;

  // No ripple effect
  float combined = noiseValue;

  // Clamp combined value
  combined = clamp(combined, 0.0, 1.0);

  // Interpolate colors with transition
  vec3 colorA;
  vec3 colorB;
  if (combined < 0.25) {
    colorA = mix(getColor(uColors, 0), getColor(uColors, 1), smoothstep(0.0, 0.25, combined));
    colorB = mix(getColor(uNextColors, 0), getColor(uNextColors, 1), smoothstep(0.0, 0.25, combined));
  } else if (combined < 0.5) {
    colorA = mix(getColor(uColors, 1), getColor(uColors, 2), smoothstep(0.25, 0.5, combined));
    colorB = mix(getColor(uNextColors, 1), getColor(uNextColors, 2), smoothstep(0.25, 0.5, combined));
  } else if (combined < 0.75) {
    colorA = mix(getColor(uColors, 2), getColor(uColors, 3), smoothstep(0.5, 0.75, combined));
    colorB = mix(getColor(uNextColors, 2), getColor(uNextColors, 3), smoothstep(0.5, 0.75, combined));
  } else {
    colorA = mix(getColor(uColors, 3), getColor(uColors, 4), smoothstep(0.75, 1.0, combined));
    colorB = mix(getColor(uNextColors, 3), getColor(uNextColors, 4), smoothstep(0.75, 1.0, combined));
  }

  vec3 finalColor = mix(colorA, colorB, uTransitionProgress);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;
