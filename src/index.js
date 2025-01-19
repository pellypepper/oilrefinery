// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onCLS, onFID, onLCP, onTTFB, onFCP } from 'web-vitals';

// Performance monitoring function
const reportWebVitalsToAnalytics = ({ name, delta, id }) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Web Vital: ${name}`, delta, id);
  }
  
  if (process.env.NODE_ENV === 'production') {
    try {
      console.log(`${name}: ${delta}`);
    } catch (error) {
      console.error('Error sending metrics:', error);
    }
  }
};

// Error Boundary Component
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

// Initialize app
performance.mark('app-start');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Performance measurements
performance.mark('app-rendered');
performance.measure('app-start-to-render', 'app-start', 'app-rendered');

// Monitor vitals
onCLS(reportWebVitalsToAnalytics);
onFID(reportWebVitalsToAnalytics);
onLCP(reportWebVitalsToAnalytics);
onTTFB(reportWebVitalsToAnalytics);
onFCP(reportWebVitalsToAnalytics);

// Lazy load Bootstrap JS
import('bootstrap/dist/js/bootstrap.min.js')
  .then(() => console.log('Bootstrap JS loaded'))
  .catch(err => console.error('Failed to load Bootstrap JS:', err));

// Report web vitals
reportWebVitals(reportWebVitalsToAnalytics);