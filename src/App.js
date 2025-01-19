// src/App.js
import './App.css';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Navbar from './component/navbar/navbar';
import { routesConfig } from './route';

const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-content">Loading...</div>
  </div>
);

function App() {
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