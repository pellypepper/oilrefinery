// src/routes.js
import { lazy } from 'react';

// Lazy load all page components
export const Home = lazy(() => import('./pages/home/home'));
export const About = lazy(() => import('./pages/about/about'));
export const Contact = lazy(() => import('./pages/contact/contact'));
export const Refinery = lazy(() => import('./pages/services/refinery'));
export const Hseq = lazy(() => import('./pages/hseq/hseq'));

// Define routes configuration
export const routesConfig = [
  {
    path: '/',
    element: Home,
    preload: () => import('./pages/home/home')
  },
  {
    path: 'about',
    element: About,
    preload: () => import('./pages/about/about')
  },
  {
    path: 'contact',
    element: Contact,
    preload: () => import('./pages/contact/contact')
  },
  {
    path: 'refinery',
    element: Refinery,
    preload: () => import('./pages/services/refinery')
  },
  {
    path: 'hseq',
    element: Hseq,
    preload: () => import('./pages/hseq/hseq')
  }
];