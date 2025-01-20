
// src/App.js
import { Suspense, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Navbar from './component/navbar/navbar';
import { routesConfig } from './route';
import './App.css';
// Optimized loader component with loading states
const PageLoader = () => (
  <div className="page-loader" role="progressbar" aria-valuemin="0" aria-valuemax="100">
    <div className="loader-content">Loading...</div>
  </div>
);

// Implement intersection observer for route prefetching
const usePrefetchRoutes = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const path = entry.target.getAttribute('href');
          const route = routesConfig.find(r => r.path === path?.replace('/', ''));
          if (route?.preload) {
            route.preload();
          }
        }
      });
    }, { rootMargin: '50px' });

    document.querySelectorAll('a[href^="/"]').forEach(link => {
      observer.observe(link);
    });

    return () => observer.disconnect();
  }, []);
};

function App() {
  usePrefetchRoutes();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        {routesConfig.map(({ path, element: Element }) => (
          <Route
            key={path}
            path={path === '/' ? undefined : path}
            index={path === '/'}
            element={
              <Suspense fallback={<PageLoader />}>
                <Element />
              </Suspense>
            }
          />
        ))}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;