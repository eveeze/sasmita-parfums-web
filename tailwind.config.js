/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parfum: {
          dark: '#0C0A09',       // Deep Luxury Obsidian
          surface: '#171513',    // Dark Studio Surface
          card: '#1F1C19',       // Card Background
          border: 'rgba(255, 255, 255, 0.1)',
          light: '#F5F3EF',      // Off-white Ivory
          muted: '#8A847C',      // Subtitle gray
          gold: '#D97706',       // Royal Amber
        },
        olfactive: {
          citrico: '#EAB308',    // Kuning Sitrus Purut
          oriental: '#DC2626',   // Merah Rempah Maluku
          musk: '#3B82F6',       // Biru Teratai Jawi
          woody: '#16A34A',      // Hijau Cendana Jawa
          floral: '#A855F7',     // Ungu Melati Keraton
          aromatic: '#EA580C',   // Oranye Tembakau & Kemenyan
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
};
