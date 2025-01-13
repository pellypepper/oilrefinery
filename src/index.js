import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onCLS, onFID, onLCP, onTTFB, onFCP } from 'web-vitals';

// Performance monitoring function
const reportWebVitalsToAnalytics = ({ name, delta, id }) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Web Vital: ${name}`, delta, id);
  }
  
  // Send to your analytics platform in production
  if (process.env.NODE_ENV === 'production') {
    try {
      console.log(`${name}: ${delta}`);
    } catch (error) {
      console.error('Error sending metrics:', error);
    }
  }
};

// Monitor all vital metrics
onCLS(reportWebVitalsToAnalytics);
onFID(reportWebVitalsToAnalytics);
onLCP(reportWebVitalsToAnalytics);
onTTFB(reportWebVitalsToAnalytics);
onFCP(reportWebVitalsToAnalytics);

// Add performance mark for app start
performance.mark('app-start');

// Create root with error boundary
const root = ReactDOM.createRoot(document.getElementById('root'));

// Add error boundary wrapper
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Render app with error boundary and performance monitoring
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Measure and log initial render time
performance.mark('app-rendered');
performance.measure('app-start-to-render', 'app-start', 'app-rendered');

// Report web vitals
reportWebVitals(reportWebVitalsToAnalytics);

// Lazy load Bootstrap JS
import('bootstrap/dist/js/bootstrap.min.js').then(() => {
  console.log('Bootstrap JS loaded');
});