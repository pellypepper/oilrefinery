import { lazy } from 'react';

// Implement route-based code splitting with prefetching
export const routesConfig = [
  {
    path: '/',
    element: lazy(() => import(/* webpackChunkName: "home" */ './pages/home/home')),
    // Preload on hover or when parent link is visible
    preload: () => import(/* webpackPrefetch: true */ './pages/home/home')
  },
  {
    path: 'about',
    element: lazy(() => import(/* webpackChunkName: "about" */ './pages/about/about')),
    preload: () => import(/* webpackPrefetch: true */ './pages/about/about')
  },
  {
    path: 'contact',
    element: lazy(() => import(/* webpackChunkName: "contact" */ './pages/contact/contact')),
    preload: () => import(/* webpackPrefetch: true */ './pages/contact/contact')
  },
  {
    path: 'refinery',
    element: lazy(() => import(/* webpackChunkName: "refinery" */ './pages/services/refinery')),
    preload: () => import(/* webpackPrefetch: true */ './pages/services/refinery')
  },
  {
    path: 'hseq',
    element: lazy(() => import(/* webpackChunkName: "hseq" */ './pages/hseq/hseq')),
    preload: () => import(/* webpackPrefetch: true */ './pages/hseq/hseq')
  }
];