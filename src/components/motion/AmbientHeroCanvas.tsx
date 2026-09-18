"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AmbientHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Create subtle floating golden embers / sacred temple dust particles
    const particleCount = 65;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      scales[i] = Math.random() * 2 + 1;
      opacities[i] = Math.random() * 0.5 + 0.2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle Material with warm gold tint (#E0BD62)
    const material = new THREE.PointsMaterial({
      color: 0xe0bd62,
      size: 1.6,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation loop with gentle upward drift
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Slow upward floating motion
        positions[i * 3 + 1] += 0.03;
        // Subtle sinusoidal sway
        positions[i * 3] += Math.sin(positions[i * 3 + 1] * 0.05) * 0.015;

        // Reset if drifted too high
        if (positions[i * 3 + 1] > 35) {
          positions[i * 3 + 1] = -35;
          positions[i * 3] = (Math.random() - 0.5) * 80;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Extremely subtle rotation
      particles.rotation.y += 0.0004;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
}
