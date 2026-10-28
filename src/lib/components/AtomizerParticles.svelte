<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let canvasRef: HTMLCanvasElement;
  let animId: number;

  export function triggerSpritz() {
    if (!particlesMesh || !particleVelocities) return;
    const positions = (particlesMesh.geometry as THREE.BufferGeometry).attributes.position.array as Float32Array;

    // Burst 350 particles forward like a fine mist spray from atomizer nozzle (center x=0, y=1.2, z=0)
    for (let i = 0; i < 350; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 0.15;
      positions[idx + 1] = 1.2 + (Math.random() - 0.5) * 0.1;
      positions[idx + 2] = 0.5 + Math.random() * 0.2;

      // Cone mist velocity
      const angle = (Math.random() - 0.5) * 0.8;
      const speed = 0.08 + Math.random() * 0.14;
      particleVelocities[idx] = Math.sin(angle) * speed;
      particleVelocities[idx + 1] = 0.02 + Math.random() * 0.04;
      particleVelocities[idx + 2] = speed * 1.5;
    }
    (particlesMesh.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
  }

  let particlesMesh: THREE.Points;
  let particleVelocities: Float32Array;

  onMount(() => {
    const width = canvasRef.clientWidth || window.innerWidth;
    const height = canvasRef.clientHeight || 760;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Ambient Dust / Golden Aroma Particles
    const count = 900;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    particleVelocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 10;
      positions[idx + 1] = (Math.random() - 0.5) * 6;
      positions[idx + 2] = (Math.random() - 0.5) * 5;

      // Golden & Cyan glowing hues
      const isGold = Math.random() > 0.4;
      if (isGold) {
        colors[idx] = 0.95;     // R
        colors[idx + 1] = 0.75; // G
        colors[idx + 2] = 0.25; // B
      } else {
        colors[idx] = 0.25;
        colors[idx + 1] = 0.85;
        colors[idx + 2] = 0.95;
      }

      particleVelocities[idx] = (Math.random() - 0.5) * 0.003;
      particleVelocities[idx + 1] = 0.002 + Math.random() * 0.005;
      particleVelocities[idx + 2] = (Math.random() - 0.5) * 0.003;
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const mat = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    particlesMesh = new THREE.Points(geom, mat);
    scene.add(particlesMesh);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    function handleMouseMove(e: MouseEvent) {
      const rect = canvasRef.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    function handleResize() {
      if (!canvasRef) return;
      const w = canvasRef.clientWidth;
      const h = canvasRef.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', handleResize);

    // Animation Loop
    function renderLoop() {
      animId = requestAnimationFrame(renderLoop);

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      particlesMesh.rotation.y += 0.001;
      camera.position.x = mouseX;
      camera.position.y = mouseY;

      const pos = geom.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        pos[idx] += particleVelocities[idx];
        pos[idx + 1] += particleVelocities[idx + 1];
        pos[idx + 2] += particleVelocities[idx + 2];

        // Reset if float too high or too far
        if (pos[idx + 1] > 3.5) {
          pos[idx + 1] = -3.5;
        }
        if (pos[idx + 2] > 3) {
          pos[idx + 2] = -2;
          particleVelocities[idx + 2] = (Math.random() - 0.5) * 0.003;
        }
      }
      geom.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }
    renderLoop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  });
</script>

<canvas
  bind:this={canvasRef}
  class="absolute inset-0 w-full h-full pointer-events-none z-10"
></canvas>
